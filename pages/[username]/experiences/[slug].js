import { useRouter } from 'next/dist/client/router';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

export default function Home() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Experiences">
      <LeftSide
        headingTitle="Experiences"
        pageName={'experiences'}
        isDetail={true}
      />
      <RightSide pageName="experiences" username={router.query.username} />
    </ShowCaseLayout>
  );
}
