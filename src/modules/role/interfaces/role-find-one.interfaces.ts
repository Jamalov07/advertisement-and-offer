export declare interface RoleFindOneRequest {
	id: string
}

export declare interface RoleFindOneResponse {
	id: string
	name: string
	createdAt: Date
}

export declare interface RoleCheckByNameRequest {
	id?: string
	name: string
}

export declare type RoleCheckByNameResponse = void
