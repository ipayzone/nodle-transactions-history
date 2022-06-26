// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type AccumulatedRewardProps = Omit<AccumulatedReward, NonNullable<FunctionPropertyNames<AccumulatedReward>>>;

export class AccumulatedReward implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public amount: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save AccumulatedReward entity without an ID");
        await store.set('AccumulatedReward', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove AccumulatedReward entity without an ID");
        await store.remove('AccumulatedReward', id.toString());
    }

    static async get(id:string): Promise<AccumulatedReward | undefined>{
        assert((id !== null && id !== undefined), "Cannot get AccumulatedReward entity without an ID");
        const record = await store.get('AccumulatedReward', id.toString());
        if (record){
            return AccumulatedReward.create(record as AccumulatedRewardProps);
        }else{
            return;
        }
    }



    static create(record: AccumulatedRewardProps): AccumulatedReward {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new AccumulatedReward(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
