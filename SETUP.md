# SETUP
__

## unit test

1. install dependencies

```bash
npm install mocha --save-dev
npm install @types/mocha --save-dev
npm install chai --save-dev
npm install @types/chai --save-dev
npm install assert --save-dev
npm install @types/assert --save-dev
npm install ts-node --save-dev //for running typescript directly
npm install -g typescript
```

2.update package.json
```json
"script":"mocha --require ts-node/register test/*.spec.ts"
```

