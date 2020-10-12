import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'antd/dist/antd.css';
import './App.css';
import {Drawer, Modal} from 'antd';
import Grid from './components/Grid/Grid';
import AddWidget from './components/AddWidget/AddWidget';
import Header from './components/Header/Header';
const DATE_FORMAT = 'hh:mm A';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  showDrawer = () => {
    this.setState({
      sidebar: true,
    });
  };

  onAddWidget = () => {
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
    console.log(this.props);
    return (
      <div className="App">
        <Header addWidget={this.onAddWidget} />
        <Grid />
        <Modal visible={false} title="" footer={null} width={900}>
          {this.state.sidebar ? <AddWidget /> : null}
        </Modal>
        <Drawer
          placement="right"
          width={400}
          height={window.innerHeight - (window.innerHeight * 10) / 100}
          closable={true}
          onClose={this.onClose}
          visible={this.state.sidebar}
        >
          {this.state.sidebar ? <AddWidget /> : null}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

// const mapDispatchToProps = dispatch => ({
//   createWidget: () => dispatch(createWidget()),
//   updateWidget: () => dispatch(updateWidget()),
// });

export default App;
