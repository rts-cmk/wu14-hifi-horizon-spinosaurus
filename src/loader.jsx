export async function ProductDetailLoader({ params }) {
	const URL = `http://localhost:6767/product/${params.id}`;
	const results = await fetch(URL).then((res) => res.json());
	return { product: results };
}
