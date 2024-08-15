import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import React from "react";

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (response.ok) {
        const data = await response.json();
        this.setState({posts: data, loading: false});
      } else {
        console.error('Error fetching posts:', response.status);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  render() {
    const {posts, loading} = this.state;

    if (loading) {
      return <p className='fs-1'>Loading...</p>;
    }

    return (
      <Container className='pt-3'>
        <Row className="g-4">
          {posts.map((post) => (
            <Col key={post.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 d-flex flex-column">
                <Card.Body data-post-id={post.id} className="d-flex flex-column">
                  <Card.Title>
                    <span className='fs-3'>#{post.id} </span>
                    {post.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">{post.body}</Card.Text>
                  <Button variant="primary" className="mt-auto">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PostCatalog;
