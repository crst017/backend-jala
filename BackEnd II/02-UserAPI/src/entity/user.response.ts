import { Assistance } from "./assistance";

export class UserResponse {

    id: string
    nickname: string
    fullname: string
    totalAssistance: number
    assitanceList: Assistance[]
}