import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

var request = require('request');

export default class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};    
    request('https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?' + this.props.timestamp,
    (error, response, body) => {
      if(error){
        console.log('error:', error); // Print the error if one occurred
      }
      this.setState({data: JSON.parse(body)});      
    });
  }
  render() {
    let data = this.state.data;
    data.map((item)=>item.date=moment(item.date).format('MM/DD/YYYY h:mm a'));
    return (
      <div>
        <LineChart width={1000} height={500} data={data}
        margin={{top: 30, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="date"/>
            <YAxis domain={['dataMin', 'dataMax']}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false}/>
            <Line type="monotone" dataKey="high" stroke="#82ca9d" dot={false}/>
            <Line type="monotone" dataKey="low" stroke="red" dot={false}/>
            <Line type="monotone" dataKey="close" stroke="pink" dot={false}/>
        </LineChart>        
      </div>
    );
  }
}
