import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@webeetle/windy';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
      color="gray" 
      size="md"
      layout="bordered"
      className="w-1/4 md:w-20 justify-center"
      onClick={() => logout({
        returnTo: window.location.origin
      })}  
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
