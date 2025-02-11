import '@/styles/globals.css';
import Layout from '../../components/Layouts';
import "../styles/slick-theme.css";
import "../styles/slick.css";
import { Provider } from 'react-redux';
import { store } from '../Store';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useRouter } from 'next/router';
import AuthInitializer from '../../components/AuthInitializer'; // Import the new component

const noAuthRequired = ["/AdminPanel","/User","/Readnow", "/Conversations", "/Exercise", "/ListeningAssignments", "/Practicetest", "/ReadingAssignments", "/ReadingPractice", "/TestPrep", "/Translations", "/WritingPractice"]; // Private pages

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isProtected = !noAuthRequired.some((route) => router.pathname.startsWith(route));

  return (
    <Provider store={store}>
      <AuthInitializer /> {/* This will handle user authentication */}
      <Layout>
      {isProtected ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      </Layout>
    </Provider>
  );
}
