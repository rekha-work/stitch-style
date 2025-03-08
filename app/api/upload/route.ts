import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const category = formData.get('category') as string;
        const password = formData.get('password') as string;

        if (password !== process.env.UPLOAD_PASSWORD) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload file to Cloudinary
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const uploadResult: any = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "uploads" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        console.log(uploadResult);
        const uploaded_url = uploadResult.secure_url;

        // Insert into the correct Prisma table
        let result;
        switch (category) {
            case "stitched":
                result = await prisma.stitched.create({
                    data: { url: uploaded_url }
                });
                break;
            case "handemb":
                result = await prisma.handemb.create({
                    data: { url: uploaded_url }
                });
                break;
            case "macemb":
                result = await prisma.macemb.create({
                    data: { url: uploaded_url }
                });
                break;
            default:
                return NextResponse.json({ error: "Invalid category" }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: result });

    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
