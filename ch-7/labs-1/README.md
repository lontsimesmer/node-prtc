## Creating a Module

The labs-1 folder has an `index.js` file. Write a function that takes two numbers and adds them
together, and then export that function from the `index.js` file.

Run `npm test` to check whether `index.js` was correctly implemented. If it was the output
should contain `passed!`:

By default, the labs-1 folder is set up as a CJS project, but if desired, the `package.json` can
be modified to convert to an ESM module (by either setting the type field to module or
renaming `index.js` to `index.mjs` and setting the `type` field accordingly). The exercise can
be completed either with the default CJS or with ESM or both.

I would recommend playing around with both cases.
