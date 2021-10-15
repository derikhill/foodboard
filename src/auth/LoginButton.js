import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@webeetle/windy';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
      color="gray" 
      size="md"
      className="w-1/4 md:w-20 justify-center"
      onClick={() => loginWithRedirect()}  
    >
      Log In
    </Button>
  );
};

export default LoginButton;
