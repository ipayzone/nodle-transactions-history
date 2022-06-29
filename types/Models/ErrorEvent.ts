// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type ErrorEventProps = Omit<ErrorEvent, NonNullable<FunctionPropertyNames<ErrorEvent>>>;

export class ErrorEvent implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public description: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ErrorEvent entity without an ID");
        await store.set('ErrorEvent', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ErrorEvent entity without an ID");
        await store.remove('ErrorEvent', id.toString());
    }

    static async get(id:string): Promise<ErrorEvent | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ErrorEvent entity without an ID");
        const record = await store.get('ErrorEvent', id.toString());
        if (record){
            return ErrorEvent.create(record as ErrorEventProps);
        }else{
            return;
        }
    }



    static create(record: ErrorEventProps): ErrorEvent {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new ErrorEvent(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
