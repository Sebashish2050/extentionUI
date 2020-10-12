import React, {Component} from 'react';
import {Form, Input, Select, Button} from 'antd';
import s from './setupWidget.module.css';
import locations from './locations';
import fetchMetrics from './fetchMetrics';

class SetupWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsCount: 3,
      location: 'IN:en',
      locationTitle: 'India',
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  onChange = (fieldName, value, title) => {
    if(fieldName === 'location') {
      let tempTitle = title.split('|')
      tempTitle = tempTitle[1] ? tempTitle[1].trim() : tempTitle[0].trim();
      this.setState({locationTitle: tempTitle});
    }

    this.setState({[fieldName]: value});
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.createWidget(
      {
        title: `News - ${this.state.locationTitle}`,
        type: 'googleNews',
        props: this.state,
      },
      {
        w: 3,
        h: 4,
      }
    );
  };

  render() {
    const Option = Select.Option;
    return (
      <div className={s['config-component']}>
        <div className={s['config-container']}>
          <h2 className={s['formHeader']}>Top Stories From Google</h2>
          <Form layout="vertical" onSubmit={this.onSubmit}>
            <Form.Item label="Number of stories" className={s['formItem']}>
              <Select
                onChange={(value, option) => this.onChange('newsCount', value, option.props.children)}
                defaultValue={this.state.newsCount}
              >
                <Option value="2" key="2">3</Option>
                <Option value="10" key="10">10</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Select Location" className={s['formItem']}>
              <Select
                showSearch
                optionFilterProp="children"
                onChange={(value, option) => this.onChange('location', value, option.props.children)}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
                defaultValue={this.state.location}
              >
                {locations.map(location => (
                  <Option value={location.key} key={location.key}>
                    {location.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit">
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
