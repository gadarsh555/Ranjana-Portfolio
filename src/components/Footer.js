import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3 style={{display:'flex', justifyContent:"center"}}><hr style={{width:'10rem'}} />&nbsp;&nbsp;&nbsp;&nbsp; 
          Ranjana Gautam Portfolio &nbsp;&nbsp;&nbsp;&nbsp;<hr style={{width:'10rem'}}/></h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
