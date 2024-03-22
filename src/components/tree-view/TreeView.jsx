import React from 'react';
import './style.css';
import MenuList from './MenuList';
const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;

/*
tree view 
dynamic navigation menu 
recursive menu UI

nested data structure to simplify it 

first we have pass the TreeView in the parent App then from that we render the MenuList and pass the menus as a prop then inside the menu list we map on how many items in the list and render the menu item component for each item 

*/
