"use client";

import { useState } from "react";
import Slideshow from "./components/Slideshow";
import IconDisplay from "./components/IconDisplay";
import { Zap, File, Layout } from "lucide-react";

export default function Home() {
  const [category, setCategory] = useState("energy");

  return (
    <main className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-1">
        <Slideshow />
      </div>
      <div className="flex-1 flex p-4 space-x-4">
        <div className="flex flex-col space-y-4 p-4 bg-gray-800 rounded-lg">
          <button
            onClick={() => setCategory("energy")}
            className={`p-2 rounded-md ${
              category === "energy" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            <Zap />
          </button>
          <button
            onClick={() => setCategory("files")}
            className={`p-2 rounded-md ${
              category === "files" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            <File />
          </button>
          <button
            onClick={() => setCategory("layouts")}
            className={`p-2 rounded-md ${
              category === "layouts" ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            <Layout />
          </button>
        </div>
        <div className="flex-1">
          <IconDisplay category={category} />
        </div>
      </div>
    </main>
  );
}
