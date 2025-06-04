
    export type RemoteKeys = 'widget_weather/WeatherWidget';
    type PackageType<T> = T extends 'widget_weather/WeatherWidget' ? typeof import('widget_weather/WeatherWidget') :any;