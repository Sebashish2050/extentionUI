import React, {Component} from 'react';
import {connect} from 'react-redux';
import integrations from '../../integrations';
import WidgetList from '../WidgetList/WidgetList';
import s from './AddWidget.module.css';
import {createWidget} from '../../actions/simpleAction';
import {Button, Icon} from 'antd';

class AddWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWidget: null,
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  selectedWidgetForSetup = key => {
    this.setState({
      selectedWidget: key,
    });
  };

  goBackToWidgetsMenu = () => {
    this.setState({
      selectedWidget: null,
    });
  };

  render() {
    const {selectedWidget} = this.state;
    if (!selectedWidget) {
      return (
        <WidgetList selectedWidgetForSetup={this.selectedWidgetForSetup} />
      );
    }

    const SetupWidget = integrations[selectedWidget].setupWidget;

    console.log('SetupWidget::: ', SetupWidget);
    return (
      SetupWidget ? (
        <div className={s['add-widget-container']}>
          <div className={s['widget-title']}>
            <Button onClick={this.goBackToWidgetsMenu}>
              <Icon type="left" />
            </Button>
          </div>
          <div>
            <SetupWidget createWidget={this.props.createWidget} />
          </div>
        </div>
      ) : ""
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createWidget: (data, layout) => dispatch(createWidget(data, layout)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddWidget);
