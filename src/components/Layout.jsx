import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ products, children }) {
  return (
    <>
      <Header products={products} />
      {children}
      <Footer />
    </>
  );
}