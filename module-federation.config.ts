export const mfConfig = {
  name: "dashboard_host",
  exposes: {},
  remotes: {
    widget_weather: "widget_weather@http://localhost:8081/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};