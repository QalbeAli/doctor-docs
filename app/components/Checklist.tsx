"use client";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
}

interface ChecklistProps {
  items: ChecklistItem[];
  title?: string;
}

export function Checklist({ items: initialItems, title }: ChecklistProps) {
  const [items, setItems] = useState(
    initialItems.map((item) => ({
      ...item,
      checked: item.checked ?? false, // Ensure checked is always boolean
    }))
  );

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="my-6 p-4 border rounded-lg bg-white dark:bg-gray-800">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={item.id}
              className="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
