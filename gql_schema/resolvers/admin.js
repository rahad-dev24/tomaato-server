import prisma from "../../prisma/prisma.js";

import {
  signUp,
  signInWithEmail,
  signInWithPhone,
} from "../../Auth/Joi/index.js";
import {
  hashed_password,
  matched_password,
  checkSignedIn,
  checkSignedOut,
  signOut,
} from "../../Auth/bcrypt/index.js";

export default {
  Query: {
    getAdmins: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data0 = await prisma.admin.findMany();

      const data = await prisma.admin.findUnique({
        where: {
          admin_Id: data0?.[0].admin_id,
        },
      });
      return data;
    },
    getAllAdmins: async (parent, args, { req, res }, info) => {
      //todo: auth, joi validation
      const data = await prisma.admin.findMany();
      return data;
    },
  },

  Mutation: {
    createAdmin: async (parent, args, { req, res }, info) => {
      checkSignedOut(req);
      const values = args;
      const plain_password = values.admin_password;
      values.admin_password = hashed_password(values.admin_password);

      //todo: add error flag if person not created
      if (plain_password !== values.admin_password) {
        var data = await prisma.admin.create({
          data: values,
        });
      }

      const user = await prisma.admin.findUnique({
        where: {
          admin_Id: data.admin_Id,
        },
        select: {
          admin_Id: true,
        },
      });

      req.session.userId = user.admin_Id;
      req.session.role = user.role;

      return user;
    },

    admin_signIn: async (parent, args, { req, res }, info) => {
      var data = await prisma.admin.findUnique({
        where: { admin_phone: args.admin_phone },
      });

      var match = matched_password(args.admin_password, data.admin_password);
      if (match) {
        req.session.userId = data.admin_Id;
        req.session.role = data.role;
        delete data.admin_password;
        return data;
      } else throw new ApolloServerValidationErrorCode("Invalid Credentials");
    },
  },
};
