import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Domain} from "./domain.model"
import {Transaction} from "./transaction.model"
import {Payment} from "./payment.model"

@Entity_()
export class OneTxPayment {
    constructor(props?: Partial<OneTxPayment>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fundamentalChainId!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    nPayouts!: bigint | undefined | null

    @Column_("text", {nullable: true})
    agent!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction | undefined | null

    @Index_()
    @ManyToOne_(() => Payment, {nullable: true})
    payment!: Payment | undefined | null
}
