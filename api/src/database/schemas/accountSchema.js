import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts",{
    id:text("id").primaryKey(),
    name:text("name").notNull(),
    userId:text("user_id").notNull(),
})

import mongoose from "mongoose";

export const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    });


    