import { useState, useEffect } from 'react';

export const useOneTimeAnimation = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    if (!hasSeenAnimation) {
      setHasAnimated(true);
      sessionStorage.setItem('hasSeenAnimation', 'true');
    }
  }, []);

  return hasAnimated;
};