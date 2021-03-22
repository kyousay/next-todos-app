declare module 'classnames' {
  export type ClassValue =
    | string
    | number
    | ClassDictionary
    | ClassArray
    | undefined
    | null
    | false;

  export interface ClassDictionary {
    [id: string]: boolean | undefined | null;
  }

  export type ClassArray = Array<ClassValue>;

  interface ClassNamesFn {
    (...classes: ClassValue[]): string;
  }

  declare let classNames: ClassNamesFn;

  export default classNames;
}
