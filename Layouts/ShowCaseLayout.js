import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function ShowCaseLayout({
  title,
  children,
  metaDescription = 'Ini adalah meta description',
}) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={metaDescription} />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          ></link>
        </Head>
        <div className="min-h-screen w-full">
          <Navbar />
          <div className="md:h-20 h-4"></div>
          <div className="lg:px-8 lg:py-5 sm:block lg:flex w-full transition-all duration-300">
            {children}
          </div>
          <div className="h-20 lg:h-4"></div>
        </div>
      </div>
    </>
  );
}
