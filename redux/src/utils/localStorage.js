/**
 * function used to get parsd value from localstorage
 * @param {string} key localstorage key
 * @returns JSON value from localStorage,undefined in case of error
 */

export const getValue = (key) => {
  try {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (Err) {
    return undefined;
  }
};

/**
 *
 * @param {string} key key whose value is to be updated in JSON
 * @param {JSON} value value to be sored in the localstorage.
 */
export const updateValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
