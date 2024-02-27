import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
import { KommoV1 } from './V1/KommoV1.node';

export class Kommo extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Kommo',
			name: 'kommo',
			icon: 'file:kommo_logo.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Sends data to Kommo',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new KommoV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
