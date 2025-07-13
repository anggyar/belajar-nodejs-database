import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("should can create one to one relation", async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "Anggy",
                customer_id: "anggy",
                balance: 1000000,
            },
            include: {
                customer: true,
            },
        });

        console.info(wallet);
    });

    it("should can create one to one relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "isan",
                name: "Itampayoung",
                email: "isanganteng@gmail.com",
                phone: "08328472849",
                Wallet: {
                    create: {
                        id: "isan",
                        balance: 2000000,
                    },
                },
            },
            include: {
                Wallet: true,
            },
        });

        console.info(customer);
    });

    it("should can create one to one relation", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "anggy",
            },
            include: {
                Wallet: true,
            },
        });

        console.info(customer);
    });

    it("should can create one to one relation filter", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                Wallet: {
                    isNot: null,
                },
            },
            include: {
                Wallet: true,
            },
        });

        console.info(customer);
    });
});
