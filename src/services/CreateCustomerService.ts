import prismaClient from "../prisma";

interface EmployeeType {
  name: string;
  email: string;
  status: boolean;
  photo: string;
  cpf: string;
  data_contracao: Date;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class CreateCustomerService {
  async execute({
    name,
    bairro,
    cep,
    cidade,
    cpf,
    data_contracao,
    email,
    estado,
    photo,
    rua,
    status,
  }: EmployeeType) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos.");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        bairro,
        cep,
        cidade,
        cpf,
        data_contracao,
        email,
        estado,
        photo,
        rua,
        status,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
