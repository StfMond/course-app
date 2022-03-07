export interface InputProps {
	id: string;
	name?: string;
	placeholder?: string;
	value?: string | number;
	onChange?: (event: any) => void;
	type?: string;
	pattern?: string;
	minLength?: number;
	className?: string;
}
