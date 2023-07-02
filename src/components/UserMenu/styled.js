import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Greeting = styled.p`
  margin-right: 10px;
`;

export const LogoutButton = styled.button`
  background-color: #ff4500;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #e63900;
  }
`;
