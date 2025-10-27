'use client';

import { useState, useEffect } from 'react';

const cardData = {
  shapes: [
    {
      name: 'Cube',
      description: 'A three-dimensional solid object bounded by six square faces.',
      details: '6 Faces | 12 Edges',
      price: '$10',
      imageUrl: 'https://placehold.co/600x400/FFDDC1/000000/png?text=Cube',
    },
    {
      name: 'Sphere',
      description: 'A round solid figure, or its surface, with every point on its surface equidistant from its center.',
      details: 'No Faces | No Edges',
      price: '$15',
      imageUrl: 'https://placehold.co/600x400/D4F1F4/000000/png?text=Sphere',
    },
    {
      name: 'Pyramid',
      description: 'A polyhedron formed by connecting a polygonal base and a point, called the apex.',
      details: '5 Faces | 8 Edges',
      price: '$20',
      imageUrl: 'https://placehold.co/600x400/F6EAC2/000000/png?text=Pyramid',
    },
  ],
  flavor: [
    {
      name: 'Vanilla',
      description: 'A classic and creamy flavor.',
      details: 'Sweet | Aromatic',
      price: '$5',
      imageUrl: 'https://placehold.co/600x400/FFF8DC/000000/png?text=Vanilla',
    },
    {
      name: 'Chocolate',
      description: 'A rich and decadent flavor.',
      details: 'Rich | Velvety',
      price: '$6',
      imageUrl: 'https://placehold.co/600x400/D2691E/FFFFFF/png?text=Chocolate',
    },
    {
      name: 'Strawberry',
      description: 'A sweet and fruity flavor.',
      details: 'Sweet | Refreshing',
      price: '$5.50',
      imageUrl: 'https://placehold.co/600x400/FFB6C1/000000/png?text=Strawberry',
    },
  ],
  topping: [
    {
      name: 'Sprinkles',
      description: 'Adds a fun and colorful crunch.',
      details: 'Rainbow | Chocolate',
      price: '$1.50',
      imageUrl: 'https://placehold.co/600x400/FFC0CB/000000/png?text=Sprinkles',
    },
    {
      name: 'Chocolate Chips',
      description: 'Melt-in-your-mouth goodness.',
      details: 'Milk | Dark | White',
      price: '$2',
      imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF/png?text=Chocolate+Chips',
    },
    {
      name: 'Nuts',
      description: 'A crunchy and nutty addition.',
      details: 'Almonds | Pecans',
      price: '$2.50',
      imageUrl: 'https://placehold.co/600x400/DEB887/000000/png?text=Nuts',
    },
  ],
  energy: [
    {
      name: 'Solar Panel',
      description: 'Harness the power of the sun.',
      details: '100W | 12V',
      price: '$150',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=Solar+Panel',
    },
    {
      name: 'Wind Turbine',
      description: 'Generate clean energy from wind.',
      details: '400W | 24V',
      price: '$300',
      imageUrl: 'https://placehold.co/600x400/333333/FFFFFF/png?text=Wind+Turbine',
    },
    {
      name: 'Battery Pack',
      description: 'Store energy for later use.',
      details: '10kWh | 48V',
      price: '$5000',
      imageUrl: 'https://placehold.co/600x400/666666/FFFFFF/png?text=Battery+Pack',
    },
  ],
  files: [
    {
      name: 'Document',
      description: 'A standard text document.',
      details: '1MB | .docx',
      price: '$1',
      imageUrl: 'https://placehold.co/600x400/999999/FFFFFF/png?text=Document',
    },
    {
      name: 'Website',
      description: 'A public-facing website.',
      details: '10GB | .html',
      price: '$100/mo',
      imageUrl: 'https://placehold.co/600x400/CCCCCC/000000/png?text=Website',
    },
    {
      name: 'Application',
      description: 'A software application.',
      details: '500MB | .exe',
      price: '$50',
      imageUrl: 'https://placehold.co/600x400/FFFFFF/000000/png?text=Application',
    },
  ],
  layouts: [
    {
      name: 'Basic Layout',
      description: 'A simple, single-column layout.',
      details: '1 Column | Responsive',
      price: 'Free',
      imageUrl: 'https://placehold.co/600x400/FF0000/FFFFFF/png?text=Basic+Layout',
    },
    {
      name: 'Grid Layout',
      description: 'A flexible grid-based layout.',
      details: '12 Columns | CSS Grid',
      price: '$10',
      imageUrl: 'https://placehold.co/600x400/00FF00/000000/png?text=Grid+Layout',
    },
    {
      name: 'Dashboard',
      description: 'A layout for data visualization.',
      details: 'Sidebar | Header',
      price: '$25',
      imageUrl: 'https://placehold.co/600x400/0000FF/FFFFFF/png?text=Dashboard',
    },
  ],
};

export default function IconDisplay({ category }: { category: string }) {
  const items = cardData[category as keyof typeof cardData] || [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white rounded-lg h-full">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`rounded-lg border-2 border-gray-200 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer ${selectedIndex === index ? 'bg-pink-200' : 'bg-white'}`}>
          <div className="w-full h-48 bg-gray-100">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold mb-2 text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-xs mb-2">{item.description}</p>
            <p className="text-gray-600 text-xs mb-2">{item.details}</p>
            <p className="text-base font-semibold text-blue-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
