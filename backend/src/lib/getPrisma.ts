import { PrismaClient } from "@prisma/client/edge";

let prisma: PrismaClient;

export function getPrisma(databaseUrl: string) {
  if (!prisma) {
    prisma = new PrismaClient({
      datasourceUrl: databaseUrl,
    });
  }

  return prisma;
}