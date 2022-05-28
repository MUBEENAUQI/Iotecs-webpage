import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Modal from 'react-bootstrap/Modal'
import "../../index.css";



class Temp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show: false,
            TempList: []
        };
    }

    componentDidMount() {


        firebase.database().ref("mlx90614/1-set").on("value", snapshot => {
            console.log(snapshot.val().object);
            this.setState({ count: snapshot.val().object });

        });
        firebase.database().ref("mlx90614/2-push").on("value", snapshot => {
            let TempList = [];
            snapshot.forEach(snap => {

                TempList.push(snap.val());
                console.log(snap.val());
            });
            this.setState({ TempList: TempList });
        });

    }

    render() {
        return (


            <div className="home">
               
                    <Col style={{ marginTop: 30 }}>
                        <Card className="tempcard" onClick={() => this.setState({ show: true })} >

                            <Card.Body>
                                <Card.Title style={{ marginTop: 5 }}>Body Temperature</Card.Title>
                                <Card.Text>
                                    Normal body Temperature of a person : 36.1 C to 37.2 C
                                </Card.Text>
                                <Card.Text style={this.state.count > 35 && this.state.count < 38 ? { color: 'green' } : { color: "red" }}>
                                    Patient body temperature : {this.state.count} C
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        <Modal
                            show={this.state.show}
                            onHide={() => this.setState({ show: false })}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    Previous Body Temperature Review
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {this.state.TempList.map(data => {

                                    return (
                                        <tr>
                                            <td style={data.object > 35 && data.object < 38 ? { color: 'green' } : { color: "red" }} > {data.object}{' '}</td>

                                        </tr>
                                    );
                                })}
                            </Modal.Body>
                        </Modal>
                    </Col>



                </div>
         

        );
    }
}

export default Temp;
