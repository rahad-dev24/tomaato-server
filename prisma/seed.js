import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const c = await prisma.customer.create({
  //   data: {
  //     customer_name: "dog",
  //     customer_phone: "gdg465357457",
  //     customer_password: "123",
  //   },
  // });
  // const d = await prisma.admin.deleteMany();
  // const e = await prisma.staff.deleteMany();
  // const f = await prisma.ceo.deleteMany();
  // const g = await prisma.manager.deleteMany();
  // for (var i = 0; i <= 10; i++) {
  //   var p = "11111111110" + i;
  //   var e = "ceo" + i + "@gmail.com";
  //   var n = "ceo" + i;
  //   const c = await prisma.ceo.create({
  //     data: {
  //       ceo_name: n,
  //       ceo_phone: p,
  //       ceo_password: "11111",
  //       //store_code: "0" + i,
  //       ceo_email: e,
  //     },
  //   });
  // }
  // for (var i = 0; i <= 10; i++) {
  //   var p = "11111111110" + i;
  //   var e = "staff" + i + "@gmail.com";
  //   var n = "Staff" + i;
  //   const c = await prisma.staff.create({
  //     data: {
  //       staff_name: n,
  //       staff_phone: p,
  //       staff_password: "11111",
  //       store_code: "0" + i,
  //       staff_email: e,
  //     },
  //   });
  // }
  // for (var i = 0; i <= 10; i++) {
  //   var p = "11111111110" + i;
  //   var e = "manager" + i + "@gmail.com";
  //   var n = "manager" + i;
  //   const c = await prisma.manager.create({
  //     data: {
  //       manager_name: n,
  //       manager_phone: p,
  //       manager_password: "11111",
  //       store_code: "0" + i,
  //       manager_email: e,
  //     },
  //   });
  // }
  // for (var i = 0; i <= 10; i++) {
  //   var p = "11111111110" + i;
  //   var e = "admin" + i + "@gmail.com";
  //   var n = "admin" + i;
  //   const c = await prisma.admin.create({
  //     data: {
  //       admin_name: n,
  //       admin_phone: p,
  //       admin_password: "11111",
  //       //store_code: "0" + i,
  //       admin_email: e,
  //     },
  //   });
  // }
  const rr = await prisma.customer.deleteMany();
  for (var i = 0; i <= 10; i++) {
    var p = "11111111110" + i;
    var e = "customer" + i + "@gmail.com";
    var n = "customer" + i;
    const c = await prisma.customer.create({
      data: {
        customer_name: n,
        customer_phone: p,
        customer_password: "11111",
        //store_code: "0" + i,
        customer_email: e,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
