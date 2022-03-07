import { Course } from '../types/types.d';

export const LOGOUT_BUTTON_TEXT = 'Logout';
export const EMPTY_FIELDS = 'Please, fill in all fields';
export const CREATE_COURSE_BUTTON_TEXT = 'Create Course';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const REMOVE_AUTHOR_BUTTON_TEXT = 'Remove author';
export const PLACEHOLDER_DURATION_TEXT = 'Enter duration in minutes...';
export const PLACEHOLDER_DESCRIPTION_TEXT = 'Enter description...';
export const PLACEHOLDER_TITLE_TEXT = 'Enter title...';
export const PLACEHOLDER_NAME_TEXT = 'Enter name...';
export const PLACEHOLDER_DEFAULT_TEXT = 'Create Course';
export const PLACEHOLDER_SEARCH_TEXT = 'Search';
export const PLACEHOLDER_COURSE_TEXT = 'Enter course name...';
export const PLACEHOLDER_SHOW_COURSE_TEXT = 'Show Course';
export const PLACEHOLDER_EMAIL_TEXT = 'Enter email...';
export const PLACEHOLDER_PASSWORD_TEXT = 'Enter password...';
export const REGISTRATION_TEXT = 'Registration';

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the
   1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
   specimen book. It has survived
    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
 nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812bebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum
 has been the industry's standard dummy text ever since the
1500s, when an unknown
 printer took a galley of type and scrambled it to make a type
specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
] as unknown as Course[];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
