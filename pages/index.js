import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full">
        <nav className="flex bg-fuchsia-600 w-full">
          <Link href="/profile">
            <a>Link</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
