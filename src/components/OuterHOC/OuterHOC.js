import React, {Component} from 'react';
import moment from 'moment';

const HOCFunction = WrappedWidget => {
  return class HOCFunction extends Component {
    constructor(props) {
      super(props);
      this.timer = null;
      this.refreshInterval = null;
    }
    componentDidMount() {
      console.log('componentDidMount', this.props);
      this.refreshInterval = 5;
      if (moment().diff(this.props.updatedAt) > 10000) {
        this.props.fetchWidgetData(this.props);
      }
      this.timer = setInterval(() => {
        this.refreshIfOld();
      }, 5000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }
    refreshIfOld = () => {
      if (moment().diff(this.props.updatedAt) > 60000) {
        this.props.fetchWidgetData(this.props);
      }
    };

    render() {
      return <WrappedWidget {...this.props} />;
    }
  };
};

export default HOCFunction;
