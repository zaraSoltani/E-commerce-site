import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image/Image";
import Link from "next/link";
import styles from "../../styles/Collection.module.css";
import { request } from "../../lib/datocms";

const PRODUCT_LISTING_PAGE_QUERY = `
query AllProducts {
  allProducts {
    id
    name
    price
    description {
      value
    }
    alternativeImages {
      alt
      url
    }
    mainImage {
      alt
      url
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: PRODUCT_LISTING_PAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { data },
  };
}

export default function Collection({ data }) {
  const { allProducts } = data;
  return (
    <>
      <Header />
      <main>
        <div className={styles.title}>
          <h1>All products</h1>
        </div>
        <div className={styles.container}>
          {allProducts.map((product) => (
            <Link href={`/product/${product.id}`} className={styles.product}>
              <div key={product.id} className={styles.product}>
                <Image
                  src={product.mainImage.url}
                  alt={product.mainImage.alt}
                  layout="fill"
                />
                <div className={styles.wrapper}>
                  <h2 className={styles.name}>{product.name}</h2>
                  <p className={styles.price}>{product.price}kr</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
