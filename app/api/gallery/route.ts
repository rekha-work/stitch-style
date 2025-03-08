import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");

        console.log("Received Category:", category);

        if (!category) {
            return NextResponse.json({ error: "Category not provided" }, { status: 400 });
        }

        const allowedCategories = ["stitched", "handemb", "macemb"]; 
        if (!allowedCategories.includes(category)) {
            return NextResponse.json({ error: "Invalid category" }, { status: 400 });
        }
        //ts ignore used , because prisma thinks that the category is null or undefined , but we know that its a valid string and the tables exist in our database
//@ts-ignore
        const data = await prisma[category].findMany({
            select: {
                url: true,
            },
        });
        //@ts-ignore
        const urls = data.map(item  => item.url);

        return NextResponse.json({ message: "Category received", category, urls });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
