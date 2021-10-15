import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@webeetle/windy';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
      color="gray" 
      size="lg"
      className="md:w-1/4 w-1/2 justify-center"
      onClick={() => loginWithRedirect({
        screen_hint: 'signup',
      })}
    >
      Sign Up
    </Button>
  )
};

export default SignupButton;
