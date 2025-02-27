// pages/_app.js
import '@/styles/globals.css';
import Layout from '../../components/Layouts';
import "../styles/slick-theme.css";
import "../styles/slick.css";
import { Provider } from 'react-redux';
import { store } from '../Store';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useRouter } from 'next/router';
import AuthInitializer from '../../components/AuthInitializer';
import { CookiesProvider } from 'react-cookie';

const noAuthRequired = [
  "/AdminPanel",
  "/User",
  "/Readnow",
  "/Conversations",
  "/Exercise",
  "/ListeningAssignments",
  "/Practicetest",
  "/ReadingAssignments",
  "/ReadingPractice",
  "/TestPrep",
  "/Translations",
  "/WritingPractice",
  "/Profile"
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isProtected = !noAuthRequired.some((route) =>
    router.pathname.startsWith(route)
  );

  return (
    <Layout>
      {isProtected ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </Layout>
  );
}

export default function App(props) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <AuthInitializer />
        <MyApp {...props} />
      </CookiesProvider>
    </Provider>
  );
}
