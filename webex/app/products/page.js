// app/products/page.js
import { notFound } from 'next/navigation';
import ItemListContainer from '../components/ItemListContainer';
import getProducts from '@/actions/getProducts';

export default async function ProductPage({ params }) {
  const { product } = params;
  const { payload: products, error } = await getProducts(product);

  if (error || !products) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold text-center capitalize">{product}</h1>
      <ItemListContainer camProducts={product} />
    </div>
  );
}
