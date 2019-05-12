## What is `getframe`?

Getting embed code of all video storage.

```
upvid.co
vidlox.me
vidoza.net
openload.co
vidcloud.co
flix555.com
gounlimited.to
rapidvideo.com
streamango.com
verystream.com
streamcherry.com
```

## Installation

```bash
npm i getframe
```

## Usage

Import the library in your code:

```js
const getframe = require('getframe');
```

### Get embed code

```js
let embed = getframe({
    "url": "youtube.com",
    "code": "dQw4w9WgXcQ"
});
console.log(embed); //=> https://www.youtube.com/embed/dQw4w9WgXcQ/
```

## Running tests

```bash
npm test
```