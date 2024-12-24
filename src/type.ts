// 合并两个 type, 同名属性后者覆盖前者
export type Merge<T, U> = {
  [K in keyof (T & U)]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};
