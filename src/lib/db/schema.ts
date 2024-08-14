import { relations, sql } from "drizzle-orm";
import { text, integer, sqliteTable, } from "drizzle-orm/sqlite-core";

const common = {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
    // intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
};

export const users = sqliteTable('users', {
    ...common,
    email: text('email').notNull().unique()
});

export const accounts = sqliteTable('accounts', {
    ...common,
    userId: integer('user_id').references(() => users.id)
});

export const sessions = sqliteTable('sessions', {
    ...common,
    userId: integer('user_id').references(() => users.id)
});

// relations

export const usersRelations = relations(users, ({ many }) => ({
    accounts: many(accounts),
    sessions: many(sessions)
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
    user: one(users, {
        fields: [accounts.userId],
        references: [users.id],
    }),
}));