import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";

import "./index.css";

const Counter = React.lazy(() => import("widget_weather/Counter"));
// import Counter from 'widget_weather/Counter';

const App = () => (
  <Suspense fallback={<div>Loading widget...</div>}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: dashboard-host</div>
      <div>Framework: react-19</div>
    </div>
    <Counter />
  </Suspense>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);