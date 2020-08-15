# predicate-types.js

[![Test](https://github.com/OpenReasoning/predicate-types.js/workflows/Test/badge.svg?branch=master&event=push)](https://github.com/OpenReasoning/predicate-types.js/actions?query=workflow%3ATest+event%3Apush+branch%3Amaster)
[![codecov](https://codecov.io/gh/OpenReasoning/predicate-types.js/branch/master/graph/badge.svg)](https://codecov.io/gh/OpenReasoning/predicate-types.js)
[![NPM Version](https://img.shields.io/npm/v/@openreasoning/predicate-types.svg)](https://npmjs.com/package/@openreasoning/predicate-types)

## Install

```bash
npm install @openreasoning/predicate-types
```

## Usage

```js
// cjs
const getTypes = require('@openreasoning/predicate-types');

// esm
import getTypes from '@openReasoning/predicate-types';

const node;

// fill in value of node of structure:
/*
{
    "value": string,
    "children": Node[]
}
*/
const type = getTypes(node);
```
