import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Domain} from "./domain.model"

@Entity_()
export class Colony {
    constructor(props?: Partial<Colony>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    ensName!: string | undefined | null

    @Column_("text", {nullable: true})
    orbitAddress!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    colonyChainId!: bigint

    @OneToMany_(() => Domain, e => e.colony)
    domains!: Domain[]
}
