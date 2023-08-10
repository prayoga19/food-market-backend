import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTableUserFieldPhoneNumber1691509237846
  implements MigrationInterface
{
  name = 'UpdateTableUserFieldPhoneNumber1691509237846';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "phone_number" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone_number"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "phone_number" integer NOT NULL`,
    );
  }
}
