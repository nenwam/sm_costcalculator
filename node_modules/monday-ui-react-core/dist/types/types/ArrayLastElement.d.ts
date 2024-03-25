export declare type ArrayLastElement<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never;
