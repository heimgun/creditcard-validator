import React from 'react';
import {Button, Form, Alert, Row, Col, FormLabel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './CardForm.css';
import useForm from "../useForm";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CardForm = () => {
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
    return (
      <div>
        <div className="container">
          <div className="box justify-content-center align-items-center">
            <div className="formDiv">
            <div className="creditCard">
            <Cards
              cvc={values.cardSecurityCode}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
            <FormLabel>Card Number</FormLabel>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Form.Group>
                <FormLabel>Cardholder Name</FormLabel>
                <Form.Control
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                  <FormLabel>Expiration Date</FormLabel>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      name="cardExpiration"
                      placeholder="00/00"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group>
                  <FormLabel>CVV</FormLabel>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="000"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
              </Row>
         
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit">
                Validate
              </Button>
              
            </Form>
            </div>
            <Alert
              id="alertMessage"
              variant={errors.variant}
              show={errors.show}  >
              {errors.message}
            </Alert>{" "}
          </div>
        </div>
      </div>
    );
  };

export default CardForm;