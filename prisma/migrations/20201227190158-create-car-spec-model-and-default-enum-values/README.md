# Migration `20201227190158-create-car-spec-model-and-default-enum-values`

This migration has been generated by Andre Grossi at 12/27/2020, 4:01:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Spec" AS ENUM ('speed', 'acceleration', 'hp', 'person')

CREATE TABLE "CarSpec" (
    "id" TEXT NOT NULL,
    "name" "Spec" NOT NULL,
    "value" TEXT NOT NULL,
    "carId" TEXT,

    PRIMARY KEY ("id")
)

ALTER TABLE "CarSpec" ADD FOREIGN KEY("carId")REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201227035452-revert-and-make-car-manufacturer-mandatory-again..20201227190158-create-car-spec-model-and-default-enum-values
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -22,18 +22,25 @@
   updatedAt           DateTime @updatedAt
 }
 enum FuelType {
-  GAS
-  ELECTRIC
-  HYBRID
+  gas
+  electric
+  hybrid
 }
 enum Transmission {
-  AUTO
-  MANUAL
+  auto
+  manual
 }
+enum Spec {
+	speed
+	acceleration
+	hp
+	person
+}
+
 model CarManufacturer {
   id                  String @id @default(cuid())
   name                String @unique
   createdAt           DateTime @default(now())
@@ -58,5 +65,14 @@
   fuelType            FuelType
   transmission        Transmission
   createdAt DateTime  @default(now())
   updatedAt DateTime  @updatedAt
+  specifications      CarSpec[]
+}
+
+model CarSpec {
+  id                  String @id @default(cuid())
+  name                Spec
+  value               String
+  carId               String?
+  car                 Car? @relation(fields: [carId], references: [id])
 }
```

