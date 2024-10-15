/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import {
	IExecuteFunctions,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';
import * as loadOptions from './methods';
import { router } from './resources/router';

import * as account from './resources/account';
import * as contacts from './resources/contacts';
import * as leads from './resources/leads';
import * as tasks from './resources/tasks';
import * as companies from './resources/companies';
import * as notes from './resources/notes';
import * as lists from './resources/lists';

export class KommoV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'Kommo',
			name: 'kommo',
			icon: 'file:kommo_logo.svg',
			group: ['output'],
			version: 1,
			subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
			description: 'Consume Kommo API',
			defaults: {
				name: 'Kommo API Node',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'kommoOAuth2Api',
					required: true,
					displayOptions: {
						show: {
							authentication: ['oAuth2'],
						},
					},
				},
				{
					name: 'kommoLongLivedApi',
					required: true,
					displayOptions: {
						show: {
							authentication: ['longLivedToken'],
						},
					},
					testedBy: {
						request: {
							method: 'GET',
							url: 'account',
						},
					},
				},
			],
			properties: [
				{
					displayName: 'Authentication',
					name: 'authentication',
					type: 'options',
					options: [
						{
							name: 'Long Lived Token',
							value: 'longLivedToken',
						},
						{
							name: 'OAuth2',
							value: 'oAuth2',
						},
					],
					default: 'oAuth2',
				},
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					noDataExpression: true,
					options: [
						{
							name: 'Account',
							value: 'account',
						},
						{
							name: 'Company',
							value: 'companies',
						},
						{
							name: 'Contact',
							value: 'contacts',
						},
						{
							name: 'Lead',
							value: 'leads',
						},
						{
							name: 'List',
							value: 'lists',
						},
						{
							name: 'Note',
							value: 'notes',
						},
						{
							name: 'Task',
							value: 'tasks',
						},
					],
					default: 'account',
				},
				...account.descriptions,
				...companies.descriptions,
				...contacts.descriptions,
				...leads.descriptions,
				...tasks.descriptions,
				...notes.descriptions,
				...lists.descriptions,
			],
		};
	}

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return router.call(this);
	}
}
