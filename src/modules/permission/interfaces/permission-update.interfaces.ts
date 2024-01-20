import { PermissionMethodEnums } from '../enums'

export declare interface PermissionUpdateRequest {
	role_id?: string
	method?: PermissionMethodEnums
	url?: string
}

export declare type PermissionUpdateResponse = null
