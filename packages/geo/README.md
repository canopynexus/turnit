# @turnit/rent

Convert between weekly rate and monthly rate

## Convert weekly to monthly rent

```ts
import { rentPerMonth } from '@turnit/rent';
const monthlyRate = rentPerMonth(300);
// 1300
```

## Convert monthly to weekly rent

```ts
import { rentPerWeek } from '@turnit/rent';
const monthlyRate = rentPerWeek(1300);
// 300
```

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
