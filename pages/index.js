import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "/styles/Home.module.css";
import { request } from "../lib/datocms";
import { renderMetaTags, StructuredText } from "react-datocms";

const HOMEPAGE_QUERY = `
  query MyQuery {
    startpage {
      title
      mainImage {
        alt
        url
      }
      content {
        value
      }
      _seoMetaTags(locale: en) {
        attributes
        content
        tag
      }
    }
  }`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default function Home({ data: { startpage } }) {
  return (
    <>
      <Head>{renderMetaTags(startpage._seoMetaTags)}</Head>
      <Header />
      <main>
        <Hero title={startpage.title} image={startpage.mainImage} />
        <div className={styles.content}>
          <StructuredText data={startpage.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
