import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { IListsProperties } from '../../interfaces';
import { addJsonParametersDescription } from '../../_components/JsonParametersDescription';
import { listModelDescription } from '../model';
import { addRequestId } from '../../_components/RequestId';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['lists'],
		operation: ['addLists'],
	},
};

export const createListModel: INodeProperties[] = [
	...listModelDescription.filter((el) => el.name !== 'id'),
	addRequestId(),
];

export const description: IListsProperties = [
	...addJsonParametersDescription(displayOptions),
	{
		displayName: 'Lists',
		name: 'collection',
		placeholder: 'Add list',
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
		},
		options: [
			{
				displayName: 'Create List',
				name: 'list',
				values: createListModel,
			},
		],
	},
];
