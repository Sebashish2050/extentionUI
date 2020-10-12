import React, {Component} from 'react';
import {Form, Input, Radio, Button, DatePicker} from 'antd';
import s from './setupWidget.module.css';
class SetupWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  onChange = fieldName => {
    return e => {
      this.setState({[fieldName]: e.target.value});
    };
  };

  onDateChange = fieldName => {
    return (m, dateStr) => {
      this.setState({[fieldName]: dateStr});
    };
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createWidget(
      {
        title: this.state.title,
        type: 'countdown',
        props: this.state,
      },
      {
        w: 3,
        h: 3,
      }
    );
  };

  render() {
    const {
      title = '',
      date = '',
    } = this.state;

    return (
      <div className={s['config-component']}>
        <div className={s['config-container']}>
          <h2 className={s['formHeader']}>Countdown</h2>
          <Form layout="vertical" onSubmit={this.onSubmit}>
            <Form.Item label="Title" className={s['formItem']}>
              <Input onChange={this.onChange('title')} />
            </Form.Item>
            <Form.Item label="Description"  className={s['formItem']}>
              <DatePicker onChange={this.onDateChange('date')} />
            </Form.Item>
            <Button type="primary" htmlType="submit" disabled={!title || !date}>
              Add Widget
            </Button>
          </Form>
        </div>
        {/* <div className={s['preview-container']} /> */}
      </div>
    );
  }
}
export default SetupWidget;
