import { Author } from '../../types/types.d';

export interface CreateCourseProps {
	onCreateCourse: (event: any) => void;
	authors: Author[];
	courseAuthors: Author[];
	onAddAuthor: (event: any) => void;
	onRevomeAuthor: (event: any) => void;
	onCreateAuthor: (author: Author) => void;
}
