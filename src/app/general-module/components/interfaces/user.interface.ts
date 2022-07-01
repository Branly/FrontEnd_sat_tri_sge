import { SidebarOption } from "./sidebar-option.interface";

export interface UserLogged {
	ip: string;
	loggedSince: string;
	login: string;
	nit: string;
	job: string;
	adminUnit: string;
	name: string;
	roles: string[];
	options: SidebarOption[];
}

export interface UserRole {
	name: string;
	description: string;
}

export interface User {
	user: string;
	nit: string;
	name: string;
	unit: string;
	job: string;
}