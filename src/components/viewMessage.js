import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat/app";
import "firebase/compat/database";

class ViewMessage extends React.Component {
    constructor(props) {

        super(props);

        this.state = { MessageList: [] }
    }

    componentDidMount() {



        firebase.database().ref("Consultation").on("value", snapshot => {
            let MessageList = [];
            snapshot.forEach(snap => {

                MessageList.push(snap.val());
            });
            this.setState({ MessageList: MessageList });
        });


    }

    render() {
        return (
            <div className="scrolldata">
                <div className="container">
                    <table id="example" class="display table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Designation</th>
                                <th>Message</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.MessageList.map(data => {

                                return (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.data}</td>
                                        
                                    </tr>

                                );

                            })}


                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
export default ViewMessage;