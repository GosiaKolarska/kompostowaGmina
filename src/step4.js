import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Button,
    Card,
  } from 'react-bootstrap';

  import sukcess from './svg/sukcess.svg';

function Step4() {
  return (
    <div className="wrapper">
        <Card className="card-success">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <img src={sukcess} />
                <Card.Title>Dziękujemy!</Card.Title>
                <Card.Text>
                    Twoja gmina zaoszczędziła około <b>1200 zł</b>
                </Card.Text>
            </Card.Body>
        </Card>


        <div className="d-grid gap-2">
            <Button className="btn-calc" variant="primary" size="lg">Udostępnij kalkulator</Button>
        </div>

    </div>
  )
}

export default Step4;