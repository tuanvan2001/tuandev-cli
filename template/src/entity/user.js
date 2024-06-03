import {EntitySchema} from "typeorm";

const User = new EntitySchema({
    name: "User",
    tableName: "User",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: "increment"
        },
        username: {
            type: "varchar",
            length: 255
        },
        password: {
            type: "varchar",
            length: 255
        },
        email: {
            type: "varchar",
            length: 255
        }
    }
});

export default User;
