import { useRouter } from 'next/dist/client/router';
import LeftSide from '../../../components/LeftSide';
import RightSide from '../../../components/RightSide';
import ShowCaseLayout from '../../../components/Layouts/ShowCaseLayout';

export default function Home() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Educations">
      <LeftSide
        headingTitle="Educations"
        pageName={'experiences'}
        isDetail={true}
      />
      <RightSide pageName="educations" username={router.query.username} />
    </ShowCaseLayout>
  );
}
