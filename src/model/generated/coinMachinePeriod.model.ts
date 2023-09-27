import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class CoinMachinePeriod {
    constructor(props?: Partial<CoinMachinePeriod>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    saleEndedAt!: bigint

    @Column_("text", {nullable: false})
    colonyAddress!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    tokensBought!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    price!: bigint | undefined | null
}
