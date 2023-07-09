import { Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage({ parent }: { parent?: boolean }) {
  const navigate = useNavigate();

  const navigateTo = parent ? '/' : '/app';

  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <Heading>Error 404.</Heading>
        <Text size="3xl">Page Not Found.</Text>
      </div>
      <div>
        <Button
          type="button"
          onClick={() => navigate(`${navigateTo}`, { replace: true })}
        >
          Go back to dashboard
        </Button>
      </div>
    </div>
  );
}
