const rateConversion = (1 * 52) / 12;
/**
 * Compute rent per month given the weekly rate

 * @param {Number}    pw rent per week as a Number
 * @returns {Number}  the rent calculated per month
 */
export function rentPerMonth(pw: number) {
  return rateConversion * pw;
}

/**
 * Compute the rent per week given the monthly rate
 *
 * @param {Number}    pcm rent per month as a Number
 * @returns {Number}  the rent calculated per week
 */
export function rentPerWeek(pcm: number) {
  return pcm / rateConversion;
}
