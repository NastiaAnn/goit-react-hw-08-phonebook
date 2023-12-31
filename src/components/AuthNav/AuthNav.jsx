import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
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
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
