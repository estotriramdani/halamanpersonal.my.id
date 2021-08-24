import { useRouter } from 'next/dist/client/router';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

export default function Home() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Portfolios">
      <LeftSide
        headingTitle="Portfolios"
        pageName={'portfolios'}
        isDetail={true}
      />
      <RightSide pageName="portfolios" username={router.query.username} />
    </ShowCaseLayout>
  );
}
