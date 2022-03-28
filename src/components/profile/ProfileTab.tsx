import { IAuthor } from '@/interfaces/author.interface';
import styled from '@emotion/styled';
import NavLink from '../common/NavLink';

interface Pageprops {
  profile: IAuthor;
}

const ProfileTab = ({ profile }: Pageprops) => {
  return (
    <div>
      <List>
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
      </List>
    </div>
  );
};

const List = styled('ul')`
  display: flex;
  li {
    list-style-type: none;
    padding: 0.5rem 1rem;
  }
`;

export default ProfileTab;
