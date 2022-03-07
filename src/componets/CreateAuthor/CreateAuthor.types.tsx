import { Author } from '../../types/types.d';

export interface CreateAuthorProps {
	onCreateAuthor: (author: Author) => void;
}
