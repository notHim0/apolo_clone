-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "qualifications" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,
    "rating" INTEGER,
    "languages" TEXT[],
    "clinic_location" TEXT NOT NULL,
    "img_url" TEXT,
    "mode_of_consult" TEXT[],

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);
