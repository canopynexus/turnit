import { describe, expect, it } from 'vitest';

import {
  convertDMStoLatLon,
  convertLatLontoDMS,
  LatitudeDMSType,
  LatLonType,
  LongitudeDMSType,
} from './geo';

describe('geo', () => {
  describe('convertDMStoLatLon', () => {
    it('tests bad input parameters', () => {
      //@ts-expect-error undefined
      expect(() => convertDMStoLatLon(undefined, undefined)).toThrow();
      //@ts-expect-error null
      expect(() => convertDMStoLatLon(null, null)).toThrow();
      const latitude: LatitudeDMSType = {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        northing: true,
      };
      //@ts-expect-error undefined
      expect(() => convertDMStoLatLon(latitude, undefined)).toThrow();
    });
    it('tests Null Island', () => {
      const latitude: LatitudeDMSType = {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        northing: true,
      };
      const longitude: LongitudeDMSType = {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        easting: true,
      };
      const expected: LatLonType = {
        lat: 0,
        lon: 0,
      };
      expect(convertDMStoLatLon(latitude, longitude)).toStrictEqual(expected);
    });

    it('tests 52° 23\' 16.0188" N, 9° 44\' 0.3818" E', () => {
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
      const expected: LatLonType = {
        lat: 52.387783,
        lon: 9.7334394,
      };
      const latlon = convertDMStoLatLon(latitude, longitude);
      expect(latlon.lat).toBeCloseTo(expected.lat, 6);
      expect(latlon.lon).toBeCloseTo(expected.lon, 6);
    });
    it('tests 45° 23\' 16.0188" S, 9° 12\' 0.3818" W', () => {
      const latitude: LatitudeDMSType = {
        degrees: 45,
        minutes: 23,
        seconds: 16.0188,
        northing: false,
      };
      const longitude: LongitudeDMSType = {
        degrees: 12,
        minutes: 44,
        seconds: 0.3818,
        easting: false,
      };
      const expected: LatLonType = {
        lat: -45.387783,
        lon: -12.7334394,
      };
      const latlon = convertDMStoLatLon(latitude, longitude);
      expect(latlon.lat).toBeCloseTo(expected.lat, 6);
      expect(latlon.lon).toBeCloseTo(expected.lon, 6);
    });
  });

  describe('convertLatLontoDMS', () => {
    it('tests bad input parameters', () => {
      //@ts-expect-error undefined
      expect(() => convertLatLontoDMS(undefined)).toThrow();
      //@ts-expect-error null
      expect(() => convertLatLontoDMS(null)).toThrow();
    });
    it('tests 52.387783, 9.7334394', () => {
      const latlon: LatLonType = {
        lat: 52.387783,
        lon: 9.7334394,
      };
      const latitudeExpected: LatitudeDMSType = {
        degrees: 52,
        minutes: 23,
        seconds: 16.0188,
        northing: true,
      };
      const longitudeExpected: LongitudeDMSType = {
        degrees: 9,
        minutes: 44,
        seconds: 0.3818,
        easting: true,
      };
      const { latitude, longitude } = convertLatLontoDMS(latlon);
      expect(latitude.degrees).toEqual(latitudeExpected.degrees);
      expect(latitude.minutes).toEqual(latitudeExpected.minutes);
      expect(latitude.seconds).toBeCloseTo(latitudeExpected.seconds, 4);
      expect(latitude.northing).toEqual(latitudeExpected.northing);
      expect(longitude.degrees).toEqual(longitudeExpected.degrees);
      expect(longitude.minutes).toEqual(longitudeExpected.minutes);
      expect(longitude.seconds).toBeCloseTo(longitudeExpected.seconds, 4);
      expect(longitude.easting).toEqual(longitudeExpected.easting);
    });

    it('tests -45.387783, -12.7334394', () => {
      const latlon: LatLonType = {
        lat: -45.387783,
        lon: -12.7334394,
      };
      const latitudeExpected: LatitudeDMSType = {
        degrees: 45,
        minutes: 23,
        seconds: 16.0188,
        northing: false,
      };
      const longitudeExpected: LongitudeDMSType = {
        degrees: 12,
        minutes: 44,
        seconds: 0.3818,
        easting: false,
      };
      const { latitude, longitude } = convertLatLontoDMS(latlon);
      expect(latitude.degrees).toEqual(latitudeExpected.degrees);
      expect(latitude.minutes).toEqual(latitudeExpected.minutes);
      expect(latitude.seconds).toBeCloseTo(latitudeExpected.seconds, 4);
      expect(latitude.northing).toEqual(latitudeExpected.northing);
      expect(longitude.degrees).toEqual(longitudeExpected.degrees);
      expect(longitude.minutes).toEqual(longitudeExpected.minutes);
      expect(longitude.seconds).toBeCloseTo(longitudeExpected.seconds, 4);
      expect(longitude.easting).toEqual(longitudeExpected.easting);
    });
  });
});
