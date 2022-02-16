import { Action } from 'redux';

import { IRoom } from '../../../definitions';
import { INQUIRY } from '../../../actions/actionsTypes';

interface IInquirySetEnabled extends Action {
	enabled: boolean;
}

interface IInquiryQueueAddAndUpdate extends Action {
	inquiry: IRoom;
}

interface IInquirySuccess extends Action {
	inquiries: IRoom[];
}

interface IInquiryQueueRemove extends Action {
	inquiryId: string;
}

interface IInquiryFailure extends Action {
	error: unknown;
}

export type TActionInquiry = IInquirySetEnabled &
	IInquiryQueueAddAndUpdate &
	IInquirySuccess &
	IInquiryQueueRemove &
	IInquiryFailure;

export function inquirySetEnabled(enabled: boolean): IInquirySetEnabled {
	return {
		type: INQUIRY.SET_ENABLED,
		enabled
	};
}

export function inquiryReset(): Action {
	return {
		type: INQUIRY.RESET
	};
}

export function inquiryQueueAdd(inquiry: IRoom): IInquiryQueueAddAndUpdate {
	return {
		type: INQUIRY.QUEUE_ADD,
		inquiry
	};
}

export function inquiryQueueUpdate(inquiry: IRoom): IInquiryQueueAddAndUpdate {
	return {
		type: INQUIRY.QUEUE_UPDATE,
		inquiry
	};
}

export function inquiryQueueRemove(inquiryId: string): IInquiryQueueRemove {
	return {
		type: INQUIRY.QUEUE_REMOVE,
		inquiryId
	};
}

export function inquiryRequest(): Action {
	return {
		type: INQUIRY.REQUEST
	};
}

export function inquirySuccess(inquiries: IRoom[]): IInquirySuccess {
	return {
		type: INQUIRY.SUCCESS,
		inquiries
	};
}

export function inquiryFailure(error: unknown): IInquiryFailure {
	return {
		type: INQUIRY.FAILURE,
		error
	};
}
