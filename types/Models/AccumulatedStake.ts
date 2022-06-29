// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type AccumulatedStakeProps = Omit<AccumulatedStake, NonNullable<FunctionPropertyNames<AccumulatedStake>>>;

export class AccumulatedStake implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public amount: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save AccumulatedStake entity without an ID");
        await store.set('AccumulatedStake', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove AccumulatedStake entity without an ID");
        await store.remove('AccumulatedStake', id.toString());
    }

    static async get(id:string): Promise<AccumulatedStake | undefined>{
        assert((id !== null && id !== undefined), "Cannot get AccumulatedStake entity without an ID");
        const record = await store.get('AccumulatedStake', id.toString());
        if (record){
            return AccumulatedStake.create(record as AccumulatedStakeProps);
        }else{
            return;
        }
    }



    static create(record: AccumulatedStakeProps): AccumulatedStake {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new AccumulatedStake(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
