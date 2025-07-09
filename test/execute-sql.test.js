import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be abel to execute sql", async () => {
        const id = 1;
        const name = "Anggyar Muhamad Yahya";

        const impacted =
            await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;

        expect(impacted).toBe(1);
    });
});
