import { Author } from '../../types/types.d';

export interface AuthorListProps {
	authors: Author[];
	onAddAuthor: Function;
	newAuthorsCourse: Author[];
	onRevomeAuthor: Function;
}
