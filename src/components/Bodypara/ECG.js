
import React, { Component } from "react"
import CanvasJSReact from "../../assets/canvasjs.react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{ x: 2, y: 81 },
{ x: 3, y: 83 },
{ x: 4, y: 88 },
{ x: 5, y: 98 },
{ x: 6, y: 92 },
{ x: 7, y: 85 },
{ x: 8, y: 73 },
{ x: 9, y: 71 },
{ x: 10, y: 70 },
];   //dataPoints.
var k = 0;
var xVal = 11;
var updateInterval = 100;
var i = 0;


class ECG extends React.Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
		this.state = {

			one: 0,
			two: 0,
			three: 0,
			four: 0,
			five: 0,
			six: 0,
			seven: 0,
			eight: 0,
			nine: 0,
			ten: 0,
		};
	}

	componentDidMount() {

		firebase.database().ref("sensorData/1-set").on("value", snapshot => {
			//console.log(snapshot.val().object);
			//this.setState({ count: snapshot.val().ecg });
			this.setState({ one: snapshot.val().ecg1 });
			this.setState({ two: snapshot.val().ecg2 });
			this.setState({ three: snapshot.val().ecg3 });
			this.setState({ four: snapshot.val().ecg4 });
			this.setState({ five: snapshot.val().ecg5 });
			this.setState({ six: snapshot.val().ecg6 });
			this.setState({ seven: snapshot.val().ecg7 });
			this.setState({ eight: snapshot.val().ecg8 });
			//this.setState({ nine: snapshot.val().ecg9 });
			//this.setState({ ten: snapshot.val().ecg10 });
		});

		setInterval(this.updateChart, updateInterval);



	}


	updateChart() {


		

		//   dps.push(dps[i])
		if (dps.length > 200) {
			dps.push({ x: xVal, y: this.state.one }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.two }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.three }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.four }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.five }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.six }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.seven }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.eight }); xVal++; dps.shift();
			//dps.push({ x: xVal, y: this.state.nine }); xVal++; dps.shift();
			//dps.push({ x: xVal, y: this.state.ten }); xVal++; dps.shift();


			k = 0
		}
		else {
			dps.push({ x: xVal, y: this.state.one }); xVal++;
			dps.push({ x: xVal, y: this.state.two }); xVal++;
			dps.push({ x: xVal, y: this.state.three }); xVal++;
			dps.push({ x: xVal, y: this.state.four }); xVal++;
			dps.push({ x: xVal, y: this.state.five }); xVal++;
			dps.push({ x: xVal, y: this.state.six }); xVal++;
			dps.push({ x: xVal, y: this.state.seven }); xVal++;
			dps.push({ x: xVal, y: this.state.eight }); xVal++;
			//dps.push({ x: xVal, y: this.state.nine }); xVal++;
			//dps.push({ x: xVal, y: this.state.ten }); xVal++;
        }
		this.chart.render();
	}

	render() {
		const options = {
			title: {
				text: "ECG - Echo Cardiogram"
			},
			axisX: {
				interval: 10000000000000000000000,
			},
			axisY: {
				title: "",
				gridColor: "white",
				tickColor: "white",
				interval: 1000,
				minimum: -700,
				maximum: 800
			},
			dataPointWidth: 5,
			data: [{
				type: "line",
				dataPoints: dps,
				markerColor: "rgba(200, 200, 200, 0)"

			},]
		}
		return (
			<div style={{ width: "25%%", justifyContent: "center" }}>
				<CanvasJSChart options={options}
					onRef={ref => this.chart = ref}
				/>
			</div>
		);
	}
}
export default ECG;