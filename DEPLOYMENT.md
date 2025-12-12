# Vercel Deployment Guide

This guide will help you deploy your Next.js portfolio to Vercel.

## Prerequisites

- GitHub account (your repository should be pushed to GitHub)
- Vercel account (sign up at https://vercel.com)
- Sanity project ID (from your Sanity dashboard)

## Step 1: Connect Your Repository to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your portfolio repository from the list
5. Click **"Import"**

## Step 2: Configure Your Project

Vercel will auto-detect that this is a Next.js project. You can keep the default settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

## Step 3: Add Environment Variables

Before deploying, add these environment variables in the Vercel dashboard:

### Required Environment Variables:

1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
   - Value: Your Sanity project ID (find it in your Sanity dashboard at https://sanity.io/manage)
   - Example: `xbn4zmfs`

2. **NEXT_PUBLIC_SANITY_DATASET**
   - Value: `production`
   - This is your Sanity dataset name

3. **NEXT_PUBLIC_BASE_URL**
   - Value: Your Vercel deployment URL
   - Example: `https://your-site.vercel.app`
   - Note: You can set this after first deployment, then redeploy

### How to Add Environment Variables in Vercel:

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add each variable:
   - Enter the variable name (e.g., `NEXT_PUBLIC_SANITY_PROJECT_ID`)
   - Enter the value
   - Select environments: **Production**, **Preview**, and **Development**
   - Click **Save**

## Step 4: Deploy

1. Click **"Deploy"**
2. Vercel will build and deploy your site (this takes 1-2 minutes)
3. Once complete, you'll get a production URL like `https://your-site.vercel.app`

## Step 5: Update Base URL (Important!)

After your first deployment:

1. Copy your production URL (e.g., `https://your-site.vercel.app`)
2. Go to **Settings** → **Environment Variables**
3. Update **NEXT_PUBLIC_BASE_URL** to your production URL
4. Go to **Deployments** and click **"Redeploy"** on the latest deployment

## Step 6: Set Up Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `mitchellsparrow.com`)
3. Follow Vercel's instructions to configure DNS records
4. Update **NEXT_PUBLIC_BASE_URL** to your custom domain
5. Redeploy

## Automatic Deployments

Once set up, Vercel will automatically deploy:

- **Production**: Every push to your main branch
- **Preview**: Every push to other branches or pull requests

## Troubleshooting

### Build Fails

- Check that all environment variables are set correctly
- Check the build logs in Vercel for specific errors
- Make sure `npm run build` works locally

### Sanity Data Not Loading

- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your Sanity project
- Verify `NEXT_PUBLIC_SANITY_DATASET` is set to `production`
- Check your Sanity CORS settings allow your Vercel domain

### API Routes Not Working

- Verify `NEXT_PUBLIC_BASE_URL` is set to your actual deployment URL
- Make sure it includes `https://` and does NOT have a trailing slash

## Finding Your Sanity Project ID

1. Go to https://sanity.io/manage
2. Select your project
3. Go to **Settings** → **API**
4. Copy your **Project ID**

## Local Development

For local development, create a `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Never commit `.env.local` to Git (it's already in `.gitignore`).

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Vercel](https://vercel.com/docs/environment-variables)
