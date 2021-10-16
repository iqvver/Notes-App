import React from 'react';
import 'antd/dist/antd.css';
import './App.css';


import Sidebar from './Component/Sidebar/Sidebar';


export default class App extends React.Component {
  render() {
    return (<div>
      <Sidebar />
    </div>
    );
  }
}

