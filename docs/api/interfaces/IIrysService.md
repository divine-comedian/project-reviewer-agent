[@elizaos/core v0.25.6-alpha.1](../index.md) / IIrysService

# Interface: IIrysService

## Extends

- [`Service`](../classes/Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Inherited from

[`Service`](../classes/Service.md).[`serviceType`](../classes/Service.md#serviceType-1)

#### Defined in

[packages/core/src/types.ts:1262](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1262)

## Methods

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Service`](../classes/Service.md).[`initialize`](../classes/Service.md#initialize)

#### Defined in

[packages/core/src/types.ts:1267](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1267)

***

### getDataFromAnAgent()

> **getDataFromAnAgent**(`agentsWalletPublicKeys`, `tags`, `timestamp`): `Promise`\<[`DataIrysFetchedFromGQL`](DataIrysFetchedFromGQL.md)\>

#### Parameters

• **agentsWalletPublicKeys**: `string`[]

• **tags**: [`GraphQLTag`](GraphQLTag.md)[]

• **timestamp**: [`IrysTimestamp`](IrysTimestamp.md)

#### Returns

`Promise`\<[`DataIrysFetchedFromGQL`](DataIrysFetchedFromGQL.md)\>

#### Defined in

[packages/core/src/types.ts:1474](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1474)

***

### workerUploadDataOnIrys()

> **workerUploadDataOnIrys**(`data`, `dataType`, `messageType`, `serviceCategory`, `protocol`, `validationThreshold`, `minimumProviders`, `testProvider`, `reputation`): `Promise`\<[`UploadIrysResult`](UploadIrysResult.md)\>

#### Parameters

• **data**: `any`

• **dataType**: [`IrysDataType`](../enumerations/IrysDataType.md)

• **messageType**: [`IrysMessageType`](../enumerations/IrysMessageType.md)

• **serviceCategory**: `string`[]

• **protocol**: `string`[]

• **validationThreshold**: `number`[]

• **minimumProviders**: `number`[]

• **testProvider**: `boolean`[]

• **reputation**: `number`[]

#### Returns

`Promise`\<[`UploadIrysResult`](UploadIrysResult.md)\>

#### Defined in

[packages/core/src/types.ts:1479](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1479)

***

### providerUploadDataOnIrys()

> **providerUploadDataOnIrys**(`data`, `dataType`, `serviceCategory`, `protocol`): `Promise`\<[`UploadIrysResult`](UploadIrysResult.md)\>

#### Parameters

• **data**: `any`

• **dataType**: [`IrysDataType`](../enumerations/IrysDataType.md)

• **serviceCategory**: `string`[]

• **protocol**: `string`[]

#### Returns

`Promise`\<[`UploadIrysResult`](UploadIrysResult.md)\>

#### Defined in

[packages/core/src/types.ts:1490](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1490)
