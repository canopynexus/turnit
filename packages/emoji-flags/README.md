# @turnit/emoji-flags

Returns the emoji flags associated with a country code [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

## Returns the emoji flag

```ts
import { findByCountryCode } from '@turnit/emoji-flags';

import type { EmojiFlag } from '@turnit/emoji-flags';

const countryFlag: EmojiFlag = findByCountryCode('GB');
//  {
//    alpha2: 'GB',
//    emoji: '🇬🇧',
//    unicode: 'U+1F1EC U+1F1E7',
//    country_name: 'United Kingdom',
//    description: 'flag for United Kingdom',
//    dialCode: '+44'
//  }
```

## Resources

- Inspired by https://github.com/matiassingers/emoji-flags
- Sources:
  - https://apps.timwhitlock.info/emoji/tables/iso3166
  - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  - https://home.unicode.org/emoji/emoji-frequency/
  - https://docs.google.com/spreadsheets/d/1Zs13WJYdZL1pNZP0dCIXkWau_tZOjK3mmJz0KNq4I30/edit?gid=196891844#gid=196891844

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
