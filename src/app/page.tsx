"use client";

import ProductCard from "@/components/ProductCard";

const products = [
  { 
    id: 1, 
    name: "Laptop Pro",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop", 
    price: 999.99 
  },
  { 
    id: 2, 
    name: "Wireless Phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop", 
    price: 499.99 
  },
  { 
    id: 3, 
    name: "Smart Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", 
    price: 299.99 
  },
  { 
    id: 4, 
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", 
    price: 199.99 
  },
];

export default function Home() {
  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Products</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "2rem"
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}