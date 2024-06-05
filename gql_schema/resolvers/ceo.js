import prisma from "../../prisma/prisma.js";

export default {
  Query: {
    getCeos: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.ceo.findMany();

      return data;
    },
  },

  Mutation: {
    createCeo: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.ceo.create({
        data: args,
      });
      return data;
    },
    ceo_signIn: async (parent, args, { req, res }, info) => {
      var values = await signInWithPhone.validateAsync(args);
      var data = await prisma.ceo.findUnique({
        where: { ceo_phone: values.ceo_phone },
      });

      var match = matched_password(values.ceo_password, data.ceo_password);
      if (match) {
        req.session.userId = data.ceo_Id;
        delete data.ceo_password;
        return data;
      } else throw new ApolloServerValidationErrorCode("Invalid Credentials");
    },
  },
};
