import { ICustomFieldValuesForm } from '../../Interface';

export interface IListModelForm {
	name: string;
	type: 'regular' | 'invoices' | 'products';
	sort: number;
	can_add_elements: boolean;
	can_link_multiple: boolean;
	request_id: string;
}
export interface IFormList {
	list: Array<IListModelForm>;
}

export interface IListElementModelForm {
	name: string;
	custom_fields_values: ICustomFieldValuesForm;
}

export interface IFormListElement {
	element: Array<IListElementModelForm>;
}

export interface IUpdateListForm {
	list: Array<IListModelForm & { id: number }>;
}

export interface IUpdateListElementForm {
	element: Array<IListElementModelForm & { id: number }>;
}

export type List = {
	id: number;
	name: string;
	sort: number;
	type: string;
	can_add_elements: boolean;
	can_link_multiple: boolean;
	request_id: string;
};

export type ListElement = {
	id: number;
	name: string;
	custom_fields_values: Record<string, unknown>[];
};

export type RequestListUpdate = Partial<Exclude<List, 'id'>> & Pick<List, 'id'>;
export type RequestListCreate = Partial<Exclude<List, 'id' | 'sort' | 'type'>> & Pick<List, 'name'>;

export type RequestListElementUpdate = Partial<Exclude<ListElement, 'id'>> &
	Pick<ListElement, 'id'>;
export type RequestListElementCreate = Partial<Exclude<ListElement, 'id'>> &
	Pick<ListElement, 'name'>;
