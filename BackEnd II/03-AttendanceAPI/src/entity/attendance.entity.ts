import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Attendance extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    startTime: string

    @Column()
    endTime: string

    @Column()
    date: string

    @Column()
    notes: string
}