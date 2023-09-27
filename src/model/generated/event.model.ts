import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Domain} from "./domain.model"
import {Transaction} from "./transaction.model"
import {Colony} from "./colony.model"

@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction | undefined | null

    @Column_("text", {nullable: true})
    address!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    associatedColony!: Colony | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    args!: string | undefined | null
}
