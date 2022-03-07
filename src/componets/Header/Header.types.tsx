import { User } from "../../types/user";

export interface HeaderProps {
	id: string;
	user?: User | null;
	onUserAuth: (user: User | null) => void;
}
