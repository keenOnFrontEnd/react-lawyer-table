import React from 'react';
import { ImportData } from './components/SelectCSVfile';
import { Container, Row,Col } from 'react-bootstrap';
import s from './app.module.css'
import { Table } from './components/TableComponent';

function App() {

  return (
    <Container fluid className={`h-100 ${s.sizing}`}>
      <Row>
        <ImportData />
      </Row>
      <Col className='d-flex justify-content-center'>
        <Table />
      </Col>
    </Container>
  );
}

export default App;
