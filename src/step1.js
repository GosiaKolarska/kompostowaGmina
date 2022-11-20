import calc from './svg/calculator.svg';
import second from './svg/025.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Button,
  Dropdown, 
  DropdownButton,
  Form,
  Card,
  InputGroup,
  Tab,
  Tabs
} from 'react-bootstrap';

import drop from './svg/drop.svg';
import size from './svg/size.svg';
import trash from './svg/trash.svg';

export const Step1 = ({page,setPage}) => {

  return (
    <div className="App step1">
      <header className="App-header">
        <img src={calc} className="header-img" alt="calculator" />
        <h1>Oblicz ile Twoja gmina zaoszczędzi dzięki Twojemu kompostownikowi</h1>
    </header>

    <h3 className="title_choose-tab">Wybierz metodę obliczania</h3>
    <Tabs
        defaultActiveKey="pojemnoscKompostownika"
        id="justify-tab-example"
        className="mb-3 main-tabs"
        justify
      >
      <Tab eventKey="pojemnoscKompostownika" title="Pojemność kompostownika">
        <Card className="card-item">
          <Card.Body>
            <Card.Subtitle className="mb-2">SPOSÓB 1</Card.Subtitle>
            <Card.Title>
            <img src={size} alt="size"/>
            Rozmiar kompostownika
            </Card.Title>
              <Form className="form-quantity">

                <Form.Label>Szerokość</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control type="number" aria-describedby="input-addon1" placeholder="110"/>
                  <InputGroup.Text className="input-addon" id="input-addon1">cm</InputGroup.Text>
                </InputGroup>

                  <Form.Label>Długość</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control type="number" aria-describedby="input-addon2" placeholder="110"/>
                    <InputGroup.Text className="input-addon" id="input-addon2">cm</InputGroup.Text>
                  </InputGroup>

                <Form.Label>Wysokość</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control type="number" aria-describedby="input-addon3" placeholder="110"/>
                  <InputGroup.Text className="input-addon" id="input-addon3">cm</InputGroup.Text>
                </InputGroup>

              </Form>
          </Card.Body>
        </Card>

        <Card className="card-item">
          <Card.Body>
            <Card.Subtitle className="mb-2">SPOSÓB 2</Card.Subtitle>
            <Card.Title>
            <img src={drop} alt="drop"/>
            Litry kompostownika
            </Card.Title>
              <Form className="form-liters">
                <InputGroup className="mb-3">
                  <Form.Control type="number" aria-describedby="input-addon4" placeholder="110"/>
                  <InputGroup.Text className="input-addon" id="input-addon4">l</InputGroup.Text>
                </InputGroup>
              </Form>
          </Card.Body>
      </Card>

      <Card className="card-item">
        <Card.Body>
          <Card.Title>Wypełnienie</Card.Title>
          <div className="d-flex">
            <div className="form-range-left">
              <Form.Range 
              type="range"
                id="form-range"
                min="0" 
                max="1"
                step="0.25"
                list="tickmarks"
                defaultValue="0.25"
              />
              <datalist id="tickmarks">
                <option value="0" label="0%"></option>
                <option value="25" label="25%"></option>
                <option value="50" label="50%"></option>
                <option value="75" label="75%"></option>
                <option value="100" label="100%"></option>
              </datalist>
            </div>
            <div className="form-range-right">
              <img src={second} alt="025" />
            </div>
          </div>
        </Card.Body>
      </Card>
      </Tab>

      <Tab eventKey="pojemnoscWiaderka" title="Pojemność wiaderka do kompostownika">
        <Card className="card-item">
          <Card.Body>
            <Card.Title>
            <img src={drop} alt="drop"/>
            Litry pojemnika
            </Card.Title>
              <Form className="form-liters">
                <InputGroup className="mb-3">
                  <Form.Control aria-describedby="input-addon4" type="number" placeholder="35"/>
                  <InputGroup.Text className="input-addon" id="input-addon4">l</InputGroup.Text>
                </InputGroup>
              </Form>
          </Card.Body>
        </Card>

        <Card className="card-item">
          <Card.Body>
            <Card.Title>
              <img src={trash} alt="trash"/>
              Częstotliwość wyrzucania odpadów
            </Card.Title>
              <Form className="form-liters">
                <InputGroup className="mb-3">
                  <Form.Control aria-describedby="input-addon4" type="number" placeholder="35"/>
                  <DropdownButton
                    variant="outline-secondary"
                    title="tygodniowo"
                    id="input-group-dropdown-2"
                    align="end"
                  >
                    <Dropdown.Item href="#">tygodniowo</Dropdown.Item>
                    <Dropdown.Item href="#">miesięcznie</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Form>
          </Card.Body>
        </Card>
      </Tab>

    </Tabs>

    <div className="d-grid gap-2">
        <Button 
        onClick={() => {setPage(page + 1);}} 
        type="button" 
        className="btn-calc" 
        variant="primary" 
        size="lg">
          Oblicz
        </Button>
    </div>

  </div>
    
  );
}

export default Step1;
