-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Empty product title',
    "description" TEXT NOT NULL DEFAULT 'Empty product description',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productIds" INTEGER[],
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Empty item title',
    "description" TEXT NOT NULL DEFAULT 'Empty item description',
    "itemTypeId" INTEGER NOT NULL,
    "itemTypeName" TEXT NOT NULL,
    "buyingPrice" INTEGER NOT NULL,
    "additionalCost" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "retailPrice" INTEGER NOT NULL,
    "discountedPrice" INTEGER NOT NULL,
    "wholesalePrice" INTEGER NOT NULL,
    "invoicePrice" INTEGER NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "unit" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemType" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Empty product title',
    "description" TEXT NOT NULL DEFAULT 'Empty product description',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "varientIds" INTEGER[],
    "itemIds" INTEGER[],
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Varient" (
    "id" SERIAL NOT NULL,
    "varientName" TEXT NOT NULL,
    "itemTypeId" INTEGER NOT NULL,
    "itemTypeName" TEXT NOT NULL,
    "varientUnitIds" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Varient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VarientUnit" (
    "id" SERIAL NOT NULL,
    "itemTypeId" INTEGER NOT NULL,
    "itemTypeName" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "VarientUnit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_username_key" ON "AdminUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE INDEX "Collection_adminId_idx" ON "Collection"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_username_key" ON "Customer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE INDEX "Item_adminId_idx" ON "Item"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemType_itemName_key" ON "ItemType"("itemName");

-- CreateIndex
CREATE INDEX "ItemType_adminId_idx" ON "ItemType"("adminId");

-- CreateIndex
CREATE INDEX "Product_adminId_idx" ON "Product"("adminId");

-- CreateIndex
CREATE INDEX "Varient_adminId_idx" ON "Varient"("adminId");

-- CreateIndex
CREATE INDEX "VarientUnit_adminId_idx" ON "VarientUnit"("adminId");
