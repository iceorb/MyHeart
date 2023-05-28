import { useState } from 'react';
import { Button, Text } from '@nextui-org/react';

function RefreshButton({ updateCount }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRefresh = () => {
    setIsSpinning(true);

    // Perform the refresh action
    setTimeout(() => {
      updateCount();
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <Button
      onClick={handleRefresh}
      auto
      size="small"
      variant="outlined"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        transition: 'transform 0.3s ease-in-out',
        transform: isSpinning ? 'rotate(360deg)' : 'rotate(0)',
      }}
    >
      <Text style={{ lineHeight: '1' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
          <path d="M12 2a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9h-2a7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7v3l4-4-4-4v3z" />
        </svg>
      </Text>
    </Button>
  );
}

export default RefreshButton;
