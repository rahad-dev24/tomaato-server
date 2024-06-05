-- AlterTable
ALTER TABLE "Purchase" ALTER COLUMN "product_price_per_pcs" SET DATA TYPE TEXT,
ALTER COLUMN "product_in_stock" DROP NOT NULL,
ALTER COLUMN "product_expiry_date" DROP NOT NULL,
ALTER COLUMN "product_expiry_date" SET DATA TYPE TEXT,
ALTER COLUMN "product_manufacturing_date" DROP NOT NULL,
ALTER COLUMN "product_manufacturing_date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Sales" ALTER COLUMN "sale_net_price" SET DATA TYPE TEXT;
