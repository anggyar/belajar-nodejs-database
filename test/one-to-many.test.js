import { prismaClient } from "../src/prisma-client";

describe("Prisma client", () => {
    it("should can insert and include", async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "anggy",
                title: "Insert comment",
                description: "Description comment",
            },
            include: {
                customer: true,
            },
        });

        console.info(comment);
    });

    it("should can insert and many relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "zoyi",
                email: "zoyi@gokil.com",
                name: "zoyi aja",
                phone: "0932482245498",
                comment: {
                    createMany: {
                        data: [
                            {
                                title: "Comment 1",
                                description: "Desc 1",
                            },
                            {
                                title: "Comment 2",
                                description: "Desc 2",
                            },
                        ],
                    },
                },
            },
            include: {
                comment: true,
            },
        });

        console.info(customer);
    });

    it("should can insert and many relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                comment: {
                    some: {
                        title: {
                            contains: "Comment",
                        },
                    },
                },
            },
            include: {
                comment: true,
            },
        });

        console.info(customer);
    });
});
