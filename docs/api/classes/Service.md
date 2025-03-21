[@elizaos/core v0.25.6-alpha.1](../index.md) / Service

# Class: `abstract` Service

## Extended by

- [`IImageDescriptionService`](../interfaces/IImageDescriptionService.md)
- [`ITranscriptionService`](../interfaces/ITranscriptionService.md)
- [`IVideoService`](../interfaces/IVideoService.md)
- [`ITextGenerationService`](../interfaces/ITextGenerationService.md)
- [`IBrowserService`](../interfaces/IBrowserService.md)
- [`ISpeechService`](../interfaces/ISpeechService.md)
- [`IPdfService`](../interfaces/IPdfService.md)
- [`IAwsS3Service`](../interfaces/IAwsS3Service.md)
- [`IIrysService`](../interfaces/IIrysService.md)
- [`ITeeLogService`](../interfaces/ITeeLogService.md)
- [`ISlackService`](../interfaces/ISlackService.md)

## Constructors

### new Service()

> **new Service**(): [`Service`](Service.md)

#### Returns

[`Service`](Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** `static` **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Defined in

[packages/core/src/types.ts:1251](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1251)

***

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Defined in

[packages/core/src/types.ts:1262](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1262)

## Methods

### getInstance()

> `static` **getInstance**\<`T`\>(): `T`

#### Type Parameters

• **T** *extends* [`Service`](Service.md)

#### Returns

`T`

#### Defined in

[packages/core/src/types.ts:1255](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1255)

***

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](../interfaces/IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1267](https://github.com/divine-comedian/eliza/blob/main/packages/core/src/types.ts#L1267)
