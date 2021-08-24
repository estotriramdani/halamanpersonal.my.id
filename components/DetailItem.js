import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import { fetcher } from '../configs/fetcher';

function DetailItem({ pageName }) {
  const router = useRouter();
  const url = `https://halamanpersonal.vercel.app/api/${pageName}/${router.query.username}/${router.query.slug}`;
  const { data, error } = useSWR(url, fetcher);
  return (
    <div className="transition-all duration-300 detail-item">
      {data ? (
        <div>
          <img
            src={data.data.image}
            alt={data.data.title}
            className="rounded-md shadow-lg ring-3 ring-green-600 lazyload"
          />
          <div className="px-8 py-6 mt-4 font-mono bg-white dark:bg-gray-800 dark:text-gray-100 text-dark-800 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold mb-3">{data.data.title}</h2>
            <h3 className="text-xl mb-4 font-semibold">{data.data.subtitle}</h3>
            <div
              className="text-base font-light text-justify"
              dangerouslySetInnerHTML={{ __html: data.data.description }}
            ></div>
          </div>
        </div>
      ) : (
        <div>
          <Skeleton
            width="100%"
            height="50vh"
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            width="80%"
            height="50px"
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            width="50%"
            height="40px"
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            width="100%"
            height="150px"
            style={{ marginBottom: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default DetailItem;
