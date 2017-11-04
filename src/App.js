import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chart from './chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>1 minute</Tab>
            <Tab>5 minutes</Tab>
            <Tab>1 hour</Tab>
            <Tab>1 week</Tab>
          </TabList>
          <TabPanel>
            <Chart timestamp={'MIN_1'}/>
          </TabPanel>
          <TabPanel>
            <Chart timestamp={'MIN_5'}/>
          </TabPanel>
          <TabPanel>
            <Chart timestamp={'HOUR_1'}/>
          </TabPanel>
          <TabPanel>
            <Chart timestamp={'WEEK_1'}/>
          </TabPanel>
        </Tabs>    
      </div>
    );
  }
}

export default App;
