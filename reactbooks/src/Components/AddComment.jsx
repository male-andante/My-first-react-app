import React, {useEffect} from 'react'
import {Form, Col, Row, Button } from 'react-bootstrap'

/*STRUTTURA COMMENTO
{
    "comment": string
    "rate": string
    "elementId": string - ASIN del libro
}*/

// password lezione W2D4: eWPtisa3

export default function AddComment(elementId) {

    const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2U3Y2UzNDU2NzY1NTAwMTUyZGM2OTciLCJpYXQiOjE3NDMyNDQ4NTIsImV4cCI6MTc0NDQ1NDQ1Mn0.Buc-0R30-I1X8PKbDQhVPC0WMjShwGeQ4uR24aAGtI0"

    const postUrl = "https://striveschool-api.herokuapp.com/api/comments/"  //:elementId
    
    useEffect (
        () =>{
        fetch(postUrl +"/:" + elementId,{
            headers: {
                Authentication: auth
              }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => alert(err))
    
    },[])

  return (
        <Form>
          <Row className="mb-3" controlId="formHorizontalReview">
            <Form.Label column sm={2}>
              Recensione
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Scrivi la tua recensione" />
            </Col>
          </Row>
    
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Valutazione
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="*"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="**"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="***"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="****"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                />
                <Form.Check
                  type="radio"
                  label="*****"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios5"
                />
              </Col>
            </Form.Group>
          </fieldset>
    
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Invia la Recensione</Button>
            </Col>
          </Form.Group>
        </Form>
    ) 
}
