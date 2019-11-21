import React, { Component } from 'react';
import PostList from '../PostList';
import CreatePostForm from '../CreatePostForm';
import { Grid } from 'semantic-ui-react';
import EditPostModal from '../EditPostModal';

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            postToEdit: {
                nameOfFish: '',
                description: '',
                gear: '',
                id: ''
            },
            showEditModal: false
        }
    }
    componentDidMount(){
        this.getPosts();
    }
    getPosts = async () => {
        try {
            const posts = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/');
            const parsedPosts = await posts.json();
            console.log(parsedPosts);
            this.setState({
                posts: parsedPosts.data
        });
    } catch(err) {
        console.log(err)
    }

} 
 addPost = async (e, post) => {
    e.preventDefault();
    console.log(post);

    try {

      const createdPostResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdPostResponse.json();
      console.log(parsedResponse, ' this is response')  
      
      this.setState({posts: [...this.state.posts, parsedResponse.data]})

    } catch(err){
      console.log(err)
    }
 
  }
  
  deletePost = async (id) => {
    console.log(id)
    const deletePostResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/' + id, {
                                              method: 'DELETE'
                                            });

    const deletePostParsed = await deletePostResponse.json();
    console.log(deletePostResponse)

    this.setState({posts: this.state.posts.filter((post) => post.id !== id )})

    console.log(deletePostParsed, ' response from Flask server')

  }
openAndEdit = (postFromTheList) => {
    console.log(postFromTheList, ' postToEdit  ');

    this.setState({
      showEditModal: true,
      postToEdit: {
        ...postFromTheList
      }
    })
  }
  handleEditChange = (e) => {

    this.setState({
      postToEdit: {
        ...this.state.postToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  }

closeAndEdit = async (e) => {
    e.preventDefault();
    try {

      const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/' + this.state.postToEdit.id, {
        method: 'PUT',
        body: JSON.stringify(this.state.postToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseParsed = await editResponse.json();
      console.log(editResponseParsed, ' parsed edit')

      const newPostArrayWithEdit = this.state.posts.map((post) => {

        if(post.id === editResponseParsed.data.id){
          post = editResponseParsed.data
        }

        return post
      });

      this.setState({
        showEditModal: false,
        posts: newPostArrayWithEdit
      });

    
    } catch(err){
      console.log(err)
    }
  }

render() {
    return(
    <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <PostList posts={this.state.posts} deletePost={this.deletePost} openAndEdit={this.openAndEdit}/>
          </Grid.Column>
         <Grid.Column>
           <CreatePostForm addPost={this.addPost}/>
          </Grid.Column>
          <EditPostModal handleEditChange={this.handleEditChange} open={this.state.showEditModal} postToEdit={this.state.postToEdit} closeAndEdit={this.closeAndEdit}/>
        </Grid.Row>
    </Grid>
    )
  }
}

export default PostContainer;
