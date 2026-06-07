import { useState, useEffect } from 'react';

export function useExitIntent() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const closeExitIntent = () => {
    setShowExitIntent(false);
  };

  return { showExitIntent, closeExitIntent };
}
