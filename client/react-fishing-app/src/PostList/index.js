import React from 'react';
import { Card, Button, Image, Item} from 'semantic-ui-react';

function PostList(props) {
    const posts = props.posts.map((post) => {
      console.log(post) ; 
      return (           
        <Card key={post.id}>
          <Card.Content>
            <Card.Header>{post.nameOfFish}</Card.Header>
            <Card.Description>{post.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props.deletePost(post.id)}>Delete post</Button>
            <Button onClick={() => props.openAndEdit(post)}>Edit post</Button>
          </Card.Content>
        </Card>

    )
    })
    return(
        <Card.Group>
            { posts }
        </Card.Group>
    )
}

export default PostList;