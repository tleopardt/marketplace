/**
 * ---------- Searching function ---------
 *
 * @param {String} val
 * @param {Array} arr
 * @returns Array
 */

export const Search = (val, arr) => {
  if (val !== '') {
      const result = arr.filter((countries) => Object.values(countries)
        .join(' ')
        .toLowerCase()
        .includes(val.toLowerCase()));

      return result;
  } else { return arr; }
};
