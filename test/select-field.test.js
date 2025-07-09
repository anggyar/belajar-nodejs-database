import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("should create and select fields", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "melvien",
                email: "melvien@gmail.com",
                name: "Melvien Maulidan",
                phone: "08237242938",
            },
            select: {
                name: true,
                id: true,
            },
        });

        expect(customer.id).toBe("melvien");
        expect(customer.name).toBe("Melvien Maulidan");
        expect(customer.email).toBe(undefined);
        expect(customer.phone).toBe(undefined);
    });

    it("should can select fields", async () => {
        const customers = await prismaClient.customer.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        for (const customer of customers) {
            expect(customer.id).toBeDefined();
            expect(customer.name).toBeDefined();
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();
        }
    });
});
