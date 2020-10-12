import React, {Component} from 'react';
import {Form, Input, Radio, Button} from 'antd';
import integrations from '../../integrations';
import s from './WidgetList.module.css';

class WidgetList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const {selectedWidgetForSetup} = this.props;
    const widgets = Object.keys(integrations).map(key => {
      const meta = integrations[key].meta;
      return (
        <div
          className={s['widget-item']}
          onClick={() => {
            selectedWidgetForSetup(key);
          }}
          key={key}
        >
          <div className={s['widget-title']}>{meta.name}</div>
          <div className={s['widget-desc']}>{meta.description}</div>
        </div>
      );
    });

    return (
      <div>
        <div>Widgets</div>
        <div className={s['widget-list']}>{widgets}</div>
      </div>
    );
  }
}

export default WidgetList;
