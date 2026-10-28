import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/** Inbound project inquiries from the contact form. */
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  company: varchar("company", { length: 160 }),
  phone: varchar("phone", { length: 60 }),
  service: varchar("service", { length: 120 }).notNull(),
  budget: varchar("budget", { length: 80 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/** Newsletter subscribers (footer opt-in). */
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
