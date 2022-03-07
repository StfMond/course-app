import { User } from "../../types/user";

export interface LoginProps {
	onUserAuthenticate: (user: User | null) => void;
}
