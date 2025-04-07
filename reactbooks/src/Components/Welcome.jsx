import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Welcome() {
    return (
        <Alert variant="success">
          <Alert.Heading>Welcome to ReactBooks</Alert.Heading>
          <p>
            ReactBooks is a website that allows you to read books online.
          </p>
          <hr />
          <p className="mb-0">
            We have a wide range of books to choose from.
          </p>
        </Alert>
      );
}
