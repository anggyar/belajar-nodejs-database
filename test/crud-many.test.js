import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("should create many records", async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "asyraf",
                    email: "asyraf@gmail.com",
                    name: "Asyraf",
                    phone: "088877665435",
                },
                {
                    id: "sarah",
                    email: "sarah@gmail.com",
                    name: "Sarah",
                    phone: "088987656788",
                },
            ],
        });

        expect(count).toBe(2);
    });

    it("Should create update many records", async () => {
        const { count } = await prismaClient.customer.updateMany({
            data: {
                email: "anggylagi@gmail.com",
            },
            where: {
                name: "Anggy",
            },
        });

        expect(count).toBe(1);
    });

    it("should create delete many records", async () => {
        const { count } = await prismaClient.customer.deleteMany({
            where: {
                name: "tidak ada",
            },
        });

        expect(count).toBe(0);
    });

    it("should read many records", async () => {
        const customers = await prismaClient.customer.findMany({});
        console.info(customers);

        expect(customers.length).toBe(5);
    });
});
