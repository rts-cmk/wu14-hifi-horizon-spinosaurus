export async function ProductDetailLoader({ params }) {
	const URL = `/api/product/${params.id}`;
	const results = await fetch(URL).then((res) => res.json());
	return { product: results };
}
