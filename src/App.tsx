import React from 'react';
import { ImportData } from './components/SelectCSVfile';
import { Container, Row } from 'react-bootstrap';
import s from './app.module.css'
import { Table } from './components/TableComponent';

function App() {

  return (
    <Container fluid className={`h-100 ${s.sizing}`}>
      <Row>
        <ImportData />
      </Row>
      <Row className='d-flex justify-content-center'>
        <Table />
      </Row>
    </Container>
  );
}

export default App;
