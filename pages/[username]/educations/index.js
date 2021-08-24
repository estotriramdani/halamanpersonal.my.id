import { useRouter } from 'next/dist/client/router';
import React from 'react';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';

import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

function Educations() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Educations">
      <LeftSide headingTitle="Educations" />
      <RightSide pageName="educations" username={router.query.username} />
    </ShowCaseLayout>
  );
}

export default Educations;
