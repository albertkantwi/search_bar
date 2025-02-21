import React from 'react';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => (
  <Container>
    <h1 text-center mt-4>Contact Keeper</h1>
    <Form>
      <InputGroup>
        <Form.Control placeholder="search contact" />
      </InputGroup>
    </Form>
    <Table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Albert</td>
          <td>Antwi</td>
          <td>albert@gmail.com</td>
          <td>0544028185</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Search;
