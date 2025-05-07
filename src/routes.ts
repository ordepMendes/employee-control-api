import { FastifyRequest, FastifyPluginOptions, FastifyInstance, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/employee-list", async (request: FastifyRequest, reply: FastifyReply) =>{
        return {
            nome: "khazix",
            idade: 1245
        }
    })

    fastify.post("/add-employee", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })
}