import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../components/Image/Image";
import AddToCartButton from "../../components/AddToCartButton";
import styles from "../../styles/ProductPage.module.css";
import { request } from "../../lib/datocms";
import { StructuredText } from "react-datocms/structured-text";

const PRODUCT_PATHS_QUERY = `
query MyQuery {
  allProducts {
    id
  }
}
`;

export const getStaticPaths = async () => {
  const data = await request({
    query: PRODUCT_PATHS_QUERY,
  });

  const { allProducts } = data;
  const paths = allProducts.map((product) => `/product/${product.id}`);

  return {
    paths,
    fallback: false,
  };
};

const PRODUCT_QUERY = `
query ProductQuery($productId: ItemId) {
  product(filter: {id: {eq: $productId }}){
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

export async function getStaticProps(context) {
  const data = await request({
    query: PRODUCT_QUERY,
    variables: { productId: context.params.slug },
  });

  return {
    props: { data },
  };
}

export default function ProductPage({ data }) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.images}>
          <Image
            src={data.product.mainImage.url}
            alt={data.product.name}
            layout="fill"
          />
          <div className={styles.smallImages}>
            {data.product.alternativeImages.map((image) => (
              <div className={styles.smallImageContainer}>
                <Image src={image.url} alt={image.name} layout="fill" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.details}>
          <Link href="/collections/all">
            <div className={styles.goBackButton}>
              <img src="../images/arrow-left.svg" />
              <p>Go back</p>
            </div>
          </Link>
          <h2 className={styles.name}>{data.product.name}</h2>
          <StructuredText data={data.product.description} />
          <div>
            <div className={styles.priceWrapper}>
              <p>Price:</p>
              <h3 className={styles.price}>{data.product.price}kr</h3>
            </div>
            <div>
              <AddToCartButton product={data.product} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
