import React from 'react';
import s from './Greetings.module.css';
import {Button} from 'antd';

const OAuth = props => {
  return (
    <div className={s['greeting']}>
      Connect with TWITTER to activate this widget
      <Button>Setup</Button>
    </div>
  );
};

export default OAuth;
