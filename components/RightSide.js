import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../configs/fetcher';
import ItemList from './ItemList';
import ItemListSkeleton from './ItemListSkeleton';

const RightSide = ({ pageName }) => {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://halamanpersonal.vercel.app/api/${pageName}/${router.query.username}`,
    fetcher
  );
  return (
    <div className="w-full px-4 pb-4 lg:w-2/5 ">
      <div className="relative lg:sticky lg:top-24 overflow-auto h-full right-side">
        <div className="top-0 lg:pr-2 rounded-xl">
          {data ? (
            <ItemList data={data.data} pageName={pageName} />
          ) : (
            <ItemListSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
