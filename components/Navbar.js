import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import NavLink from './NavLink';

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <nav className="flex w-full px-8 py-5 bg-gray-700 shadow-lg fixed bottom-0 md:bottom-auto lg:top-0 font-mono justify-between z-50 dark:bg-gray-800 dark:text-gray-100 transition-all duration-300">
        <div className="flex items-center">
          <Link href={'/' + router.query.username}>
            <a className="text-white sm:hidden lg:block">
              {<span>{router.query.username}</span> || (
                <Skeleton width={200} delay={1} duration={2} />
              )}
            </a>
          </Link>
        </div>
        <div className="sm:block lg:hidden">
          <Link href={'/' + router.query.username}>
            <a className="text-white">
              <i className="bi b-house-fill"></i>
            </a>
          </Link>
        </div>
        <div className="flex gap-10 justify-between">
          <NavLink
            href={'/' + router.query.username + '/educations'}
            title={'Educations'}
            icon={'bi bi-award-fill'}
          />
          <NavLink
            href={'/' + router.query.username + '/experiences'}
            title={'Experiences'}
            icon={'bi bi-signpost-split-fill'}
          />
          <NavLink
            href={'/' + router.query.username + '/portfolios'}
            title={'Portfolios'}
            icon={'bi bi-trophy-fill'}
          />
          <NavLink
            href={'/' + router.query.username + '/achievements'}
            title={'Achievements'}
            icon={'bi bi-unlock-fill'}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
