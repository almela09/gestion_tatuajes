import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Services1710062052390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "service_name",
                        type: "varchar(255)",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "text",

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


            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }


}
