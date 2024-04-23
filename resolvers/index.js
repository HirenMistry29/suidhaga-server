import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";
import postResolver from "./post.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver , postResolver]);

export default mergedResolvers;
