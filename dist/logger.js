const gray = '\x1b[30m%s\x1b[0m';
const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';
/**
 * Determines which console logger and color correspond to each log level
 *
 * @param level - logging level/severity
 * @returns the appropriate console logger and a preset console color to print it in
 */
const getLogger = (level) => {
    switch (level) {
        case 'trace':
            return { logger: console.trace, color: cyan };
        case 'debug':
            return { logger: console.debug, color: blue };
        case 'info':
            return { logger: console.info, color: gray };
        case 'warn':
            return { logger: console.warn, color: yellow };
        case 'error':
            return { logger: console.error, color: red };
        default:
            return { logger: console.info, color: gray };
    }
};
/**
 * Parses the filename and line number where the logger was called
 *
 * @returns the filename & line number where the logger was called and the full stack trace
 */
const parseStackTrace = () => {
    const parentLevel = 3; // This function itself is at parentLevel 1, the logger is at parentLevel 2, and the function that called the logger is at parentLevel 3.
    const e = new Error();
    if (e.stack) {
        const frame = e.stack.split('\n')[parentLevel];
        const lineNum = frame.split(':').reverse()[1];
        // Extract the named file near the end of stack trace line
        let filename = 'unparsable';
        if (frame.indexOf('/') !== -1) {
            const [lastFileInFilepath] = frame.split('/').reverse();
            [filename] = lastFileInFilepath.split(':');
        }
        else if (frame.indexOf('\\') !== -1) {
            const [lastFileInFilepath] = frame.split('\\').reverse();
            [filename] = lastFileInFilepath.split(':');
        }
        return {
            filename,
            lineNum: Number.isInteger(lineNum) ? Number.parseInt(lineNum, 10) : -1,
            stackTrace: e.stack,
        };
    }
    return {};
};
/**
 * Generates a standardized formatted log using the given log-level's corresponding logger
 *
 * @param level - logging level/severity
 * @param message - string to be logged
 * @param showLogLocation - whether to include in the log the filename & line number of where the logger was called (e.g. '| index.js:1 |')
 * @param showStackTrace - whether to include in the log the full stack trace
 */
const logPretty = (level = 'info', message = '', showLogLocation = false, showStackTrace = false) => {
    const { logger, color } = getLogger(level);
    const logStack = (showLogLocation || showStackTrace) ? parseStackTrace() : undefined;
    const logLevel = `${level.padEnd(5, ' ')} | `;
    const logLocation = showLogLocation ? `${logStack?.filename}:${logStack?.lineNum} | ` : '';
    const stackTrace = showStackTrace ? `\n${logStack?.stackTrace}` : '';
    logger(color, `${logLevel}${logLocation}${message}${stackTrace}`);
};
export default logPretty;
