import { PermissionMethodEnums } from '../enums'

export declare interface PermissionCreateRequest {
	url: string
	method: PermissionMethodEnums
	role_id: string
}

export declare type PermissionCreateResponse = null
