import prisma from "../../prisma/prisma.js";

export default {
  Query: {
    getStaffs: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.staff.findMany();
      return data;
    },
  },

  Mutation: {
    createStaff: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.staff.create({
        data: args,
      });
      return data;
    },
    staff_signIn: async (parent, args, { req, res }, info) => {
      var values = await signInWithPhone.validateAsync(args);
      var data = await prisma.staff.findUnique({
        where: { staff_phone: values.staff_phone },
      });

      var match = matched_password(values.staff_password, data.staff_password);
      if (match) {
        req.session.userId = data.staff_Id;
        delete data.staff_password;
        return data;
      } else throw new ApolloServerValidationErrorCode("Invalid Credentials");
    },
  },
};
