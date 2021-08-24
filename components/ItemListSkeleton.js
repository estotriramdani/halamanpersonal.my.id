import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ItemListSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <Skeleton width={`100%`} height={100} />
      <Skeleton width={`100%`} height={100} />
      <Skeleton width={`100%`} height={100} />
      <Skeleton width={`100%`} height={100} />
      <Skeleton width={`100%`} height={100} />
    </div>
  );
};

export default ItemListSkeleton;
