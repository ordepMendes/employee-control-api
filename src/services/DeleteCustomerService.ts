import prismaClient from "../prisma"

interface DeleteCustomerId{
    id: string
}

class DeleteCustomerService{
    async execute({id}: DeleteCustomerId){
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("O funcionario não foi encontrado.");
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso!"}
    }
}

export {DeleteCustomerService}