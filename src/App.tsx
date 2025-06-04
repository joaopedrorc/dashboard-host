import React, { Suspense } from "react";

import "./index.css";

const WeatherWidget = React.lazy(() => import("widget_weather/WeatherWidget"));


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4 text-xl font-bold text-center">
        Microfrontend Shell (Host)
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">My Tasks</h2>
        <Suspense fallback={<div>Loading Todo App...</div>}>
          <WeatherWidget />
        </Suspense>
      </main>
    </div>
  );
}