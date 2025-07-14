import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    // Proses pemberian like ke id customer dan id product
    it("should can isnert many to many realtion", async () => {
        const like = await prismaClient.like.create({
            data: {
                customer_id: "asyraf",
                product_id: "P0001",
            },
            include: {
                customer: true,
                product: true,
            },
        });

        console.info(like);
    });

    // Cari kostumer berdasarkan ID, yang mana telah melakukan like ke product
    it("should can find one with many to many relation", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "anggy",
            },
            include: {
                likes: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        console.info(JSON.stringify(customer));
    });

    // Temukan pelanggan yang melakukan like pada product yang terdapat kata A
    it("should can find many with many to many relation", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "A",
                            },
                        },
                    },
                },
            },
            include: {
                likes: {
                    include: {
                        product: true,
                    },
                },
            },
        });

        console.info(JSON.stringify(customers));
    });

    //
    it("should can create implicit relation", async () => {
        const customers = await prismaClient.customer.update({
            where: {
                id: "anggy",
            },
            data: {
                loves: {
                    connect: [
                        {
                            id: "P0001",
                        },
                        {
                            id: "P0002",
                        },
                    ],
                },
            },
            include: {
                loves: true,
            },
        });

        console.info(customers);
    });

    it("should find many implicit relation", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                loves: {
                    some: {
                        name: {
                            contains: "A",
                        },
                    },
                },
            },
            include: {
                loves: true,
            },
        });
        console.info(customers);
    });
});
