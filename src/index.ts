import { factory } from "fakingoose";
import { clientSchema } from "./client.schema";
import { userSchema } from "./user.schema";

// If you use the schema in the factory you have to force the type in the shchema
// If you use the model, at least the one I use in nest, it takes the ClientDoc type directly

const clientFactory = factory(clientSchema, {});

// Now you can see that in the static fields it knows witch properties have client as name or age
const client = clientFactory.generate({ name: "ClientName" });

// Type of client now will be the same as if i do a find in mongoose or a new Client with the model.

const userFactory = factory(userSchema, {});
// Now user fails to initiate because userschema doesn't have a type inferred
const user = userFactory.generate({ name: "UserName" });
