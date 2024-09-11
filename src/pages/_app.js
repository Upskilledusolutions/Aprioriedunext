import '@/styles/globals.css';
import Layout from '../../components/Layouts';
import "../styles/slick-theme.css";
import "../styles/slick.css";
import { Provider } from 'react-redux';
import { store } from '../Store';
import AuthInitializer from '../../components/AuthInitializer'; // Import the new component

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthInitializer /> {/* This will handle user authentication */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
