import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Text = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: #e63900;
  }
`;
