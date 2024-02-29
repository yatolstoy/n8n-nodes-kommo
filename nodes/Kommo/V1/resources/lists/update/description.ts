import { IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { addJsonParametersDescription } from '../../_components/JsonParametersDescription';
import { listModelDescription } from '../model';
import { addRequestId } from '../../_components/RequestId';
import { IListsProperties } from '../../interfaces';

const displayOptions: IDisplayOptions | undefined = {
	show: {
		resource: ['lists'],
		operation: ['updateLists'],
	},
};

const updateListModel: INodeProperties[] = [
	...listModelDescription.filter((el) =>
		['id', 'name', 'can_add_elements', 'can_link_multiple'].includes(el.name),
	),
	addRequestId(),
];

export const description: IListsProperties = [
	...addJsonParametersDescription(displayOptions),
	{
		displayName: 'Lists',
		name: 'collection',
		placeholder: 'Add edited list',
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
				displayName: 'Update Lists',
				name: 'list',
				values: updateListModel,
			},
		],
	},
];
