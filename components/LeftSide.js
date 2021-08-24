import React from 'react';
import DetailItem from './DetailItem';
import HeadingDetail from './HeadingDetail';

const LeftSide = ({ headingTitle, pageName, isDetail }) => {
  return (
    <div className="sm:w-full lg:w-3/5">
      <div className="px-4 pb-4">
        <HeadingDetail headingTitle={headingTitle} />
        {isDetail ? (
          <DetailItem pageName={pageName} />
        ) : (
          <div className="rounded-lg bg-white-600 bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 shadow-lg mb-4 p-4 flex justify-center h-96 items-center">
            <h2 className="text-sm font-mono">Please choose item beside!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
