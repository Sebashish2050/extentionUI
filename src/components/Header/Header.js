import React from 'react';
import {Icon, Button} from 'antd';
import s from './Header.module.css';

const Header = props => {
  return (
    <div className={s['header']}>
      <div className={s['brand-name']}>TinyDashboard</div>
      <div className={s['add-new-widget']}>
        <Button
          type="primary"
          shape="round"
          icon="plus"
          size="large"
          onClick={() => {
            props.addWidget();
          }}
        >
          Add Widget
        </Button>
      </div>
    </div>
  );
};

export default Header;
