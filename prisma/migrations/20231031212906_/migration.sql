/*
  Warnings:

  - You are about to drop the column `product_usges` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "product_usges",
ADD COLUMN     "product_usages" TEXT;
