#!/bin/sh
if mkdir src/components/$1
then
  touch src/components/$1/index.ts
fi
