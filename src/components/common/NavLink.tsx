import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <Link href={href} as={as} passHref>
      {encodeURIComponent(asPath) === encodeURIComponent(as) ? (
        <StyledLink>{children}</StyledLink>
      ) : (
        <a>{children}</a>
      )}
    </Link>
  );
};

const StyledLink = styled('a')`
  color: red;
`;

export default NavLink;
