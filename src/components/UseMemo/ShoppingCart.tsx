// UseMemo: Lo que hace es memorizar un valor y
// solo se va a volver a ejecutar si las dependencias cambian.
// Sirve para controlar si el beneficio de memorizar un valor es superior a la de recalcularlo.

import { useMemo, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Shoes", price: 50.0 },
    { id: 2, name: "T-shirt", price: 20.5 },
    { id: 3, name: "Pants", price: 70.0 },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items]
  );

  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItems = () => {
    const newItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 100,
    };

    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Total Cost: {totalCost.toFixed(2)}</h2>
      <h2>Discount: {discount}</h2>
      <h2>Final Cost: {finalCost}</h2>
      <button onClick={() => setDiscount(discount + 10)}>Add Discount</button>
      <button onClick={addItems}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
