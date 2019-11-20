import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function PostList(props) {
    const posts = props.posts.map((post) => {
        return (           
        <Card key={post.id}>
          <Card.Content>
            <Card.Header>{post.nameOfFish}</Card.Header>
            <Card.Description>{post.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props.deletePost(post.id)}>Delete post</Button>
            <Button onClick={() => props.openAndEdit(post.id)}>Edit post</Button>
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