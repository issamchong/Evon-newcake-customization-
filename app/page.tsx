'use client';

import { useState } from 'react';
import Slideshow from './components/Slideshow';
import IconDisplay from './components/IconDisplay';
import { Zap, File, Layout } from 'lucide-react';

export default function Page() {
  const [category, setCategory] = useState('shapes');

  return (
    <main className="flex flex-col h-screen bg-white text-gray-800">
      <div className="flex-1 bg-white">
        <Slideshow />
      </div>
      <div className="flex-1 flex p-4 space-x-4 bg-white">
        <div className="flex flex-col bg-gray-100 rounded-lg overflow-hidden">
          <button
            onClick={() => setCategory('shapes')}
            className={`p-2 ${
              category === 'shapes' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <img src="https://res.cloudinary.com/dbztvm0io/image/upload/v1761583300/avond%20cake/shape_pua3sg.png" alt="Shapes" className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => setCategory('flavor')}
            className={`p-2 ${
              category === 'flavor' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <img src="https://res.cloudinary.com/dbztvm0io/image/upload/v1761583300/avond%20cake/flavor_uv6pym.png" alt="Flavor" className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => setCategory('topping')}
            className={`p-2 ${
              category === 'topping' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <img src="https://res.cloudinary.com/dbztvm0io/image/upload/v1761583300/avond%20cake/topping_f69ggj.png" alt="Topping" className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => setCategory('energy')}
            className={`p-2 ${
              category === 'energy' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <Zap className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => setCategory('files')}
            className={`p-2 ${
              category === 'files' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <File className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => setCategory('layouts')}
            className={`p-2 ${
              category === 'layouts' ? 'bg-gray-300' : 'text-gray-700'
            }`}>
            <Layout className="w-8 h-8 mx-auto" />
          </button>
        </div>
        <div className="flex-1">
          <IconDisplay category={category} />
        </div>
      </div>
    </main>
  );
}
