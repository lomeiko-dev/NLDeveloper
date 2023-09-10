// declaration.d.ts
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare const __IS_DEV__: boolean;

declare module "*.svg";
declare module "*.png";
declare module "*.gif";