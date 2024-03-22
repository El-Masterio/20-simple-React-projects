import React, { useState } from 'react';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item?.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={15} />
            ) : (
              <FaPlus color="#fff" size={15} />
            )}
          </span>
        ) : null}
      </div>

      {item?.children?.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item?.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;

/*
In the provided code for the MenuItem component, there's a function called handleToggleChildren which is responsible for toggling the visibility of the children associated with the current menu item. Here's how it works:

1- When handleToggleChildren is called, it takes getCurrentLabel as an argument, which represents the label of the current menu item.

2- Inside handleToggleChildren, setDisplayCurrentChildren is used to update the state variable displayCurrentChildren.
The new value for displayCurrentChildren is constructed by spreading the existing state (...displayCurrentChildren) and then setting the value associated with the key getCurrentLabel to the opposite of its current value (!displayCurrentChildren[getCurrentLabel]).

3- This toggling behavior is achieved because initially, when displayCurrentChildren is an empty object, accessing displayCurrentChildren[getCurrentLabel] returns undefined, which is interpreted as falsy. So !undefined evaluates to true. Subsequently, when a value is set for getCurrentLabel, its visibility is toggled each time handleToggleChildren is called.

This pattern efficiently manages the visibility state of the children associated with each menu item.

*/
