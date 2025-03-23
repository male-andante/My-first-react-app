import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import history from '../data/books/history.json'

export default function AllTheBooks() {
    return (
        <Container className='my-3'>
            <Row>
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

