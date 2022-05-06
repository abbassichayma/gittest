import React from 'react'
import {Row,Col,Card}from 'react-bootstrap';

function Carte({MyCustumCard}) {
    const add =(a,b)=>a+b
  return (
    <div>
        <Row xs={1} md={2} className="g-4">
  {MyCustumCard.map((el) => (
    <Col>
      <Card>
        <Card.Img variant="top"  src="https://cdn.xxl.thumbs.canstockphoto.fr/homme-avatar-image-profil-image_csp21321878.jpg" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.username}
            <tr></tr>
            {el.email}
            <tr></tr>
            {el.phone}
            
            {add(Number(el.address.geo.lat) , Number(el.address.geo.lng))}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}

export default Carte
