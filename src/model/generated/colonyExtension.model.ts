import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Colony} from "./colony.model"

@Entity_()
export class ColonyExtension {
    constructor(props?: Partial<ColonyExtension>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Colony, {nullable: true})
    colony!: Colony

    @Column_("text", {nullable: false})
    hash!: string
}
