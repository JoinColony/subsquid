import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {DomainMetadata} from "./domainMetadata.model"
import {GlobalSkill} from "./globalSkill.model"
import {Colony} from "./colony.model"

@Entity_()
export class Domain {
    constructor(props?: Partial<Domain>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    domainChainId!: bigint

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    parent!: Domain | undefined | null

    @Column_("text", {nullable: true})
    name!: string | undefined | null

    @Column_("text", {nullable: true})
    colonyAddress!: string | undefined | null

    @Column_("text", {nullable: true})
    metadata!: string | undefined | null

    @OneToMany_(() => DomainMetadata, e => e.domain)
    metadataHistory!: DomainMetadata[]

    @Index_()
    @ManyToOne_(() => GlobalSkill, {nullable: true})
    skill!: GlobalSkill | undefined | null

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    colony!: Colony
}
