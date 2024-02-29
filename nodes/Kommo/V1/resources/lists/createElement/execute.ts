import { INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { clearNullableProps } from '../../../helpers/clearNullableProps';
import { apiRequest } from '../../../transport';
import { IFormListElement, RequestListElementCreate } from '../types';
import { makeCustomFieldReqObject } from '../../_components/CustomFieldsDescription';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const listId = this.getNodeParameter('catalog_id', 0) as boolean;

	const requestMethod = 'POST';
	const endpoint = `catalogs/${listId}/elements`;

	const jsonParams = (await this.getNodeParameter('json', 0)) as boolean;

	if (jsonParams) {
		const jsonString = (await this.getNodeParameter('jsonString', 0)) as string;
		const responseData = await apiRequest.call(
			this,
			requestMethod,
			endpoint,
			JSON.parse(jsonString),
		);
		return this.helpers.returnJsonArray(responseData);
	}

	const listsCollection = (await this.getNodeParameter('collection', 0)) as IFormListElement;

	const body = listsCollection.element
		.map((element): RequestListElementCreate => {
			return {
				...element,
				custom_fields_values:
					element.custom_fields_values && makeCustomFieldReqObject(element.custom_fields_values),
			};
		})
		.map(clearNullableProps);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(responseData);
}
