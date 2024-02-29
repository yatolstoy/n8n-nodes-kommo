import { INodeProperties } from 'n8n-workflow';

import * as getLists from './get';
import * as addLists from './create';
import * as updateLists from './update';
import * as getListElements from './getElements';
import * as addListElements from './createElement';
import * as updateListElements from './updateElements';

export { getLists, getListElements, addLists, addListElements, updateLists, updateListElements };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lists'],
			},
		},
		options: [
			{
				name: 'Create List Elements',
				value: 'addListElements',
				action: 'Add multiple list elements into the account',
				description: 'Add multiple list elements into the account',
			},
			{
				name: 'Create Lists',
				value: 'addLists',
				description: 'Add multiple lists',
				action: 'Add multiple lists',
			},
			{
				name: 'Editing List Elements',
				value: 'updateListElements',
				action: 'Editing multiple list elements',
				description: 'Editing multiple list elements',
			},
			{
				name: 'Editing Lists',
				value: 'updateLists',
				action: 'Editing multiple lists',
				description: 'Editing multiple lists',
			},
			{
				name: 'Get List Elements',
				value: 'getListElements',
				action: 'Get available list elements on the account',
				description: 'Get available list elements on the account',
			},
			{
				name: 'Get Lists',
				value: 'getLists',
				description: 'Get all account lists',
				action: 'Get available lists',
			},
		],
		default: 'getLists',
	},
	...getLists.description,
	...addLists.description,
	...updateLists.description,
	...getListElements.description,
	...addListElements.description,
	...updateListElements.description,
];
