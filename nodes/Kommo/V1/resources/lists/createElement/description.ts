import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { IListsProperties } from '../../interfaces';
import { addJsonParametersDescription } from '../../_components/JsonParametersDescription';
import { listElementModelDescription } from '../model';
import { addRequestId } from '../../_components/RequestId';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['lists'],
		operation: ['addListElements'],
	},
};

export const createListModel: INodeProperties[] = [
	...listElementModelDescription.filter((el) => el.name !== 'id'),
	addRequestId(),
];

export const description: IListsProperties = [
	...addJsonParametersDescription(displayOptions),
	{
		displayName: 'List Name or ID',
		name: 'catalog_id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getCatalogs',
		},
		default: '',
		required: true,
		description:
			'Select list. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		displayOptions,
	},
	{
		displayName: 'List Elements',
		name: 'collection',
		placeholder: 'Add element',
		type: 'fixedCollection',
		default: [],
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				...displayOptions.show,
				json: [false],
			},
			hide: {
				catalog_id: [''],
			},
		},
		options: [
			{
				displayName: 'Create Element',
				name: 'element',
				values: createListModel,
			},
		],
	},
];
