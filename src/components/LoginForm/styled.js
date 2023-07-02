import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
