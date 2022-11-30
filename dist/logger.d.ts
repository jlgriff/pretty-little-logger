/**
 * Generates a standardized formatted log using the given log-level's corresponding logger
 *
 * @param message - string to be logged or object to be stringified
 * @param level - logging level/severity
 * @param showLogLocation - whether to include in the log the filename & line number of where the logger was called (e.g. '| index.js:1 |')
 * @param showStackTrace - whether to include in the log the full stack trace
 */
declare const logPretty: (message?: string | object, level?: 'trace' | 'debug' | 'info' | 'warn' | 'error', showLogLocation?: boolean, showStackTrace?: boolean) => void;
export default logPretty;
