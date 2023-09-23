import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tmpPageNumber: string = searchParams.get("currentPage");
  const searchValue: string = searchParams.get("searchValue");

  const currentPage: any = parseInt(tmpPageNumber);
  const postsPerPage = 10; // Number of posts per page
  const offset = (currentPage - 1) * postsPerPage;
  let poData: any;
  let res: any;
  const tmpSearhValue: string = "%" + searchValue + "%";

  // console.log("data",searchParams)
  // console.log("searchValue",searchValue)
  try {
    await prisma.$transaction(async (tx) => {
      if (searchValue == "-1") {
        const rawQuery = Prisma.sql`select p.*,c.customername,s.suppliername,f.fabricname from purchaseorders as p 
        left join customers as c on p.customerid = c.customerid
        left join suppliers as s on p.supplierid = s.supplierid
        left join fabrics as f on p.fabricid = f.fabricid order by p.purchaseorderid desc limit ${postsPerPage} offset ${offset}`;
        poData = await tx.$queryRaw(rawQuery);
      } else {
        const rawQuery = Prisma.sql`select p.*,c.customername,s.suppliername,f.fabricname from purchaseorders as p 
        left join customers as c on p.customerid = c.customerid
        left join suppliers as s on p.supplierid = s.supplierid
        left join fabrics as f on p.fabricid = f.fabricid where c.customername like ${tmpSearhValue} or p.orderstatus like ${tmpSearhValue} or s.suppliername like ${tmpSearhValue} order by p.purchaseorderid desc limit ${postsPerPage} offset ${offset}`;
        poData = await tx.$queryRaw(rawQuery);
      }

      const poCount = await tx.purchaseorders.count();

      res = { message: "SUCCESS", poData, poCount };

      return "";
    });
  } catch (error) {
    console.error("Error purchase order:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const {
    customerid,
    date,
    supplierid,
    customerpo,
    exfactorydate,
    shippingmode,
    customerstylename,
    department,
    shippingmethod,
    fabricid,
    rationpacksize,
    style,
    colour,
    description,
    supplierprice,
    sellingprice,
    colourcode,
    remark,
    currency,
    orderstatus,
    samplestatus,
    poDetailTableData,
  } = await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew purchaseorder.
      const newPo = await tx.purchaseorders.create({
        data: {
          customerid: parseInt(customerid),
          date,
          supplierid: parseInt(supplierid),
          customerpo,
          exfactorydate,
          shippingmode,
          customerstylename,
          department,
          shippingmethod,
          fabricid: parseInt(fabricid),
          rationpacksize,
          style,
          colour,
          description,
          supplierprice: parseInt(supplierprice),
          sellingprice: parseInt(sellingprice),
          colourcode,
          remark,
          currency,
          orderstatus,
          samplestatus,
        },
      });

      // 2. Verify purchaseorder enterd
      if (!newPo.purchaseorderid) {
        throw new Error(`PO not enterd`);
      }

      // 3. addnew purchaseorder details for geader table.
      const headerId: number = newPo.purchaseorderid;
      for (let i = 0; i < poDetailTableData.length; i++) {
        const element = poDetailTableData[i];
        await tx.purchaseorderdetails.create({
          data: {
            purchaseorderid: headerId,
            rowindex: i + 1,
            size: element.size,
            ratiopack: parseInt(element.ratiopack),
            single: parseInt(element.single),
          },
        });
      }
      return "";
    });
  } catch (error) {
    console.error("Error adding new purchase order:", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function PUT(request: Request) {
  const {
    purchaseorderid,
    customerid,
    date,
    supplierid,
    customerpo,
    exfactorydate,
    shippingmode,
    customerstylename,
    department,
    shippingmethod,
    fabricid,
    rationpacksize,
    style,
    colour,
    description,
    supplierprice,
    sellingprice,
    colourcode,
    remark,
    currency,
    orderstatus,
    samplestatus,
    poDetailTableData,
  } = await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {

      // 1. addnew purchaseorder.
      const newPo = await tx.purchaseorders.updateMany({
        where: { purchaseorderid: parseInt(purchaseorderid) },
        data: {
          customerid: parseInt(customerid),
          date,
          supplierid: parseInt(supplierid),
          customerpo,
          exfactorydate,
          shippingmode,
          customerstylename,
          department,
          shippingmethod,
          fabricid: parseInt(fabricid),
          rationpacksize,
          style,
          colour,
          description,
          supplierprice: parseInt(supplierprice),
          sellingprice: parseInt(sellingprice),
          colourcode,
          remark,
          currency,
          orderstatus,
          samplestatus,
        },
      });

      // 2. Verify purchaseorder enterd
      // if (!newPo.purchaseorderid) {
      //   throw new Error(`PO not enterd`);
      // }

      // // 3. addnew purchaseorder details for geader table.
      // const headerId: number = newPo.purchaseorderid;
      // for (let i = 0; i < poDetailTableData.length; i++) {
      //   const element = poDetailTableData[i];
      //   await tx.purchaseorderdetails.create({
      //     data: {
      //       purchaseorderid: headerId,
      //       rowindex: i + 1,
      //       size: element.size,
      //       ratiopack: parseInt(element.ratiopack),
      //       single: parseInt(element.single),
      //     },
      //   });
      // }
      return "";
    });
  } catch (error) {
    console.error("Error adding new purchase order:", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { supplierid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.suppliers.delete({
        where: {
          supplierid,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error deleting Supplier", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
