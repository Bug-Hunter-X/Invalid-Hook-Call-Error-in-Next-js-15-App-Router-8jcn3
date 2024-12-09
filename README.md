# Next.js 15 Invalid Hook Call Bug

This repository demonstrates a common error encountered when using hooks in Next.js 15 applications, specifically within the context of the App Router.  The error, "Invalid hook call. Hooks can only be called inside of the body of a function component," arises when hooks are used outside their allowed context.  This example highlights the issue and provides a solution.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in your browser console.

## Solution

The solution involves correctly placing hook calls within the body of a functional component.