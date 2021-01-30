// SCSS modules support

declare module '*.module.scss' {
    const content: {[className: string]: string};
    export = content;
}