import { useRouter } from 'next/dist/client/router';
import React from 'react';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';

import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

function Portfolios() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Portfolios">
      <LeftSide headingTitle="Portfolios" />
      <RightSide pageName="portfolios" username={router.query.username} />
    </ShowCaseLayout>
  );
}

export default Portfolios;
