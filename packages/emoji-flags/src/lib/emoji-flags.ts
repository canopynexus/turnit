import data from './data.json';

export type EmojiFlag = {
  alpha2: string;
  emoji: string;
  unicode: string;
  country_name: string;
  description: string;
  dialCode?: string | null;
};

export function findByCountryCode(alpha2: string): EmojiFlag | null {
  if (!alpha2 || typeof alpha2 !== 'string') {
    throw new Error(
      'Expected a country code ISO_3166-1_alpha-2 as input parameter',
    );
  }

  const found: EmojiFlag | undefined = data.find(
    (element) => element.alpha2 === alpha2,
  );
  if (found) {
    return found;
  }

  return null;
}
