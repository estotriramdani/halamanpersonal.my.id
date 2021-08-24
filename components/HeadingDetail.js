import React from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';

const HeadingDetail = ({ headingTitle }) => {
  return (
    <div className="rounded-lg bg-white-600 bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg mb-4 p-4 flex justify-between items-center">
      <h2 className="text-md font-mono font-bold">{headingTitle}</h2>
      <div>
        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default HeadingDetail;
