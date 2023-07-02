import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    margin-right: 10px;

    &.active {
      color: #ff4500;
    }

    &:hover {
      color: #e63900;
    }
  `;

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
