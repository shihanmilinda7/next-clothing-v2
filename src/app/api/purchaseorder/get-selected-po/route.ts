import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const purchaseorderid: any = searchParams.get("purchaseorderid");
  let res: any;
  try {
    await prisma.$transaction(async (tx) => {
      let poData = await tx.purchaseorders.findMany({
        where: {
          purchaseorderid: parseInt(purchaseorderid),
        },
      });

      const poDetailData = await tx.purchaseorderdetails.findMany({
        where: {
          purchaseorderid: parseInt(purchaseorderid),
        },
        orderBy: {
          rowindex: "asc", // Replace 'yourPropertyName' with the actual property name
        },
      });

      // poData["poDetailData"] = poDetailData;
      // console.log("poDetailData", poData);
      res = { message: "SUCCESS", poData, poDetailData };
      return "";
    });
  } catch (error) {
    console.error("Error items", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}
