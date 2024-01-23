# evil-tsconfig.paths.ts

When import, resolve paths in tsconfig.json for TypeScript with Node.js

## How to install for your project by npm

```sh
npm install @wraith13/evil-tsconfig.paths.ts --save
```

## How to install for your project by git submodule

```sh
git submodule add https://github.com/wraith13/evil-tsconfig.paths.ts evil-tsconfig.paths.ts
```

## How to use

```typescript
import tsconfigJson from "./tsconfig.json";
import { applyPaths } from "evil-tsconfig.paths.ts"; // or "@wraith13/evil-tsconfig.paths.ts" when npm
applyPaths(tsconfigJson.compilerOptions);
```

## License

[Boost Software License](LICENSE_1_0.txt)

## Related projects

- [evil-commonjs](https://github.com/wraith13/evil-commonjs)
