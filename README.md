eBay Marketplace Clone (Modernized Edition)

A modern, full-stack e-commerce marketplace web application built with Next.js 13 App Router, Supabase Auth & Database, Prisma ORM, Tailwind CSS, and Stripe Payments.

This version has been upgraded with a sleek, modern UI design system inspired by contemporary SaaS platforms.

🚀 Features

Product Catalog & Dynamic Search: Instant live debounced product search, category browsing, and random recommendation engine.

Cart & Checkout Workflow: Persistent local cart, order calculation, delivery address tracking, and live Stripe card payment checkout.

User Authentication: Secure authentication via Supabase supporting both Email/Password and OAuth social sign-in.

Orders History: Comprehensive order management tracking Stripe payment intent IDs, delivery destinations, and timestamped shipping forecasts.

Modern Responsive UI/UX: Styled with Tailwind CSS, smooth card hover micro-interactions, dark mode support, and skeleton loaders.

✨ UI Modernization Guide

Integrate shadcn/ui (The Fastest Way to Modernize)
Since Tailwind CSS is already configured in your project, you can easily add shadcn/ui (built on Radix UI primitives). It provides fully customizable, accessible components styled with Tailwind that instantly give your app a Vercel- or Linear-style aesthetic.

Components to add: DropdownMenu (for user profiles and categories), Dialog/Sheet (for cart drawers and quick-view modals), Tabs (for switching between "Description", "Shipping", and "Seller Info"), and Skeleton loaders.

🛠 Tech Stack

Framework: Next.js (App Router, Server & Client Components)

Database: PostgreSQL hosted on Supabase

ORM: Prisma

Authentication: Supabase Auth

Payment Processing: Stripe

Styling: Tailwind CSS & Radix UI / shadcn/ui primitives

⚙️ Environment Variables

Create a .env file in the root directory and configure the following variables:

# Stripe
NEXT_PUBLIC_STRIPE_PK_KEY="your_stripe_publishable_key"
STRIPE_SK_KEY="your_stripe_secret_key"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_or_publishable_key"

# Database
DATABASE_URL="postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"


📦 Getting Started

1. Install Dependencies

npm install


2. Database Migration & Seeding

npx prisma generate
npx prisma db push
npx prisma db seed


3. Run Development Server

npm run dev


Open http://localhost:3000 to view the application.