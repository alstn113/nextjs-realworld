import SettingsForm from '@/components/profile/SettingsForm';
import styled from '@emotion/styled';
import Router from 'next/router';
import { useQueryClient } from 'react-query';

const Settings = () => {
  const queryClient = useQueryClient();
  const handleLogout = async (e: any) => {
    e.preventDefault();
    window.localStorage.removeItem('user');
    queryClient.setQueryData('user', null);
    Router.push('/');
  };
  return (
    <Container>
      <h1>Your Settings</h1>
      <SettingsForm />
      <div>
        <button onClick={handleLogout}> Or click here to logout.</button>
      </div>
    </Container>
  );
};

const Container = styled('div')`
  max-width: 750px;
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`;

export default Settings;
