import checkLogin from '@/utils/checkLogin';
import storage from '@/utils/storage';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Maybe from '../common/Maybe';
import NavLink from '../common/NavLink';

const TabList = () => {
  const { data: currentUser } = useQuery('user', () => storage('user'));
  const isLoggedIn = checkLogin(currentUser);
  const router = useRouter();
  const {
    query: { tag },
  } = router;

  if (!isLoggedIn) {
    return (
      <ul>
        <li>
          <NavLink href="/" as="/">
            Global Feed
          </NavLink>
        </li>
        <Maybe test={!!tag}>
          <li>
            <NavLink href={`/?tag=${tag}`} as={`/?tag=${tag}`}>
              {tag}
            </NavLink>
          </li>
        </Maybe>
      </ul>
    );
  }
  return (
    <ul>
      <li>
        <NavLink
          href={`/?follow=${currentUser?.username}`}
          as={`/?follow=${currentUser?.username}`}
        >
          Your Feed
        </NavLink>
      </li>

      <li>
        <NavLink href="/" as="/">
          Global Feed
        </NavLink>
      </li>

      <Maybe test={!!tag}>
        <li>
          <NavLink href={`/?tag=${tag}`} as={`/?tag=${tag}`}>
            {tag}
          </NavLink>
        </li>
      </Maybe>
    </ul>
  );
};

export default TabList;
