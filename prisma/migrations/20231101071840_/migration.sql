/*
  Warnings:

  - Added the required column `Profit_margin_per_piece` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "Profit_margin_per_piece" TEXT NOT NULL,
ALTER COLUMN "product_net_purchase_price" SET DATA TYPE TEXT,
ALTER COLUMN "product_net_purchase_quantity" SET DATA TYPE TEXT,
ALTER COLUMN "product_in_stock" SET DATA TYPE TEXT;
