import React from 'react';
import {Form, Input, Radio, Button} from 'antd';
import s from './DynamicForm.module.css';

const DynamicForm = props => {
  return (
    <div className={s['config-component']}>
      <div className={s['config-container']}>
        <Form layout="vertical">
          <Form.Item label="Title" className="formItem">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <Input type="textarea" />
          </Form.Item>
          <Button type="primary" block>
            Save
          </Button>
        </Form>
      </div>
      <div className={s['preview-container']} />
    </div>
  );
};

export default DynamicForm;
