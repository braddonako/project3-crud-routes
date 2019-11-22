import React from 'react';
import { Button, Item} from 'semantic-ui-react';

const PostList = (props) => {
    const posts = props.posts.map((post) => { //this is our issue
      console.log(post); 
      if(localStorage.getItem('sessionId') === post.user.toString()){
        return(
          <Item key={post.id}>
            <Item.Image size='small' src={post.img}/>
            <Item.Content verticalAlign='middle'>
              <Item.Header>{post.nameOfFish}</Item.Header>
              <Item.Description>{post.description}</Item.Description>
              <Item.Description>Gear Used: {post.gear}</Item.Description>
              <Item.Description>{post.user.nickname}</Item.Description>
              <Item.Extra>
                <Button onClick={() => props.openAndEdit(post)} floated='right'>Edit Post</Button>
                <Button onClick={() => props.deletePost(post.id)} floated='right'>Delete post</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        )
      } else {
        return(           
          <Item key={post.id}>
            <Item.Image size='small' src={post.img}/>
            <Item.Content verticalAlign='middle'>
              <Item.Header>{post.nameOfFish}</Item.Header>
              <Item.Description>{post.description}</Item.Description>
              <Item.Description>Gear Used: {post.gear}</Item.Description>
              <Item.Description>{post.user.nickname}</Item.Description>
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