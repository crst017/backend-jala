import { DataSource } from "typeorm"
import { User } from "../entity/user.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "userdb",
    synchronize: true,
    logging: false,
    entities: [User]
})
