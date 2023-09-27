import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Colony} from "./colony.model"
import {Transaction} from "./transaction.model"

@Entity_()
export class ColonyMetadata {
    constructor(props?: Partial<ColonyMetadata>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    colony!: Colony

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Column_("text", {nullable: true})
    metadata!: string | undefined | null
}
