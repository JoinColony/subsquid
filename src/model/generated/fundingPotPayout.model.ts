import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"
import {FundingPot} from "./fundingPot.model"

@Entity_()
export class FundingPotPayout {
    constructor(props?: Partial<FundingPotPayout>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fundingPotChainId!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => FundingPot, {nullable: true})
    fundingPot!: FundingPot
}
