import "../styles/index.css";
import Container from "../components/container";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
}

export default MyApp;
