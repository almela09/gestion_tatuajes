import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1710062022422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "role_id",
                        type: "int",
                        default: 1
                    },


                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    },
                ],

                foreignKeys: [
                    {
                        columnNames: ["role_id"],
                        referencedTableName: "roles",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

   

}
