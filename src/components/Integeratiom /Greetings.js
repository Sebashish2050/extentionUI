import React from './node_modules/react';
import s from './Greetings.module.css';

const Greetings = props => {
  return (
    <div className={s['greeting']}>
      Good Morning, <span className={s['name']}>{props.name}</span>.
    </div>
  );
};

export default Greetings;
