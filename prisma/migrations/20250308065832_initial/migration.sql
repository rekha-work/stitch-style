-- CreateTable
CREATE TABLE "stitched" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "stitched_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "handemb" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "handemb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "macemb" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "macemb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stitched_url_key" ON "stitched"("url");

-- CreateIndex
CREATE UNIQUE INDEX "handemb_url_key" ON "handemb"("url");

-- CreateIndex
CREATE UNIQUE INDEX "macemb_url_key" ON "macemb"("url");
