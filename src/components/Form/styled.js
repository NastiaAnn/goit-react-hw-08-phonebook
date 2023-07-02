import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export const FormText = styled.input`
  padding: 8px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #e63900;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background-color: #ff4500;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e63900;
  }
`;
