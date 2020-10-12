import React from 'react';
import {ContextMenu, MenuItem} from 'react-contextmenu';

const MainContextalMenu = props => {
  return (
    <ContextMenu id={props.id}>
      <div>
        <MenuItem data={{foo: 'Reading-Mode'}} onClick={props.handleClick}>
          Notes
        </MenuItem>
        <MenuItem data={{foo: 'Hello'}} onClick={props.handleClick}>
          Metrics
        </MenuItem>
        <MenuItem divider />
        <MenuItem data={{foo: 'bar'}} onClick={props.handleClick}>
          ContextMenu Item 3
        </MenuItem>
      </div>
    </ContextMenu>
  );
};

export default MainContextalMenu;
