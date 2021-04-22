import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const CityInput = ({ city, setCity, fetchCityWeather }) => {
  const [error, setError] = React.useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    //Write a logic to see if the field is empty
    if (!city) {
      setError("City field is empty");
    } else {
      setError("");
      //Make Api call
      fetchCityWeather();
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter city"
            onChange={handleInputChange}
          />
          <p className="text-danger">{error}</p>
        </Form.Group>

        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
