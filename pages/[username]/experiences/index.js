import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useSWR from 'swr';
import DarkModeSwitcher from '../../../components/DarkModeSwitcher';
import DetailItem from '../../../components/DetailItem';
import ItemCard from '../../../components/ItemCard';
import ItemList from '../../../components/ItemList';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import endPoint from '../../../configs/endpoints';
import ShowCaseLayout from '../../../Layouts/ShowCaseLayout';

function Experiences() {
  const router = useRouter();
  return (
    <ShowCaseLayout
      title="Experiences"
      metaDescription={'Esto Triramdani Nurlustiawan adalah seoranng ...'}
    >
      <LeftSide headingTitle="Experiences" />
      <RightSide pageName="experiences" username={router.query.username} />
    </ShowCaseLayout>
  );
}

export default Experiences;
