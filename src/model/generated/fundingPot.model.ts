import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {FundingPotPayout} from "./fundingPotPayout.model"

@Entity_()
export class FundingPot {
    constructor(props?: Partial<FundingPot>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => FundingPotPayout, e => e.fundingPot)
    fundingPotPayouts!: FundingPotPayout[]
}
