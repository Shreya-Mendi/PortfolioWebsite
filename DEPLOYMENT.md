# Vercel Deployment Guide

This guide will help you deploy your Next.js portfolio to Vercel.

## Prerequisites

- GitHub account (your repository should be pushed to GitHub)
- Vercel account (sign up at https://vercel.com)

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

## Step 3: Add Environment Variables (Optional)

Your portfolio now uses JSON files for content, so most environment variables are optional. However, you may want to set:

### Optional Environment Variables:

1. **NEXT_PUBLIC_BASE_URL**
   - Value: Your Vercel deployment URL
   - Example: `https://your-site.vercel.app`
   - Note: Only needed if you want to use absolute URLs in your app

### How to Add Environment Variables in Vercel (if needed):

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add the variable:
   - Enter the variable name: `NEXT_PUBLIC_BASE_URL`
   - Enter the value: your Vercel URL
   - Select environments: **Production**, **Preview**, and **Development**
   - Click **Save**

## Step 4: Deploy

1. Click **"Deploy"**
2. Vercel will build and deploy your site (this takes 1-2 minutes)
3. Once complete, you'll get a production URL like `https://your-site.vercel.app`

## Step 5: Update Base URL (Optional)

After your first deployment (if you added the NEXT_PUBLIC_BASE_URL variable):

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

- Check the build logs in Vercel for specific errors
- Make sure `npm run build` works locally
- Ensure all JSON files in `/data` are valid JSON

### Data Not Loading

- Check that all JSON files in `/data` directory are properly formatted
- Verify the JSON structure matches the TypeScript types
- Make sure images referenced in JSON files exist in `/public/images`

### API Routes Not Working

- Verify all JSON files exist in the `/data` directory
- Check that file names match exactly: `pageInfo.json`, `experiences.json`, `projects.json`, `skills.json`, `socials.json`

## Local Development

For local development, create a `.env.local` file (optional):

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Never commit `.env.local` to Git (it's already in `.gitignore`).

## Updating Your Portfolio Content

Your portfolio content is now stored in JSON files in the `/data` directory. To update your portfolio:

1. **Edit the JSON files** in `/data`:
   - `pageInfo.json` - Your personal info, bio, contact details
   - `experiences.json` - Work experience and internships
   - `projects.json` - Your projects
   - `skills.json` - Technical skills
   - `socials.json` - Social media links

2. **Add images** to `/public/images`:
   - Create subdirectories: `/public/images/skills`, `/public/images/projects`, `/public/images/companies`
   - Update JSON files with correct image paths (e.g., `/images/skills/react.png`)

3. **Commit and push** your changes:
   ```bash
   git add data/ public/images/
   git commit -m "Update portfolio content"
   git push
   ```

4. **Vercel auto-deploys** - Your changes will be live in 1-2 minutes!

### Quick Update Example:

To add a new project, edit `data/projects.json`:

```json
{
  "id": "3",
  "title": "My New Project",
  "image": "/images/projects/new-project.png",
  "linkToBuild": "https://github.com/yourusername/new-project",
  "summary": "Description of your project",
  "technologies": [
    { "title": "React", "image": "/images/skills/react.png" }
  ]
}
```

Then commit and push - Vercel handles the rest!

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Vercel](https://vercel.com/docs/environment-variables)
