-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Role" ADD VALUE 'manager';
ALTER TYPE "Role" ADD VALUE 'ceo';

-- CreateTable
CREATE TABLE "admin" (
    "admin_Id" TEXT NOT NULL,
    "admin_name" TEXT NOT NULL,
    "admin_phone" INTEGER NOT NULL,
    "admin_email" TEXT NOT NULL,
    "admin_password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_Id")
);

-- CreateTable
CREATE TABLE "staff" (
    "staff_Id" TEXT NOT NULL,
    "staff_name" TEXT NOT NULL,
    "staff_phone" INTEGER NOT NULL,
    "staff_email" TEXT NOT NULL,
    "staff_password" TEXT NOT NULL,
    "store_code" TEXT NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("staff_Id")
);

-- CreateTable
CREATE TABLE "manager" (
    "manager_Id" TEXT NOT NULL,
    "manager_name" TEXT NOT NULL,
    "manager_phone" INTEGER NOT NULL,
    "manager_email" TEXT NOT NULL,
    "manager_password" TEXT NOT NULL,
    "store_code" TEXT NOT NULL,

    CONSTRAINT "manager_pkey" PRIMARY KEY ("manager_Id")
);

-- CreateTable
CREATE TABLE "ceo" (
    "ceo_Id" TEXT NOT NULL,
    "ceo_name" TEXT NOT NULL,
    "ceo_phone" INTEGER NOT NULL,
    "ceo_email" TEXT NOT NULL,
    "ceo_password" TEXT NOT NULL,

    CONSTRAINT "ceo_pkey" PRIMARY KEY ("ceo_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_admin_phone_key" ON "admin"("admin_phone");

-- CreateIndex
CREATE UNIQUE INDEX "admin_admin_email_key" ON "admin"("admin_email");

-- CreateIndex
CREATE UNIQUE INDEX "staff_staff_phone_key" ON "staff"("staff_phone");

-- CreateIndex
CREATE UNIQUE INDEX "staff_staff_email_key" ON "staff"("staff_email");

-- CreateIndex
CREATE UNIQUE INDEX "manager_manager_phone_key" ON "manager"("manager_phone");

-- CreateIndex
CREATE UNIQUE INDEX "manager_manager_email_key" ON "manager"("manager_email");

-- CreateIndex
CREATE UNIQUE INDEX "ceo_ceo_phone_key" ON "ceo"("ceo_phone");

-- CreateIndex
CREATE UNIQUE INDEX "ceo_ceo_email_key" ON "ceo"("ceo_email");
