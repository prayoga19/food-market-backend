import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTableUser1691480234685 implements MigrationInterface {
  name = 'UpdateTableUser1691480234685';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
  }
}
