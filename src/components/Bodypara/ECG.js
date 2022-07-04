
import React, { Component } from "react"
import CanvasJSReact from "../../assets/canvasjs.react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [];   //dataPoints.
var k = 0;
var xVal = 0;
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

			eleven: 0,
			twelve: 0,
			thirteen: 0,
			fourteen: 0,
			fiveteen: 0,
			sixteen: 0,
			seventeen: 0,
			eighteen: 0,
			nineteen: 0,
			twenty: 0,

			twentyone: 0,
			twentytwo: 0,
			twentythree: 0,
			twentyfour: 0,
			twentyfive: 0,
			twentysix: 0,
			twentyseven: 0,
			twentyeight: 0,
			twentynine: 0,
			thirty: 0,

			thirtyone: 0,
			thirtytwo: 0,
			thirtythree: 0,
			thirtyfour: 0,
			thirtyfive: 0,
			thirtysix: 0,
			thirtyseven: 0,
			thirtyeight: 0,
			thirtynine: 0,
			forty: 0,
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
			this.setState({ nine: snapshot.val().ecg9 });
			this.setState({ ten: snapshot.val().ecg10 });

			this.setState({ eleven: snapshot.val().ecg11 });
			this.setState({ twelve: snapshot.val().ecg12 });
			this.setState({ thirteen: snapshot.val().ecg13 });
			this.setState({ fourteen: snapshot.val().ecg14 });
			this.setState({ fiveteen: snapshot.val().ecg15 });
			this.setState({ sixteen: snapshot.val().ecg16 });
			this.setState({ seventeen: snapshot.val().ecg17 });
			this.setState({ eighteen: snapshot.val().ecg18 });
			this.setState({ nineteen: snapshot.val().ecg19 });
			this.setState({ twenty: snapshot.val().ecg20 });

			this.setState({ twentyone: snapshot.val().ecg21 });
			this.setState({ twentytwo: snapshot.val().ecg22 });
			this.setState({ twentythree: snapshot.val().ecg23 });
			this.setState({ twentyfour: snapshot.val().ecg24 });
			this.setState({ twentyfive: snapshot.val().ecg25 });
			this.setState({ twentysix: snapshot.val().ecg26 });
			this.setState({ twentyseven: snapshot.val().ecg27 });
			this.setState({ twentyeight: snapshot.val().ecg28 });
			this.setState({ twentynine: snapshot.val().ecg29 });
			this.setState({ thirty: snapshot.val().ecg30 });

			this.setState({ thirtyone: snapshot.val().ecg31 });
			this.setState({ thirtytwo: snapshot.val().ecg32 });
			this.setState({ thirtythree: snapshot.val().ecg33 });
			this.setState({ thirtyfour: snapshot.val().ecg34 });
			this.setState({ thirtyfive: snapshot.val().ecg35 });
			this.setState({ thirtysix: snapshot.val().ecg36 });
			this.setState({ thirtyseven: snapshot.val().ecg37 });
			this.setState({ thirtyeight: snapshot.val().ecg38 });
			this.setState({ thirtynine: snapshot.val().ecg39 });
			this.setState({ forty: snapshot.val().ecg40 });
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
			dps.push({ x: xVal, y: this.state.nine }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.ten }); xVal++; dps.shift();

			dps.push({ x: xVal, y: this.state.eleven }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twelve }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.fourteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.fiveteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.sixteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.seventeen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.eighteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.nineteen }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twenty }); xVal++; dps.shift();

			dps.push({ x: xVal, y: this.state.twentyone }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentytwo }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentythree }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentyfour }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentyfive }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentysix }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentyseven }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentyeight }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.twentynine }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirty }); xVal++; dps.shift();

			dps.push({ x: xVal, y: this.state.thirtyone }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtytwo }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtythree }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtyfour }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtyfive }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtysix }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtyseven }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtyeight }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.thirtynine }); xVal++; dps.shift();
			dps.push({ x: xVal, y: this.state.forty }); xVal++; dps.shift();
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
			dps.push({ x: xVal, y: this.state.nine }); xVal++;
			dps.push({ x: xVal, y: this.state.ten }); xVal++;

			dps.push({ x: xVal, y: this.state.eleven }); xVal++;
			dps.push({ x: xVal, y: this.state.twelve }); xVal++;
			dps.push({ x: xVal, y: this.state.thirteen }); xVal++;
			dps.push({ x: xVal, y: this.state.fourteen }); xVal++;
			dps.push({ x: xVal, y: this.state.fiveteen }); xVal++;
			dps.push({ x: xVal, y: this.state.sixteen }); xVal++;
			dps.push({ x: xVal, y: this.state.seventeen }); xVal++;
			dps.push({ x: xVal, y: this.state.eighteen }); xVal++;
			dps.push({ x: xVal, y: this.state.nineteen }); xVal++;
			dps.push({ x: xVal, y: this.state.twenty }); xVal++;

			dps.push({ x: xVal, y: this.state.twentyone }); xVal++;
			dps.push({ x: xVal, y: this.state.twentytwo }); xVal++;
			dps.push({ x: xVal, y: this.state.twentythree }); xVal++;
			dps.push({ x: xVal, y: this.state.twentyfour }); xVal++;
			dps.push({ x: xVal, y: this.state.twentyfive }); xVal++;
			dps.push({ x: xVal, y: this.state.twentysix }); xVal++;
			dps.push({ x: xVal, y: this.state.twentyseven }); xVal++;
			dps.push({ x: xVal, y: this.state.twentyeight }); xVal++;
			dps.push({ x: xVal, y: this.state.twentynine }); xVal++;
			dps.push({ x: xVal, y: this.state.thirty }); xVal++;

			dps.push({ x: xVal, y: this.state.thirtyone }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtytwo }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtythree }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtyfour }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtyfive }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtysix }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtyseven }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtyeight }); xVal++;
			dps.push({ x: xVal, y: this.state.thirtynine }); xVal++;
			dps.push({ x: xVal, y: this.state.forty }); xVal++;
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