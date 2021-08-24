import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import ItemCard from '../../components/ItemCard';
import NavLink from '../../components/NavLink';

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-ful">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div className="min-h-screen w-full">
        <nav className="flex w-full px-8 py-5 bg-blue-600 shadow-lg fixed bottom-0 md:bottom-auto lg:top-0 font-mono justify-between z-50">
          <div className="flex items-center">
            <Link href={'/' + router.query.username}>
              <a className="text-white">
                {<span>{router.query.username}</span> || (
                  <Skeleton width={200} delay={1} duration={2} />
                )}
              </a>
            </Link>
          </div>
          <div className="flex gap-10 justify-between">
            <Link href={'/educations'}>
              <a className="hover:text-blue-50 text-blue-300 sm:text-2xl md:text-base cursor-pointer flex items-center gap-2">
                <i
                  className={'bi bi-award-fill' + ' sm:text-2xl lg:text-base'}
                ></i>
                <span className="hidden lg:inline-block">{'Educations'}</span>
              </a>
            </Link>
            <NavLink
              href={'/' + router.query.username + '/educations'}
              title={'Experiences'}
              icon={'bi bi-signpost-split-fill'}
            />
            <NavLink
              href={'/' + router.query.username + '/certificates'}
              title={'Certificates'}
              icon={'bi bi-trophy-fill'}
            />
            <NavLink
              href={'/' + router.query.username + '/achievements'}
              title={'Achievements'}
              icon={'bi bi-unlock-fill'}
            />
          </div>
        </nav>
        <div className="md:h-20 h-4"></div>
        <div className="lg:px-8 lg:py-5 sm:block lg:flex w-full">
          <div className="sm:w-full lg:w-2/3">
            <div className="px-4 pb-4">
              <div className="rounded-lg bg-white-600 bg-white text-blue-500 shadow-lg mb-4 p-4">
                <h2 className="text-sm font-mono">
                  Experiences / Daily Prayer
                </h2>
              </div>
              <img
                src="http://esto.my.id/files/images/portfolios-mockup/thumbnail/waltme.jpg"
                alt="img"
                className="rounded-md shadow-lg ring-3 ring-green-600"
              />
              <div className="px-8 py-6 mt-4 font-mono bg-white rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold mb-3 text-blue-600">
                  Daily Prayer
                </h2>
                <h3 className="text-xl mb-4 font-semibold text-blue-600">
                  Web Application
                </h3>
                <div className="text-base font-light text-justify">
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus totam repudiandae porro aperiam architecto
                    perspiciatis quia deserunt laboriosam, est ipsa pariatur
                    asperiores omnis qui saepe in reprehenderit voluptatibus
                    eius commodi veniam perferendis aliquam velit temporibus sit
                    eveniet! Vel impedit quidem adipisci aliquam cum, optio,
                    tempora perferendis repellendus voluptas delectus vero.
                    Dolores, ut repudiandae assumenda molestiae, eos voluptate
                    rerum architecto exercitationem, aliquam nulla harum unde
                    necessitatibus adipisci aperiam neque est nam odit
                    voluptates explicabo eligendi? Dicta exercitationem ipsum
                    ipsa quam accusamus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4 lg:w-1/3 relative">
            <div className="relative lg:sticky top-0 lg:top-24 overflow-auto h-full right-side">
              {/* <div className="lg:w-full lg:h-10 sticky z-20 top-0 bg-gradient-to-b from-gray-100 to-transparent"></div> */}
              <div className="absolute top-0 flex flex-col gap-2 pt-2 lg:pr-2 rounded-xl">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 lg:h-4"></div>
      </div>
    </div>
  );
}
