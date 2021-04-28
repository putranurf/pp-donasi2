import React from "react";
import { Button, Card, Row, Container, Form } from "react-bootstrap";
import LogoPP from "../../assets/images/pemudapeduli.png";

const index = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "28rem" }}>
            <Row className="justify-content-md-center">
              <Card.Img variant="top" src={LogoPP} style={{ width: "10rem" }} />
            </Row>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default index;
