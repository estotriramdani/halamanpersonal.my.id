import { useRouter } from 'next/dist/client/router';
import React from 'react';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';

import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

function Experiences() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Experiences">
      <LeftSide headingTitle="Experiences" />
      <RightSide pageName="experiences" username={router.query.username} />
    </ShowCaseLayout>
  );
}

export default Experiences;
