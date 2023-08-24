import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'
import Image from '../Image/Image';
import Name from '../Name/Name';
import Price from '../Price/Price';
import Description from '../Description/Description';
function Products() {
    
  const [products,setProducts] = useState( [
    {
      name: "Product 1",
      price: 19.99,
      description:
        "This is the description for Product 1. It's a high-quality item that provides great value.",
      image:
        "https://mk-media.mytek.tn/media/catalog/product/cache/7683d28f7d5b38a73a8ad2bb0d1aa983/e/c/ecouteurs-sans-fil-apple-airpods-3-eme-generation-blanc.jpg",
    },
    {
      name: "Product 2",
      price: 29.99,
      description:
        "Product 2 is a versatile option that can meet various needs. Its features make it stand out.",
      image:
        "https://ae01.alicdn.com/kf/Ucb6d50167ddb469fb0c49cc0e6b4ef38L.jpg",
    },
    {
      name: "Product 3",
      price: 9.99,
      description:
        "Affordable and reliable, Product 3 is perfect for everyday use. Customers love its simplicity.",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776024000",
    },
  ]);

  // You can now use the 'products' array in your JavaScript code.

  return (
    <>

    {products.map(product=>
      <Card style={{ width: "18rem" }}>
       <Image image={product.image}/>
        <Card.Body>
          <Name name={product.name}/>
          <Card.Text>
          <Price price={product.price}/>
          <Description desc={product.description}/>
          </Card.Text>
        </Card.Body>
      </Card>
    )}
      
    </>
  );
}

export default Products;
