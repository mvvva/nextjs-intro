import React from 'react';
import Link from 'next/link';

interface Item {
  title: string;
  href: string;
}

export default function Navigation({ items }: { items: Item[] }) {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          {items.map((item, index) => (
            <li key={index} className="text-gray-200 hover:text-gray-100">
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
