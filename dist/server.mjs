import {
  registerForEvent
} from "./chunk-VNH5AVWU.mjs";
import {
  errorHandler
} from "./chunk-DCZJQNPL.mjs";
import {
  checkIn
} from "./chunk-6ZLPH62V.mjs";
import {
  createEvent
} from "./chunk-KSQECG6B.mjs";
import "./chunk-D6VPAAQ4.mjs";
import {
  getAttendeeBadge
} from "./chunk-L7N3Q3KD.mjs";
import {
  getEventAttendees
} from "./chunk-GHZT7CBW.mjs";
import {
  getEvent
} from "./chunk-JPQ6RVSG.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifi\xE7\xE3oes da API para o back-end da aplica\xE7\xE3o pass.in contru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
export {
  app
};
