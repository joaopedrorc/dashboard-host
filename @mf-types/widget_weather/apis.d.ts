
    export type RemoteKeys = 'widget_weather/Widget';
    type PackageType<T> = T extends 'widget_weather/Widget' ? typeof import('widget_weather/Widget') :any;