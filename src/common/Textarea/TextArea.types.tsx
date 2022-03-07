export interface TextAreaProps {
	id: string;
	name?: string;
	placeholder?: string;
	value?: string;
	onChange?: (event: any) => void;
	type?: string;
	pattern?: string;
	minLength?: number;
	className?: string;
	cols?: number;
	rows?: number;
}
