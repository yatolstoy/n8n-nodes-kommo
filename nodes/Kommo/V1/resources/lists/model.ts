import { INodeProperties } from 'n8n-workflow';
import { addCustomFieldDescription } from '../_components/CustomFieldsDescription';

export const listModelDescription: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'regular',
		options: [
			{
				name: 'Regular',
				value: 'regular',
			},
			{
				name: 'Invoices',
				value: 'invoices',
			},
			{ name: 'Products', value: 'products' },
		],
	},
	{
		displayName: 'Sort',
		name: 'sort',
		description: 'List sorting',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Can Add Elements',
		name: 'can_add_elements',
		description: 'Whether list elements can be added via the interface',
		type: 'boolean',
		default: false,
	},
	{
		displayName: 'Can Link Multiple',
		name: 'can_link_multiple',
		description: 'Whether one element of the current list can be linked to several leads/customers',
		type: 'boolean',
		default: false,
	},
];

export const listElementModelDescription: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: 0,
		required: true,
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
	},
	addCustomFieldDescription('getCatalogCustomFields'),
];
