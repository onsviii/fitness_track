import React from "react";
import Container from 'react-bootstrap/Container';
import CardItem from "../../components/CardItem/CardItem";
import "./BlogPage.css"

const Blog = () => {
  return (
    <Container className="blog-container">
      <h1 className="text-light mb-4">Блог</h1>
      <Container className="card-container">
        <CardItem 
        title="Lorem Ipsum"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat."
        />
        <CardItem 
        title="Lorem Ipsum"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat."
        />
        <CardItem 
        title="Lorem Ipsum"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat."
        />
        <CardItem 
        title="Lorem Ipsum"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat."
        />
      </Container>
    </Container>
  );
}

export default Blog;