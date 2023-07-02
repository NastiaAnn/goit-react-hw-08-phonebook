import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.email.value.trim() === '') {
      Notify.warning('Email field cannot be empty. Please, fill in');
      return;
    }

    if (form.elements.password.value.trim() === '') {
      Notify.warning('Password field cannot be empty. Please, fill in');
      return;
    }
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

    Notify.success('Successful login. Welcome to your personal account!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
