import React, {useState} from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import history from '../data/books/history.json'

export default function AllTheBooks() {

    const [book, setBook] = useState()

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setBook({
              ...book, 
              [e.target.name] : e.target.value
            })
      } 

    return (
        <Container className='my-3'>
            <Row>
                <Col>
                <Form.Control type="text" placeholder="filtra per titolo" onChange={handleChange} />
                </Col>
                {history.map(({title, img, price, category, asin}) => (
                    <Col key={asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <SingleBook
                            title={title}
                            img={img}
                            price={price}
                            category={category}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

