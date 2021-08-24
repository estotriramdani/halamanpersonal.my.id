import { useRouter } from 'next/dist/client/router';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

export default function Home() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Achievements">
      <LeftSide
        headingTitle="Achievements"
        pageName={'achievements'}
        isDetail={true}
      />
      <RightSide pageName="achievements" username={router.query.username} />
    </ShowCaseLayout>
  );
}
