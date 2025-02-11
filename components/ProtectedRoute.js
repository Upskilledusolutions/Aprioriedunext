import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../src/Store';
import styles from '../src/styles/authmodal.module.css';

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_BACKENDURL;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(false); // Stop loading when user is available
      return;
    }

    const timer = setTimeout(() => {
      setError(true); // Show error if user is not loaded in 5s
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [user]);

  useEffect(() => {
    if (!user || error) return; // Only check if user exists

    const checkUserStatus = async () => {
      try {
        const response = await fetch(`${URL}/api/check-status`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.userId }),
        });

        const data = await response.json();
        if (!data?.user?.active) {
          dispatch(logout());
          router.push('/Auth');
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        router.push('/Auth');
      }
    };

    checkUserStatus();
  }, [user, router, dispatch, error]);

  if (loading) return <p className={styles.loadingText}>Loading...</p>;
  if (error) return <p className={styles.errorText}>Something went wrong!</p>;

  return children;
}
