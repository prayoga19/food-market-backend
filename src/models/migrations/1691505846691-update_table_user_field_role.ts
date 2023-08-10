import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTableUserFieldRole1691505846691
  implements MigrationInterface
{
  name = 'UpdateTableUserFieldRole1691505846691';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "number_phone" TO "phone_number"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'user'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "phone_number" TO "number_phone"`,
    );
  }
}
