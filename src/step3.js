import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Button,
    Card,
    Form,
  } from 'react-bootstrap';

  import refresh from './svg/refresh.svg';

export const Step3 = ({page, setPage}) => {
  return (
    <div className="wrapper step3">
    <h3 className="step3_title">Prześlij dane do gminy</h3>
        <Card className="step3_card">
            <Card.Body>
                <img src={refresh} alt="refresh"/>
                <Card.Text>
                Twój komposownik jest wypłeniony w <b>25%</b>, a to przekłada się na około <b>100 kg</b> masy kompostowej
                </Card.Text>
                <a 
                    onClick={() => {
                        setPage(page - 2);
                     }}
                    className="card-link">
                        Edytuj
                </a>
        </Card.Body>
        </Card>

        <Form className="step3_form">
            <h3 className="step3_form-title">Dane personalne</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Imię</Form.Label>
                <Form.Control type="text" placeholder="Jan" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control type="text" placeholder="Kowalski" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ulica</Form.Label>
                <Form.Control type="text" placeholder="Wielicka" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kod pocztowy</Form.Label>
                <Form.Control type="text" placeholder="31-500" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Miasto</Form.Label>
                <Form.Control type="text" placeholder="Kraków" />
            </Form.Group>
        </Form>


        <div className="d-flex gap-2 step-3__btn">
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
                className="btn-calc btn-step3" 
                variant="primary" 
                size="lg">
                    Wyślij wyniki
            </Button>
        </div>

    </div>
  )
}

export default Step3;