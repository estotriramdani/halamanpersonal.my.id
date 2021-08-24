import { useRouter } from 'next/dist/client/router';
import React from 'react';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';

import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

function Achievements() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Achievements">
      <LeftSide headingTitle="Achievements" />
      <RightSide pageName="achievements" username={router.query.username} />
    </ShowCaseLayout>
  );
}

export default Achievements;
