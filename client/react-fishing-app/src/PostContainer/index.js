import React, { Component } from 'react';
import PostList from '../PostList'
import CreatePostForm from '../CreatePostForm'

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
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
  


render() {
    return(
        <React.Fragment>
        <PostList posts={this.state.posts}/>
        <CreatePostForm addPost={this.addPost}/>
        </React.Fragment>
    )
  }
}

export default PostContainer;