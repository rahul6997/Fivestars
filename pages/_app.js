import Layout from "../components/layout/Layout";

import "../styles/globals.css";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
