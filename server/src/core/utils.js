/**
 * Check if the input is a literal object.
 * @param {string/Object} input
 * @returns {boolean}
 */
export const isObject = (input) => {
	return Object.prototype.toString.call(input) === "[object Object]";
};

export const generateConsoleEligibleStatement = (input) => {
	return isObject(input) || Array.isArray(input) ? JSON.stringify(input) : input;
};
