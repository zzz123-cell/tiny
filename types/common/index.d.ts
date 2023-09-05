declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.css';
declare module '*.scss';
declare module '*.less';

declare interface Window {
  BSGlobal: any;
  BSFetch: any;
}

declare let BSGlobal: Window['BSGlobal'];

declare let BSFetch: Window['BSFetch'];