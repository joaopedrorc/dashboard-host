import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";

import "./index.css";

const RemoteWidget = React.lazy(() => import("widget_weather/App"));

const App = () => (
  <Suspense fallback={<div>Loading widget...</div>}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: dashboard-host</div>
      <div>Framework: react-19</div>
    </div>
    <RemoteWidget />
  </Suspense>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);