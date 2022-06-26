// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    IndividualExposure,
} from '../interfaces'




type EraValidatorInfoProps = Omit<EraValidatorInfo, NonNullable<FunctionPropertyNames<EraValidatorInfo>>>;

export class EraValidatorInfo implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public address: string;

    public era: number;

    public total: bigint;

    public own: bigint;

    public others: IndividualExposure[];


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save EraValidatorInfo entity without an ID");
        await store.set('EraValidatorInfo', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove EraValidatorInfo entity without an ID");
        await store.remove('EraValidatorInfo', id.toString());
    }

    static async get(id:string): Promise<EraValidatorInfo | undefined>{
        assert((id !== null && id !== undefined), "Cannot get EraValidatorInfo entity without an ID");
        const record = await store.get('EraValidatorInfo', id.toString());
        if (record){
            return EraValidatorInfo.create(record as EraValidatorInfoProps);
        }else{
            return;
        }
    }


    static async getByAddress(address: string): Promise<EraValidatorInfo[] | undefined>{
      
      const records = await store.getByField('EraValidatorInfo', 'address', address);
      return records.map(record => EraValidatorInfo.create(record as EraValidatorInfoProps));
      
    }

    static async getByEra(era: number): Promise<EraValidatorInfo[] | undefined>{
      
      const records = await store.getByField('EraValidatorInfo', 'era', era);
      return records.map(record => EraValidatorInfo.create(record as EraValidatorInfoProps));
      
    }


    static create(record: EraValidatorInfoProps): EraValidatorInfo {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new EraValidatorInfo(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
