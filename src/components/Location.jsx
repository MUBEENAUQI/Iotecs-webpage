import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";



class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 9.891953,
            lon: 76.437904,
        };
    }
    componentDidMount() {


        firebase.database().ref("sensorData/1-set").on("value", snapshot => {
            
            this.setState({
                lat: snapshot.val().latitude,
                lon: snapshot.val().longitude,
            });

        });


    }

    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "100%", height: "100%" }}
                zoom={18}
                initialCenter={{
                    lat: this.state.lat,
                    lng: this.state.lon
                }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{
                        lat: this.state.lat,
                        lng: this.state.lon
                    }} />
                </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAA0 - iwkv8lsWSfXjWDlcvxXSeyXm6BJe0"
})(Location);



