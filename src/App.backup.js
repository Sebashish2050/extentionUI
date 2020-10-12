import React, {Component} from 'react';
import moment from 'moment';
import {ContextMenuTrigger} from 'react-contextmenu';
//import 'antd/lib/style/index.css';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import 'antd/lib/drawer/style/index.css';
import './App.css';
import {Drawer, Button} from 'antd';
import MainContextalMenu from './components/MainContextalMenu/MainContextalMenu';
import Greetings from './components/Greetings/Greetings';

const DATE_FORMAT = 'hh:mm A';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeNow: moment().format(DATE_FORMAT),
      sidebar: true,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({timeNow: moment().format(DATE_FORMAT)});
    }, 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  onMenuClick = name => {
    console.log('Hello');
  };
  showDrawer = () => {
    this.setState({
      sidebar: true,
    });
  };

  onClose = () => {
    this.setState({
      sidebar: false,
    });
  };
  render() {
    const {timeNow} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="time-now" onClick={this.showDrawer}>
            {timeNow}
          </div>
          <Greetings name="Arun" />
        </header>

        <MainContextalMenu
          onClick={this.state.onClick}
          id="mainContextualMenu"
        />
        <Drawer
          title="Basic Drawer"
          placement="right"
          width={900}
          closable={true}
          onClose={this.onClose}
          visible={this.state.sidebar}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default App;
