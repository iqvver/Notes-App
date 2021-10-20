import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import store from './store'

import Sidebar from './Component/Sidebar/Sidebar';
import Card from './Component/Card'


export default class App extends React.Component {
  render() {
    return <Sidebar store={store} />
  }
}

