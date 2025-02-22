// filepath: /c:/Users/frava/OneDrive/Documents/Ynov/Api/letterboxdfront/src/hooks/useUser.ts
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  username: string;
  email: string;
  // Add other user fields as needed
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      setLoading(false);
      return;
    }

    async function fetchUser() {
      try {
        const response = await fetch(`/api/u/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          Cookies.remove('token');
          return;        
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
        Cookies.remove('token');
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading };
}