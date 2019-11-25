import React from 'react';
import { Button, Item} from 'semantic-ui-react';

const PostList = (props) => {
    const posts = props.posts.map((post) => { //this is our issue
      console.log(post); 
      console.log(post.user);
      if(localStorage.getItem('sessionId') === post.user.toString()  || (
        post.user.id && localStorage.getItem('sessionId') === post.user.id.toString())
        ){
        return(
          <Item key={post.id} style={{flexDirection:'row'}}>
            <Item.Image size='small' src={post.img} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              border: 'double white 10px',
              borderRadius: '15px',
              padding: '7px'
            }}/>
            <Item.Content verticalAlign='middle'>
              <div style={{
              border: 'double white 10px',
              borderRadius: '15px',
              padding: '7px'
            }}>
              <Item.Header>Fish Species: {post.nameOfFish}</Item.Header>
              <Item.Description>Journal: {post.description}</Item.Description>
              <Item.Description>Gear Used: {post.gear}</Item.Description>
              <Item.Description>Posted By: {post.user.nickname}</Item.Description>
              
              <Item.Extra>
                <Button onClick={() => props.openAndEdit(post)} floated='middle'>Edit Post</Button>
                <Button onClick={() => props.deletePost(post.id)} floated='middle'>Delete post</Button>
              
              </Item.Extra>
              </div>
            </Item.Content>
          </Item>
        )
      } else {
        return(           
          <Item key={post.id} style={{flexDirection:'row'}} >
            <Item.Image size='small' src={post.img} style={{
              border: 'double white 7px',
              borderRadius: '15px',
              padding: '7px'
            }}/>
            <Item.Content verticalAlign='middle'>
              <div style={{
              border: 'double white 10px',
              borderRadius: '15px',
              padding: '7px'}}>
              <Item.Header>Fish Species: {post.nameOfFish}</Item.Header>
              <Item.Description>Journal: {post.description}</Item.Description>
              <Item.Description>Gear Used: {post.gear}</Item.Description>
              <Item.Description>Posted by: {post.user.nickname}</Item.Description> 
              </div>
            </Item.Content>
          </Item>
        )
        }
    })
    // console.log(posts)
    // console.log(typeof(posts))
        return(
          <Item.Group relaxed>
            { posts }
          </Item.Group>
    )
  }
export default PostList;