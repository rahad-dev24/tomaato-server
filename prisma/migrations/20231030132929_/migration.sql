-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'admin';

-- AlterTable
ALTER TABLE "ceo" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ceo',
ALTER COLUMN "ceo_phone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "manager" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'manager',
ALTER COLUMN "manager_phone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "staff" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'staff',
ALTER COLUMN "staff_phone" SET DATA TYPE TEXT;
