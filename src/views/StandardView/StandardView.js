import React from 'react';
import s from './StandardView.module.css';
import {Icon} from 'antd';
import OuterHOC from '../../components/OuterHOC/OuterHOC';

const SimpleMetrics = props => {
  const title = props.title;
  const value = props.result.value;
  const unit = props.result.unit;
  const subtext = props.result.subtext;
  console.log('SimpleMetrics', props);
  return (
    <div className={s['widget']}>
      <div className={s['action-pane']}>
        <span className={s['action']}>
          <Icon type="sync" />
        </span>
        <span
          className={s['action']}
          onClick={() => {
            props.onDelete(props);
          }}
        >
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
          {title}
        </div>
        <div className={s['widget-body']}>
          <div className={s['value-container']}>
            <div className={s['value']}>{value}</div>
            <div className={s['unit']}>{unit}</div>
          </div>
          <div className={s['subtext']}>{subtext}</div>
        </div>
        <div className={s['footer']}>Updated 2 minutes ago</div>
      </div>
    </div>
  );
};
export default OuterHOC(SimpleMetrics);
