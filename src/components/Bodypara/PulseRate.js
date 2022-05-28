import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";




class Pulse extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            Temp: 0,
        };
    }
    componentDidMount() {


        firebase.database().ref("sensorData/1-set").on("value", snapshot => {
            console.log(snapshot.val().beatsPerMinute);
            this.setState({
                Temp: snapshot.val().beatsPerMinute });

        });


    }


    render() {
        return (


            <div className="tbox">
                <Row><p className="boxfont">Pulse Rate :</p></Row>
                <Row><p className="boxfont">{this.state.Temp}</p></Row>

            </div>

        );
    }
}

export default Pulse;
