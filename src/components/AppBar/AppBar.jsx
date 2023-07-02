import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBarHeader } from './styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
};
