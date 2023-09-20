import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css";
import Table from "react-bootstrap/Table";
const KEY = "6149c91a29bdfefbb48b7aec044a986c";

export const Dashboard = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      setData(response.data);
      console.log(response.data.name);
    } catch (error) {
      alert("please enter the city name");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h1 className="d-flex justify-content-center mt-5">Weather App</h1>
            <div className="d-flex justify-content-center mt-5">
              <input
                style={{
                  width: "70%",
                  height: "40px",
                  borderRadius: "5px",
                  fontSize: "20px",
                }}
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <button
                onClick={fetchData}
                className="ms-2 rounded bg-success my-button"
                style={{ color: "white" }}
              >
                FETCH
              </button>
            </div>
            <div>
              {data ? (
                <>
                  <div className="d-flex justify-content-center mt-5">
                    <h1>
                      {data.name},{data.sys.country}
                    </h1>
                  </div>
                  <div>
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>Temp</th>
                          <th>Lat</th>
                          <th>Lon</th>
                          <th>Pressure</th>
                          <th>Humidity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data.main.temp}</td>
                          <td>{data.coord.lat}</td>
                          <td>{data.coord.lon}</td>
                          <td>{data.main.pressure}</td>
                          <td>{data.main.humidity}</td>
                          {/* <td>{data.weather[0].icon}</td> */}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </>
              ) : null}
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  );
};
