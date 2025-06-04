export const mfConfig = {
  name: "dashboard_host",
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    widget_weather: "widget_weather@http://localhost:8081/remoteEntry.js",
  },
  shared: {
    react: {eager: true},
    "react-dom": { eager: true},
  },
};