# @turnit/geo

Convert coordinates between `DMS` (degrees, minutes, seconds) and `DD` (decimal degrees).

## Convert DMS to DD

```ts
import { convertDMStoLatLon } from '@turnit/geo';
import type { LatitudeDMSType, LongitudeDMSType } from '@turnit/geo';

const latitude: LatitudeDMSType = {
  degrees: 52,
  minutes: 23,
  seconds: 16.0188,
  northing: true,
};
const longitude: LongitudeDMSType = {
  degrees: 9,
  minutes: 44,
  seconds: 0.3818,
  easting: true,
};

const latlon = convertDMStoLatLon(latitude, longitude);
// {
//   lat: 52.387783,
//   lon: 9.7334394,
// };
```

## Convert DD to DMS

```ts
import { convertLatLontoDMS } from '@turnit/geo';

const { latitude, longitude } = convertLatLontoDMS({
  lat: 52.387783,
  lon: 9.7334394,
});

// latitude = {
//   degrees: 52,
//   minutes: 23,
//   seconds: 16.0188,
//   northing: true,
// };
// longitude = {
//   degrees: 9,
//   minutes: 44,
//   seconds: 0.3818,
//   easting: true,
// };
```

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
