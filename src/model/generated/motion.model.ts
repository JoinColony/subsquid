import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Colony} from "./colony.model"
import {Transaction} from "./transaction.model"
import {Domain} from "./domain.model"

@Entity_()
export class Motion {
    constructor(props?: Partial<Motion>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fundamentalChainId!: bigint | undefined | null

    @Column_("text", {nullable: true})
    action!: string | undefined | null

    @Column_("text", {nullable: true})
    extensionAddress!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    associatedColony!: Colony | undefined | null

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction | undefined | null

    @Column_("text", {nullable: true})
    agent!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain | undefined | null

    @Column_("text", {array: true, nullable: true})
    stakes!: (string)[] | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    requiredStake!: bigint | undefined | null

    @Column_("bool", {nullable: true})
    escalated!: boolean | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null
}
