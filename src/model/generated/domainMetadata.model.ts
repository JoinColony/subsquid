import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Domain} from "./domain.model"
import {Transaction} from "./transaction.model"

@Entity_()
export class DomainMetadata {
    constructor(props?: Partial<DomainMetadata>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain

    @Index_()
    @ManyToOne_(() => Transaction, {nullable: true})
    transaction!: Transaction

    @Column_("text", {nullable: true})
    metadata!: string | undefined | null
}
