# Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Logging](#logging)

# Introduction

This module offers a simple logger that generates attractive, color-coded console logs with some automated context.

# Installation

This repo can be used as a dependency by pulling it from from the [public GitHub repository](https://github.com/jlgriff/pretty-little-logger). To do this, the following can be added to the `dependencies` block in the project's `package.json`:

```
"pretty-little-logger": "git+ssh://git@github.com:jlgriff/pretty-little-logger.git#main"
```

Alternatively, pull the code from a specific commit hash:

```
"pretty-little-logger": "git+ssh://git@github.com:jlgriff/pretty-little-logger.git#<commit-hash>"
```

_Note: This hasn't been published to npm. If you want to see it published, let me know by creating an issue on the [Issues](https://github.com/jlgriff/pretty-little-logger/issues) page._

# Logging

Use the `logPretty` function to console-log a prettified-string.

You can set any of the following optional parameters in `logPretty`:

1. `level`: The log level: 'trace', 'debug', 'info', 'warn', or 'error'. Defaults to 'info'.
2. `message`: The message to be logged. Defaults to ''.
3. `showLogLocation`: Whether to include in the log the filename & line number of where the logger was called (e.g. '| index.js:1 |'). Defaults to false.
4. `showStackTrace`: Whether to include in the log the full stack trace. Defaults to false.
