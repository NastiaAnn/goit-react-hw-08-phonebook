import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.name.value.trim() === '') {
      Notify.warning('Name field cannot be empty. Please, fill in');
      return;
    }
    if (form.elements.email.value.trim() === '') {
      Notify.warning('Email field cannot be empty. Please, fill in');
      return;
    }

    if (form.elements.password.value.trim() === '') {
      Notify.warning('Password field cannot be empty. Please, fill in');
      return;
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

    Notify.success(
      'Successful registration. Welcome to your personal account!'
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
