import React from 'react';
import { ImportData } from './components/importData';
import { Container, Row } from 'react-bootstrap';
import s from './app.module.css'

function App() {


  return (
    <Container fluid className={`border border-3 border-danger h-100 ${s.sizing}`}>
      <Row>
        <ImportData />
      </Row>
      <Row>
        table
      </Row>
    </Container>
  );
}

export default App;
