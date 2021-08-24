import Link from 'next/link';

const NavLink = ({ href, icon, title, active }) => {
  return (
    <Link href={href}>
      <a className="hover:text-gray-50 text-gray-300 sm:text-2xl md:text-base cursor-pointer flex items-center gap-2">
        <i className={icon + ' sm:text-2xl lg:text-base'}></i>{' '}
        <span className="hidden lg:inline-block">{title}</span>
      </a>
    </Link>
  );
};

export default NavLink;
