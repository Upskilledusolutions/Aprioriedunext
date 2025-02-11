import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../src/Store';

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_BACKENDURL;

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await fetch(`${URL}/api/check-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.userId }),
        });

        const data = await response.json();
        if (!data?.user?.active || !user) {
          dispatch(logout());
          router.push('/Auth'); // Redirect inactive users
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        router.push('/Auth');
      } 
    };

    checkUserStatus();
  }, [user, router, dispatch]);

  return children;
}
