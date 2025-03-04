export type DMSType = {
  degrees: number;
  minutes: number;
  seconds: number;
};

export type LatitudeDMSType = DMSType & {
  northing: boolean;
};

export type LongitudeDMSType = DMSType & {
  easting: boolean;
};

export type LatLonType = {
  lat: number;
  lon: number;
};

export type CoordinatesDMSType = {
  latitude: LatitudeDMSType;
  longitude: LongitudeDMSType;
};

export function convertDMStoLatLon(
  latitude: LatitudeDMSType,
  longitude: LongitudeDMSType,
): LatLonType {
  if (!latitude) throw new TypeError(`Invalid latitude ‘${latitude}’`);
  if (!longitude) throw new TypeError(`Invalid longitude ‘${longitude}’`);

  const lat: number =
    (latitude.degrees + latitude.minutes / 60 + latitude.seconds / 3600) *
    (latitude.northing ? 1 : -1);

  const lon: number =
    (longitude.degrees + longitude.minutes / 60 + longitude.seconds / 3600) *
    (longitude.easting ? 1 : -1);

  return { lat, lon };
}

export function toDMS(dd: number): DMSType {
  let d = Math.floor(Math.abs(dd * 100) / 100); // get component degrees
  let m = Math.floor((Math.abs(dd) * 3600) / 60) % 60; // get component minutes
  let s = (Math.abs(dd) * 3600) % 60; // get component secondes
  // check for rounding up
  if (s === 60) {
    s = 0;
    m++;
  }
  // check for rounding up
  if (m == 60) {
    m = 0;
    d++;
  }
  return {
    degrees: d,
    minutes: m,
    seconds: s,
  };
}

export function convertLatLontoDMS(latlon: LatLonType): CoordinatesDMSType {
  if (!latlon) throw new TypeError(`Invalid latlon ‘${latlon}’`);

  let dms = toDMS(latlon.lat);
  const latitude: LatitudeDMSType = {
    ...dms,
    northing: latlon.lat >= 0 ? true : false,
  };

  dms = toDMS(latlon.lon);
  const longitude: LongitudeDMSType = {
    ...dms,
    easting: latlon.lon >= 0 ? true : false,
  };

  return { latitude, longitude };
}
