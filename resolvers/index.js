import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";
import postResolver from "./post.resolver.js";
import jobResolver from "./job.resolver.js";
import commentResolver from "./comment.resolver.js";
import employeeResolver from "./employee.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver , postResolver, jobResolver , commentResolver , employeeResolver ]);

export default mergedResolvers;
