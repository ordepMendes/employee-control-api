import prismaClient from "../prisma"

interface ListCostumerIdType {
    id: string
}

class ListCostumerByIdService {
    async execute({ id }: ListCostumerIdType) {
        const customer = await prismaClient.customer.findFirst({
            where: { id }
        });

        if (!customer) {
            throw new Error("O funcionário não foi encontrado.");
        }

        return customer;
    }
}

export { ListCostumerByIdService }
