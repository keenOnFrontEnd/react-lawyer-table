import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import s from './styles/app.module.css'
import { Table } from './components/TableComponent';
import { DropFileZone } from './components/Dropzone';

function App() {

  return (
    <Container fluid className={`${s.sizing} d-flex flex-column justify-content-center align-items-center`}>
      <Row className='d-flex justify-content-center align-items-center mt-5 w-25'>
        <DropFileZone />
      </Row>
      <Col className='d-flex justify-content-center'>
        <Table />
      </Col>
    </Container>
  );
}

export default App;
