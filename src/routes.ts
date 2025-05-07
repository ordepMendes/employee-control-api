import { FastifyRequest, FastifyPluginOptions, FastifyInstance, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.post("/add-employee", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    fastify.get("/list-employees", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    })
}