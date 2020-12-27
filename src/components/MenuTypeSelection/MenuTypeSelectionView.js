/* eslint-disable react/prop-types */
import React from 'react';

const VIEW_LAYOUT_THEME = `
  flex p-4
  bg-gray-500
  overflow-x-auto
`;

const generateMenuTypeTheme = ({k, currentMenuType}) => {
  return `whitespace-nowrap px-2 py-1 mx-2 rounded-full 
  ${k === currentMenuType ?
    'bg-blue-400 text-white font-extrabold':
    'bg-white text-gray-600'}`;
};

const MenuTypeSelectionView = ({
  menuItemTypes,
  onMenuTypeChange,
  currentMenuType,
}) => {
  return (
    <div
      className={VIEW_LAYOUT_THEME}
    >
      {menuItemTypes.map(({name}, k) => (
        <div
          key={k}
          className={generateMenuTypeTheme({k, currentMenuType})}
          onClick={() => onMenuTypeChange(k)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default MenuTypeSelectionView;
