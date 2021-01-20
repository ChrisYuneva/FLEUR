declare module '*.css'{
    interface Style {
        [key: string]:string;
    }

    const style:Style;

    export default style;
}

declare module '*.jpg';
declare module '*.png';

declare module '*json' {
    const value: any;

    export default value;
}