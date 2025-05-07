import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

type EmployeeType = {
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
};

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
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
    } = request.body as EmployeeType;
    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({
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
    });

    reply.send(customer);
  }
}

export { CreateCustomerController };
