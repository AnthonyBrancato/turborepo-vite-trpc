import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>landing page</p>
      <Button onClick={() => navigate('/login')}>Login page</Button>
    </div>
  );
}
