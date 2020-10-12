import React from 'react';
import s from './SimpleMetrics.module.css';
import {Button, Icon} from 'antd';

const SimpleMetrics = props => {
  return (
    <div className={s['widget']}>
      <div className={s['action-pane']}>
        <span className={s['action']}>
          <Icon type="sync" />
        </span>
        <span className={s['action']}>
          <Icon type="delete" theme="filled" />
        </span>
      </div>
      <div className={s['widget-content']}>
        <div
          className="drag-handle"
          style={{
            padding: '10px',
            background: '#f9f9f9',
            'border-bottom': '1px solid #ececec',
            cursor: 'all-scroll',
          }}
        >
          Quotes
        </div>
        <div className={s['widget-body']}>
          <div className={s['value-container']}>
            <div className={s['value']}>04:40</div>
            <div className={s['unit']}>PM</div>
          </div>
          <div className={s['metrics']}>hello</div>
        </div>
        <div className={s['footer']}>Updated 2 minutes ago</div>
      </div>
    </div>
  );
};
export default SimpleMetrics;
