"use server";

import { db } from "@/db/drizzle";
import { InsertNoteboook, notebooks } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { success } from "zod";

export const createNotebook = async (values: InsertNoteboook) => {
    try {
        const notebook = await db.insert(notebooks).values(values)

        return { success: true, message: "Notebook created successfully" }
    } catch  {
        return { success: false, message: "Failed to create notebook"}
    }
};


export const getNotebooks = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" };
        }

        const notebooksByUser = await db.select().from(notebooks).where(eq(notebooks.userId, userId));
        
        return { success: true, notebooks: notebooksByUser };
    } catch (error) {
        return { success: false, message: "Failed to fetch notebooks" };
    }
}


export const getNotebookById = async (id: string) => {
    try {
        const notebook = await db.select().from(notebooks).where(eq(notebooks.id, id));
        return { success: true, notebook };
    } catch (error) {
        return { success: false, message: "Failed to fetch notebook" };
    }
}

export const updateNotebook = async (id: string, values: InsertNoteboook) => {
    try {
        await db.update(notebooks).set(values).where(eq(notebooks.id, id));
        return { success: true, message: "Notebook updated successfully" };
    } catch (error) {
        return { success: false, message: "Failed to update notebook" };
    }

}


export const deleteNotebook = async (id: string) => {
    try {
        await db.delete(notebooks).where(eq(notebooks.id, id));
        return { success: true, message: "Notebook deleted successfully" };
    } catch (error) {
        return { success: false, message: "Failed to delete notebook" };
        
    }
}  