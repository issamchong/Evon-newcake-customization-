"use client";

import { useState } from "react";
import {
  Zap,
  Wind,
  BatteryCharging,
  File,
  Globe,
  AppWindow,
  Layout,
  LayoutGrid,
  LayoutPanelLeft,
  LayoutPanelTop,
  Sidebar,
  Rows,
  Columns,
} from "lucide-react";

const icons = {
  energy: [
    <Zap key="zap" />,
    <Wind key="wind" />,
    <BatteryCharging key="battery" />,
  ],
  files: [<File key="file" />, <Globe key="globe" />, <AppWindow key="window" />],
  layouts: [
    <Layout key="layout" />,
    <LayoutGrid key="layout-grid" />,
    <LayoutPanelLeft key="layout-panel-left" />,
    <LayoutPanelTop key="layout-panel-top" />,
    <Sidebar key="sidebar" />,
    <Rows key="rows" />,
    <Columns key="columns" />,
  ],
};

export default function IconDisplay({ category }: { category: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg h-full">
      {(icons[category as keyof typeof icons] || []).map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-gray-700 rounded-md"
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
