## [Rules](https://github.com/erikras/ducks-modular-redux#rules)
A module...
1. MUST export default a function called reducer()
1. MUST export its action creators as functions
1. MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
1. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

## Reference
- https://github.com/erikras/ducks-modular-redux