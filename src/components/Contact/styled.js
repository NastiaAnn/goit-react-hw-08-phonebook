import styled from 'styled-components';

export const ContactItem = styled.li`
  min-width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:nth-child(even) {
    background-color: #dcdcdc;
  }
  &:hover {
    border-color: #e63900;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #808080;
  color: #fff;
  border: none;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
  }
`;
