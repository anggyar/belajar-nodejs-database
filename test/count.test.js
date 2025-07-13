import { prismaClient } from "../src/prisma-client";

describe("Prisma client", () => {
    it("should can count", async () => {
        const total = await prismaClient.customer.count({
            where: {
                name: "Anggy",
            },
        });

        expect(total).toBe(1);
    });
});
