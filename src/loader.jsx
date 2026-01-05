export async function ProductDetailLoader({ params }) {
  const results = await fetch('/data.json').then((res) => res.json());
  const product = results.products.find(p => p.id == params.id);
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return { product };
}
