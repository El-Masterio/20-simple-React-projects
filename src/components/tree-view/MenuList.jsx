import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list?.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
