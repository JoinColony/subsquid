import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class GlobalSkill {
    constructor(props?: Partial<GlobalSkill>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    skillChainId!: bigint

    @Index_()
    @ManyToOne_(() => GlobalSkill, {nullable: true})
    parent!: GlobalSkill | undefined | null

    @Column_("text", {nullable: true})
    domainId!: string | undefined | null
}
