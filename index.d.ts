/// <reference types="node" />
declare module "index" {
    export const vanillaRequire: NodeJS.Require;
    export const applyPaths: (compilerOptions: {
        baseUrl?: string | undefined;
        paths?: {
            [path: string]: string[];
        } | undefined;
    }) => void;
}
