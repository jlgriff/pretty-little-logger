/**
 * Generates a standardized formatted log using the given log-level's corresponding logger
 *
 * @param level - logging level/severity
 * @param message - string to be logged
 * @param showLogLocation - whether to include in the log the filename & line number of where the logger was called (e.g. '| index.js:1 |')
 * @param showStackTrace - whether to include in the log the full stack trace
 */
declare const logPretty: (level?: 'trace' | 'debug' | 'info' | 'warn' | 'error', message?: string, showLogLocation?: boolean, showStackTrace?: boolean) => void;
export default logPretty;
