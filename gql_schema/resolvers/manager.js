import prisma from "../../prisma/prisma.js";

export default {
  Query: {
    getManagers: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.manager.findMany();
      return data;
    },
  },

  Mutation: {
    createManager: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation

      const data = await prisma.manager.create({
        data: args,
      });
      return data;
    },
    manager_signIn: async (parent, args, { req, res }, info) => {
      var values = await signInWithPhone.validateAsync(args);
      var data = await prisma.manager.findUnique({
        where: { manager_phone: values.manager_phone },
      });

      var match = matched_password(
        values.manager_password,
        data.manager_password
      );
      if (match) {
        req.session.userId = data.manager_Id;
        delete data.manager_password;
        return data;
      } else throw new ApolloServerValidationErrorCode("Invalid Credentials");
    },
  },
};
