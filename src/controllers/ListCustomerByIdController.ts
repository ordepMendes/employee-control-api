import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumerByIdService } from "../services/ListCostumerByIdService";

class ListCostumerByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id:string};

        const customerService = new ListCostumerByIdService()
        const customer = await customerService.execute({id});
        reply.send(customer);
    }
}

export {ListCostumerByIdController}