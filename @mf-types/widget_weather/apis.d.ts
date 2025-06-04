
    export type RemoteKeys = 'widget_weather/Counter';
    type PackageType<T> = T extends 'widget_weather/Counter' ? typeof import('widget_weather/Counter') :any;