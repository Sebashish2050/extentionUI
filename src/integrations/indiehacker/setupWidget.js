import React, {Component} from 'react';
import { Form, Button } from 'antd';
import s from './setupWidget.module.css';
class SetupWidget extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  
  onSubmit = e => {
    console.log('Inside ifffff');
    console.log(this.props);
    e.preventDefault();
    this.props.createWidget(
      {
        title: 'Quotes',
        type: 'indiehacker',
        props: {},
      },
      {
        w: 9,
        h: 3,
      }
    );
  };

  render() {
    return (
      <div className={s['config-component']}>
        <div className={s['config-container']}>
          <h2 className={s['formHeader']}>Indie Hacker Quotes</h2>
          <Form layout="vertical" onSubmit={this.onSubmit}>
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
