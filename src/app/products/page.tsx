import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    image: "https://placehold.co/400x300?text=Laptop",
    price: 999.99,
  },
  {
    id: 2,
    name: "Wireless Phone",
    image: "https://placehold.co/400x300?text=Phone",
    price: 499.99,
  },
  {
    id: 3,
    name: "Smart Watch",
    image: "https://placehold.co/400x300?text=Watch",
    price: 299.99,
  },
  {
    id: 4,
    name: "Headphones",
    image: "https://placehold.co/400x300?text=Headphones",
    price: 199.99,
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}