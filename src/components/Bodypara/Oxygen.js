import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";




class OXY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Temp: 0,
        };
    }
    componentDidMount() {


        firebase.database().ref("sensorData/1-set").on("value", snapshot => {
            console.log(snapshot.val().spo3);
            this.setState({ Temp: snapshot.val().spo3 });

        });


    }


    render() {
        return (


            <div className="tbox">
                <Row><p className="boxfont">Spo2 :</p></Row>
                <Row><p className="boxfont">{this.state.Temp}</p></Row>

            </div>

        );
    }
}

export default OXY;
