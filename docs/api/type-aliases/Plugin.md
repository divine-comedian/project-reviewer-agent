[@elizaos/core v0.25.6-alpha.1](../index.md) / Plugin

# Type Alias: Plugin

> **Plugin**: `object`

Plugin for extending agent functionality

## Type declaration

### name

> **name**: `string`

Plugin name

### description

> **description**: `string`

Plugin description

### actions?

> `optional` **actions**: [`Action`](../interfaces/Action.md)[]

Optional actions

### providers?

> `optional` **providers**: [`Provider`](../interfaces/Provider.md)[]

Optional providers

### evaluators?

> `optional` **evaluators**: [`Evaluator`](../interfaces/Evaluator.md)[]

Optional evaluators

### services?

> `optional` **services**: [`Service`](../classes/Service.md)[]

Optional services

### clients?

> `optional` **clients**: [`Client`](Client.md)[]

Optional clients

## Defined in

[packages/core/src/types.ts:624](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L624)
