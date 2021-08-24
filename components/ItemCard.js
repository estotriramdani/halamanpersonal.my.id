import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const ItemCard = ({ title, subtitle, slug, pageName }) => {
  const router = useRouter();
  let currentSlug;
  if (router.query.slug) {
    currentSlug = router.query.slug;
  }
  const style = { border: '2px solid rgb(59, 130, 246)' };
  return (
    <div>
      <Link href={`/` + router.query.username + '/' + pageName + '/' + slug}>
        <a
          className="font-mono w-full min-h-full flex rounded-lg overflow-hidden bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-800 transition-all duration-200 cursor-pointer shadow-sm "
          style={currentSlug == slug ? style : {}}
        >
          <div className="w-full">
            <div className="px-3 py-2">
              <h4 className="text-md font-bold mb-1">{title}</h4>
              <p className="text-sm mb-1">{subtitle}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ItemCard;
