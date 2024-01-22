# evil-tsconfig.paths.ts

When import, resolve paths in tsconfig.json for TypeScript with Node.js

## How to use

1. Copy `evil-tsconfig.paths.ts` file to your project.
2. Copy the code below at the top of your `index.ts`.

```typescript
import tsconfigJson from "./tsconfig.json";
import { applyPaths } from "./evil-tsconfig.paths";
applyPaths(tsconfigJson.compilerOptions);
```

## License

[Boost Software License](LICENSE_1_0.txt)

## Related projects

- [evil-commonjs](https://github.com/wraith13/evil-commonjs)
