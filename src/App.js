import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import store from './store'
import Sidebar from './Component/Sidebar/Sidebar';

export default class App extends React.Component {
  render() {
    return (<div>
      <Sidebar store={store} />
    </div>
    );
  }
}
