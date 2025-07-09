import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to create customer", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "anggyar",
                email: "anggyar@gmail.com",
                name: "Anggyar Muhamad Yahya",
                phone: "082188348808",
            },
        });

        expect(customer.id).toBe("anggyar");
        expect(customer.email).toBe("anggyar@gmail.com");
        expect(customer.name).toBe("Anggyar Muhamad Yahya");
        expect(customer.phone).toBe("082188348808");
    });

    it("Should be able to update customer", async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Anggyar Ganteng",
            },
            where: {
                id: "anggyar",
            },
        });

        expect(customer.id).toBe("anggyar");
        expect(customer.email).toBe("anggyar@gmail.com");
        expect(customer.name).toBe("Anggyar Ganteng");
        expect(customer.phone).toBe("082188348808");
    });

    it("Should be able to read customer", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "anggyar",
            },
        });

        expect(customer.id).toBe("anggyar");
        expect(customer.email).toBe("anggyar@gmail.com");
        expect(customer.name).toBe("Anggyar Ganteng");
        expect(customer.phone).toBe("082188348808");
    });

    it("Should be able to delete customer", async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "anggyar",
            },
        });

        expect(customer.id).toBe("anggyar");
        expect(customer.email).toBe("anggyar@gmail.com");
        expect(customer.name).toBe("Anggyar Ganteng");
        expect(customer.phone).toBe("082188348808");
    });
});
