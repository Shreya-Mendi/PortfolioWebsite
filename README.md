# Mitch's Portfolio Website

![alt text](https://cdn.sanity.io/images/xbn4zmfs/production/3de98614552f63c0c1446910ce241b3a67dfb0ef-2268x748.png)

I wanted to learn more about Next JS, Typescript, Framer Motion and Tailwind and so I used my portfolio website as an opportunity to do this. The website was originally inspired by a YouTube video by Sonny Sangha, and over time has morphed into something I am quite proud of. The portfolio uses JSON files for content management, making it easy to update without any external dependencies.

Want to see it in action? You can find the website [here](https://mitchellsparrow.com)!

# Next JS:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the code

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Deployment:

## Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Quick Start:
1. Push your code to GitHub
2. Sign in to [Vercel](https://vercel.com) with GitHub
3. Import your repository
4. Add environment variables (see DEPLOYMENT.md)
5. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Content Management:

Your portfolio content is managed through JSON files in the `/data` directory. This makes it:
- ✅ **100% Free** - No external CMS needed
- ✅ **Easy to Update** - Just edit JSON files
- ✅ **Version Controlled** - All changes tracked in Git
- ✅ **Auto-Deploy** - Push to GitHub = Live in 2 minutes

## Quick Content Update:

1. Edit files in `/data/` (pageInfo, experiences, projects, skills, socials)
2. Add images to `/public/images/`
3. Commit and push to GitHub
4. Vercel auto-deploys your changes!

**For detailed instructions, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**
