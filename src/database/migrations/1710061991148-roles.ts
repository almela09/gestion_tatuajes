import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Roles1710061991148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "roles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",

                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "40",
                    },

                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("roles");
    }

}
