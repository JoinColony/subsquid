import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Expenditure {
    constructor(props?: Partial<Expenditure>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string
}
