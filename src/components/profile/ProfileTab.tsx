import { IAuthor } from '@/types/author.type';
import NavLink from '../common/NavLink';

interface Pageprops {
  profile: IAuthor;
}

const ProfileTab = ({ profile }: Pageprops) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink href="/profile/[pid]" as={`/profile/${profile.username}`}>
            My Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/profile/[pid]?favorite=true"
            as={`/profile/${profile.username}?favorite=true`}
          >
            Favorited Articles
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileTab;
