// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import type {GlobalState} from './store';

export type GetStateFunc = () => GlobalState;

export type GenericAction = {|
    type: string,
    data: any,
    meta?: any,
    error?: any
|};

type Thunk = (DispatchFunc, GetStateFunc) => Promise<ActionResult>; // eslint-disable-line no-use-before-define

type BatchAction = {
    type: 'BATCHING_REDUCER.BATCH';
    payload: Array<GenericAction>;
}

export type PostAction = {
    ...GenericAction,
    postId?: string
}

type Action = GenericAction | Thunk | BatchAction | PostAction

export type ActionResult = {|data: any|} | {|error: any|};
export type DispatchFunc = (Action, ?GetStateFunc) => Promise<ActionResult>;
export type ActionFunc = (DispatchFunc, GetStateFunc) => Promise<ActionResult>;
