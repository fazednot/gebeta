import { useEffect } from 'react';

interface ScrollManagerProps {
  path: string;
}

export default function ScrollManager({ path }: ScrollManagerProps) {
  useEffect(() => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [path]);

  return null;
}
