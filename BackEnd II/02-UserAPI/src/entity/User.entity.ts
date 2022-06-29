import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nickname: string

    @Column()
    fullname: string

    @Column({default: 0})
    totalAssistance: number
}