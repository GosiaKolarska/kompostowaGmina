import React from 'react';

import money from './svg/money.svg';
import bike from './svg/bike.svg';
import lamp from './svg/lamp.svg';
import road from './svg/road.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Accordion,
    Button,
    Card,
    ListGroup
  } from 'react-bootstrap';

export const Step2 = ({page, setPage}) => {
  return (
    <div className="wrapper step2">
      <header className="App-header">
            <img src={money} className="header-img" alt="money" />
            <h1>Twoja gmina zaoszczędzi około</h1>
            <div className="h1-sub">300 zł</div> 
            <div className="h1-sub-grey">~ 30 kg odpadów</div> 
        </header>
        
        <Card className="step2_card">
            <Card.Body>
                <Card.Text>
                Jeśli 100 mieszkańców twojej okolicy uzupełni kalkulator to mając podobne wyniki gmina będzie w stanie zrealizować:
                </Card.Text>
                <ListGroup>
                <ListGroup.Item>
                    <img src={bike} alt="bike"/>
                    12 km ścieżki rowerowej
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <img src={lamp} alt="lamp" />
                    2 km drogi asfaltowej
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <img src={road} alt="road" />
                    4 lampy uliczne
                    </ListGroup.Item>
                </ListGroup>

                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>W jaki sposób to działa?</Accordion.Header>
                        <Accordion.Body>
                        Bez danych wypełnienia kompostownika przesłanych przez mieszkańców miasto  co roku płaci kary związane z nierealizacją projektów unijnego związanych z recyklingiem.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Card.Body>
        </Card>

        <div className="d-flex gap-2">
        <Button 
            onClick={() => {setPage(page -1);}} 
            type="button" 
            className="btn-calc btn-back" 
            size="lg"
            variant="outline-primary"
            >
            Wróć
        </Button>
        <Button 
            onClick={() => {setPage(page + 1);}} 
            type="button" 
            className="btn-calc btn-step2" 
            variant="primary" 
            size="lg">
                Prześlij dane i pomóż swojej gminie
        </Button>
        </div>

    </div>
  )
}

export default Step2;