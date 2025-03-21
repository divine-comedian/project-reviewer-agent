[@elizaos/core v0.25.6-alpha.1](../index.md) / generateTextArray

# Function: generateTextArray()

> **generateTextArray**(`opts`): `Promise`\<`string`[]\>

Send a message to the model and parse the response as a string array

## Parameters

• **opts**

The options for the generateText request

• **opts.runtime**: [`IAgentRuntime`](../interfaces/IAgentRuntime.md)

• **opts.context**: `string`

The context/prompt to send to the model

• **opts.modelClass**: [`ModelClass`](../enumerations/ModelClass.md)

## Returns

`Promise`\<`string`[]\>

Promise resolving to an array of strings parsed from the model's response

## Defined in

[packages/core/src/generation.ts:1465](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/generation.ts#L1465)
