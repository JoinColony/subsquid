import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Domain} from "./domain.model"
import {Colony} from "./colony.model"
import {FundingPot} from "./fundingPot.model"

@Entity_()
export class Payment {
    constructor(props?: Partial<Payment>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain | undefined | null

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    colony!: Colony | undefined | null

    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Index_()
    @ManyToOne_(() => FundingPot, {nullable: true})
    fundingPot!: FundingPot | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    paymentChainId!: bigint | undefined | null
}
