import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-gray-200 flex justify-center items-center">
        <Link href="/estotriramdani">
          <a className="text-2xl font-bold font-mono bg-white px-8 py-5 leading-0 rounded-lg hover:ring-2 ring-gray-800 text-gray-800">
            Go Example
          </a>
        </Link>
      </div>
    </div>
  );
}
