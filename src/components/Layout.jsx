import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ products, children }) {
	return (
		<>
			<Header products={products} />
			{children}
			<Footer />
		</>
	);
}
