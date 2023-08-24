import Card from "react-bootstrap/Card";
import React from 'react';

function Image({image}) {
  return (
    <>
      <Card.Img variant="top" src={image} />
    </>
  );
}

export default Image;
