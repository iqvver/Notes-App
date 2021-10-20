import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import store from './store'
import Window from './Component/Sidebar/Modal'


import Sidebar from './Component/Sidebar/Sidebar';
import Card from './Component/Card'


export default class App extends React.Component {
  render() {
    return (<div>
      <Sidebar store={store} />
      <Window />
    </div>
    );
  }
}
