import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    // SEQUENTIAL TRANSACTION
    it("Should can execute sequential transaction", async () => {
        const [anggy, budi] = await prismaClient.$transaction([
            // Intruksi 1
            prismaClient.customer.create({
                data: {
                    id: "anggy",
                    email: "anggy@gtg.com",
                    name: "Anggy",
                    phone: "083482348343",
                },
            }),

            // instruksi 2
            prismaClient.customer.create({
                data: {
                    id: "budi",
                    email: "budi@gtg.com",
                    name: "Budi",
                    phone: "0812485383283",
                },
            }),
        ]);

        expect(anggy.name).toBe("Anggy");
        expect(budi.name).toBe("Budi");
    });

    // INTERACTIVE TRANSACTIONS
    it("Should can execute interactive transaction", async () => {
        // prismaClient nya di ubah dalam async function (prisma), lebih manual, tapi lebih bebas
        const [tyo, zaki] = await prismaClient.$transaction(async (prisma) => {
            const tyo = await prisma.customer.create({
                data: {
                    id: "tyo",
                    email: "tyo@gmail.com",
                    name: "Christantyo",
                    phone: "081276580980",
                },
            });

            const zaki = await prisma.customer.create({
                data: {
                    id: "zaki",
                    email: "zaki@gmail.com",
                    name: "Zaki kamal",
                    phone: "081212344343",
                },
            });

            return [tyo, zaki];
        });

        expect(tyo.name).toBe("Christantyo");
        expect(zaki.name).toBe("Zaki kamal");
    });
});
