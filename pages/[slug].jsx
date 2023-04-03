import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "/styles/Home.module.css";
import { request } from "../lib/datocms";
import { renderMetaTags, StructuredText } from "react-datocms";

const CONTENT_PAGE_PATHS_QUERY = `
query MyQuery {
  allPages {
    slug
  }
}
`;

export const getStaticPaths = async () => {
  const data = await request({
    query: CONTENT_PAGE_PATHS_QUERY,
  });

  const { allPages } = data;
  const paths = allPages.map((page) => `/${page.slug}`);

  return {
    paths,
    fallback: false,
  };
};

const PAGE_QUERY = `
query MyQuery($pageSlug: String) {
    page(filter: {slug: {eq: $pageSlug}}) {
      mainImage {
        alt
        url
      }
      title
      slug
      content {
        value
      }
      _seoMetaTags(locale: en) {
        attributes
        content
        tag
      }
    }
  }
`;

export async function getStaticProps(context) {
  const data = await request({
    query: PAGE_QUERY,
    variables: { pageSlug: context.params.slug },
  });
  return {
    props: { data },
  };
}

export default function ContentPage({ data }) {
  return (
    <>
      <Head>{renderMetaTags(data.page._seoMetaTags)}</Head>
      <Header />
      <main>
        <Hero title={data.page.title} image={data.page.mainImage} />
        <div className={styles.content}>
          <StructuredText data={data.page.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
