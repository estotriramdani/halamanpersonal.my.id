import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import DarkModeSwitcher from '../../../../components/DarkModeSwitcher';
import DetailItem from '../../../../components/DetailItem';
import ItemCard from '../../../../components/ItemCard';
import Navbar from '../../../../components/Navbar';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 dark:bg-gray-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div className="min-h-screen w-full">
        <Navbar />
        <div className="md:h-20 h-4"></div>
        <div className="lg:px-8 lg:py-5 sm:block lg:flex w-full transition-all duration-300">
          <div className="sm:w-full lg:w-2/3">
            <div className="px-4 pb-4">
              <div className="rounded-lg bg-white-600 bg-white dark:bg-gray-800 dark:text-gray-100 text-blue-500 shadow-lg mb-4 p-4 flex justify-between items-center">
                <h2 className="text-sm font-mono">
                  Experiences / Daily Prayer
                </h2>
                <div>
                  <DarkModeSwitcher />
                </div>
              </div>
              <DetailItem />
            </div>
          </div>
          <div className="w-full px-4 pb-4 lg:w-1/3 ">
            <div className="relative lg:sticky lg:top-24 overflow-auto h-full right-side">
              <div className="top-0 flex flex-col gap-2 pt-2 lg:pr-2 rounded-xl">
                <ItemCard
                  title={'BEM Sekolah Vokasi IPB'}
                  slug="bem-sekolah-vokasi-ipb-231248749"
                  subtitle="Departemen Pendidikan dan Keilmuan "
                />
                <ItemCard
                  title={'PT Amerta Indah Otsuka'}
                  slug="pt-amerta-indah-otsuka-28319723"
                  subtitle="Departemen Enginerring "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 lg:h-4"></div>
      </div>
    </div>
  );
}
