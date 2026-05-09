# Vercel Deployment Guide

Hosting a Next.js application with Prisma and SQLite on Vercel requires some adjustments because Vercel's serverless environment does not support persistent local storage (like the standard `dev.db` file).

---

## Recommended Database Migration

Since SQLite files are wiped on every deployment or serverless function execution, you should migrate to a cloud-hosted database.

### Option 1: Supabase (PostgreSQL) - Highly Recommended
1. Create a free project at [Supabase](https://supabase.com).
2. Go to **Settings > Database** and copy the **Connection String (Transaction Pooler)**.
3. Update your `.env` file:
   ```env
   DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.[REF].supabase.co:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgres://postgres:[YOUR-PASSWORD]@db.[REF].supabase.co:5432/postgres"
   ```
4. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
     directUrl = env("DIRECT_URL")
   }
   ```

### Option 2: Turso (LibSQL/SQLite)
If you prefer to stay with SQLite, Turso is the perfect choice for serverless.
1. Install [Turso CLI](https://turso.tech).
2. Run `turso db create ieeecis-db`.
3. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```
   (Note: Use the `@prisma/adapter-libsql` for better performance on Vercel).

---

## Vercel Deployment Steps

### 1. Push Code to GitHub
Ensure your repository is uploaded to GitHub. 

### 2. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New > Project**.
3. Import your GitHub repository.

### 3. Configure Environment Variables
In the Vercel project settings, add the following metadata:
- `DATABASE_URL`: Your cloud database URL.
- `NEXTAUTH_SECRET`: A long random string (you can use `openssl rand -base64 32`).
- `NEXTAUTH_URL`: Your production URL (e.g., `https://your-site.vercel.app`).

### 4. Build Command Adjustment
If you are using Prisma, ensure your `package.json` build script includes client generation:
```json
"scripts": {
  "postinstall": "prisma generate",
  "build": "next build"
}
```

### 5. Finalize
Vercel will automatically detect the Next.js project and deploy it. After deployment, run your seed script once to populate the admin user:
```bash
npx prisma db seed
```
(Ensure your `package.json` has `prisma.seed` configured).
