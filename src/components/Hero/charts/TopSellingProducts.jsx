import React from "react";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

export default function TopSellingProducts() {
  return (
    <div className="w-full max-w-3xl rounded-2xl bg-gray-50 p-6 dark:bg-white/5">
      <h2 className="mb-4 text-sm font-semibold text-gray-800 dark:text-white">
        Top Selling Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700 dark:text-white">
          <thead>
            <tr className="border-b border-gray-200 text-gray-400 dark:border-white/40 dark:text-white/40">
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Price</th>
              <th className="py-2 pr-4 font-medium">Quantity</th>
              <th className="py-2 pr-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="py-3 pr-4">{product.name}</td>
                <td className="py-3 pr-4">${product.price.toFixed(2)}</td>
                <td className="py-3 pr-4">{product.quantity}</td>
                <td className="py-3 pr-4">
                  ${product.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
