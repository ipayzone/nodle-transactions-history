// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

export interface Transfer {

    amount: string;

    to: string;

    from: string;

    fee: string;

    eventIdx: number;

    success: boolean;

}


export interface AssetTransfer {

    assetId: string;

    amount: string;

    to: string;

    from: string;

    fee: string;

    eventIdx: number;

    success: boolean;

}


export interface Reward {

    eventIdx: number;

    amount: string;

    isReward: boolean;

    era?: number;

    stash?: string;

    validator?: string;

}


export interface Extrinsic {

    hash: string;

    module: string;

    call: string;

    fee: string;

    success: boolean;

}


export interface IndividualExposure {

    who: string;

    value: string;

}


