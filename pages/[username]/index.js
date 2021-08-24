import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import ItemCard from '../../components/ItemCard';
import ShowCaseLayout from '../../components/Layouts/ShowCaseLayout';
import NavLink from '../../components/NavLink';

export default function Home() {
  const router = useRouter();
  return (
    <ShowCaseLayout title="Home">
      <div className="flex justify-center items-center min-h-full w-full flex-col">
        <p>
          Halaman ini akan digunakan untuk infomasi personal dari pengguna
          (berdasarkan username [contoh pada kasus ini yakni username{' '}
          <strong>{router.query.username}</strong>])
        </p>
        <p>Silakan klik menu pada navbar untuk melihat contoh</p>
      </div>
    </ShowCaseLayout>
  );
}
