import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../index.css";
import Temperature from "../../src/components/Bodypara/Temperature"
import Oxy from "../../src/components/Bodypara/Oxygen"
import Pulse from "../../src/components/Bodypara/PulseRate"
import ECG from "../../src/components/Bodypara/ECG"


class Home extends React.Component {

    render() {
        return (

            <div className="homescreen">
                <Row className="ecg">
                    <ECG/>
                </Row>
                <Row className="para">
                    <Col className="temprature"> <Temperature /></Col>
                    <Col className="pulserate"><Pulse /></Col>
                    <Col className="oxygenlevel"><Oxy/></Col>
                </Row>
            </div>

  );
    }
}

export default Home;
