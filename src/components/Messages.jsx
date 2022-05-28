import React, { useState } from 'react';
import { db } from "../connect/firebases";
import ViewMessage from '../components/viewMessage';
import Button from 'react-bootstrap/Button';


export default function Messages() {

    const [name, setName] = useState("");
    const [data, setData] = useState("");

    const handleOnChangename = (e) => {
        setName(e.target.value);
    };

    const handleOnChangedata = (e) => {
        setData(e.target.value);
    };

    const createConsultation = () => {
        const messageref = db.ref("Consultation");

        const message = {
            name, data,
            complete: false,
        };
        return messageref
            .push(message)
            .then((snapshot) => {
                console.log("Message has been pushed to firebase");
                console.log(snapshot.key);
                setName("");
                setData("");
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
        <div>
                <div className="d-flex bd-highlight example-parent">
                    <div className="p-2 flex-fill bd-highlight col-example"></div>
                    <div className="p-2 flex-fill bd-highlight col-example"><input type="text" onChange={handleOnChangename} value={name} placeholder="Name"/></div>
                    <div className="p-2 flex-fill bd-highlight col-example"> <input type="text" onChange={handleOnChangedata} value={data} placeholder="Message"/></div>
                    <div className="p-2 flex-fill bd-highlight col-example"><Button variant="outline-success" onClick={createConsultation} >Send Message </Button></div>
                </div>
            </div>
            <ViewMessage />
            <div style={{ height: 100 }} />
            </div>
    );
}