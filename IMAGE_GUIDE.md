# Image Guide for Your Portfolio

This guide will show you exactly where to add your profile pictures and other personal images.

## Quick Overview

All your personal images are stored as URLs in JSON files located in the `/data` folder. To add your own images, you'll need to:

1. Upload your images to an image hosting service (options below)
2. Copy the image URL
3. Replace the placeholder URL in the appropriate JSON file

## Where Are Your Images?

### 1. Profile Picture (The main photo shown in About section)

**Location:** `/data/pageInfo.json`

**Current line:**
```json
"profilePic": "https://via.placeholder.com/500x500/68B2A0/FFFFFF?text=SM"
```

**How to update:**
- Upload a square photo of yourself (500x500px recommended)
- Replace the URL with your image URL
- Example:
```json
"profilePic": "https://i.imgur.com/your-image-id.jpg"
```

### 2. Hero/Background Image (Large banner on homepage)

**Location:** `/data/pageInfo.json`

**Current line:**
```json
"heroImage": "https://via.placeholder.com/1920x1080/68B2A0/FFFFFF?text=Shreya+Mendi"
```

**How to update:**
- Upload a wide landscape photo (1920x1080px recommended)
- This could be a professional photo, a scenic background, or your motorcycle!
- Replace the URL with your image URL

### 3. Project Images (Screenshots of your projects)

**Location:** `/data/projects.json`

**Current lines:**
```json
"image": "https://via.placeholder.com/800x600/68B2A0/FFFFFF?text=Inflationship"
```

**How to update for each project:**
- Take a screenshot of your project (800x600px recommended)
- Upload the screenshot
- Replace the placeholder URL for each project
- You have 4 projects, so you'll need 4 images

### 4. Company Logos (For work experience)

**Location:** `/data/experiences.json`

**Current lines:**
```json
"companyImage": "https://via.placeholder.com/200x200/68B2A0/FFFFFF?text=Assetmantle"
```

**How to update:**
- Find the official logo of each company (usually from their website)
- Upload or use direct links to company logos
- Replace the placeholder URLs
- You have 2 experiences, so you'll need 2 company logos

## Image Hosting Options

You have several options for hosting your images:

### Option 1: GitHub Repository (Recommended for students - FREE)

**Pros:** Free, version controlled, no external dependencies
**Cons:** Images are public

**Steps:**
1. Create an `images` folder in your portfolio repository
2. Add your images to this folder
3. Commit and push to GitHub
4. Use the raw GitHub URL format:
   ```
   https://raw.githubusercontent.com/YOUR-USERNAME/PortfolioWebsite/main/images/profile.jpg
   ```

**Example folder structure:**
```
PortfolioWebsite/
├── images/
│   ├── profile.jpg
│   ├── hero-background.jpg
│   ├── inflationship-screenshot.png
│   ├── alba-screenshot.png
│   ├── ai-audit-screenshot.png
│   ├── semantic-jury-screenshot.png
│   ├── assetmantle-logo.png
│   └── hpe-logo.png
├── data/
├── components/
...
```

### Option 2: Imgur (Easy & Free)

**Pros:** Easy to use, free, fast
**Cons:** Images are public, imgur links can be long

**Steps:**
1. Go to https://imgur.com/upload
2. Upload your image
3. Right-click on the image and select "Copy image address"
4. Use that URL in your JSON files

### Option 3: Cloudinary (Professional - FREE tier available)

**Pros:** Professional CDN, image optimization, transformations
**Cons:** Requires account setup

**Steps:**
1. Sign up at https://cloudinary.com (free tier: 25GB storage, 25GB bandwidth/month)
2. Upload images to your media library
3. Copy the image URL
4. Use in your JSON files

### Option 4: Next.js Public Folder (Simple but not recommended for production)

**Pros:** Simple, local to project
**Cons:** Images are served from your app server, not a CDN

**Steps:**
1. Create a `public/images` folder
2. Add your images there
3. Reference them as `/images/profile.jpg` in JSON files

## Step-by-Step: Adding Your Profile Picture (GitHub Method)

Let's walk through adding your profile picture using GitHub:

1. **Prepare your image:**
   - Choose a professional photo of yourself
   - Resize to 500x500px (use any photo editor or online tool)
   - Save as `profile.jpg`

2. **Create images folder:**
   ```bash
   mkdir images
   ```

3. **Add your image:**
   - Copy `profile.jpg` to the `images` folder

4. **Commit and push:**
   ```bash
   git add images/profile.jpg
   git commit -m "Add profile picture"
   git push
   ```

5. **Get the raw URL:**
   - Go to your GitHub repository
   - Navigate to `images/profile.jpg`
   - Click "Download" or right-click and copy the URL
   - The URL format will be:
     ```
     https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/profile.jpg
     ```

6. **Update pageInfo.json:**
   ```json
   {
     "profilePic": "https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/profile.jpg"
   }
   ```

7. **Commit the JSON change:**
   ```bash
   git add data/pageInfo.json
   git commit -m "Update profile picture URL"
   git push
   ```

## Complete Example: All Images Using GitHub

Here's what your JSON files would look like after adding all images to GitHub:

**data/pageInfo.json:**
```json
{
  "name": "Shreya Mendi",
  "role": "MEng AI Student @ Duke University",
  "heroImage": "https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/hero-background.jpg",
  "profilePic": "https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/profile.jpg",
  "phoneNumber": "+1 (919) 608-0547",
  "email": "mendishreya@gmail.com",
  "address": "Durham, NC"
}
```

**data/projects.json** (first project):
```json
{
  "id": "1",
  "title": "Inflationship - Inflation Prediction",
  "image": "https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/inflationship.png",
  "linkToBuild": "https://github.com/Shreya-Mendi/inflationship",
  ...
}
```

**data/experiences.json** (first experience):
```json
{
  "id": "1",
  "jobTitle": "DevOps Engineer",
  "companyImage": "https://raw.githubusercontent.com/Shreya-Mendi/PortfolioWebsite/main/images/assetmantle-logo.png",
  "company": "Assetmantle Pvt Ltd",
  ...
}
```

## Image Specifications

For best results, use these dimensions:

| Image Type | Recommended Size | Format |
|------------|------------------|--------|
| Profile Picture | 500x500px | JPG or PNG |
| Hero/Background | 1920x1080px | JPG |
| Project Screenshots | 800x600px | PNG (for UI) or JPG |
| Company Logos | 200x200px | PNG (transparent background) |

## Tips

1. **Compress your images** before uploading to reduce file size (use tinypng.com)
2. **Use descriptive filenames** like `profile-shreya.jpg` instead of `IMG_1234.jpg`
3. **Keep aspect ratios** - don't distort images to fit exact dimensions
4. **Test locally first** - run `npm run dev` after updating URLs to see how they look
5. **Use HTTPS URLs** - Always use secure URLs (https://) not http://

## Technology Icons

Note: Technology icons (Python, Docker, AWS, etc.) are already using CDN URLs from devicon.dev and don't need to be changed. These are found in:
- `data/skills.json`
- `data/projects.json` (technologies array)
- `data/experiences.json` (technologies array)

You can browse more icons at: https://devicon.dev/

## Common Issues

**Image not showing:**
- Check if the URL is correct and accessible in your browser
- Make sure the image URL starts with `https://`
- Verify the image file exists and is public

**Image is distorted:**
- Check if you're using the right aspect ratio
- Don't force square images into landscape spaces

**Image loads slowly:**
- Compress your images (aim for under 500KB per image)
- Use JPG for photos, PNG for graphics/logos

## Need Help?

If you run into issues:
1. Test the image URL in your browser - can you see the image?
2. Check the browser console for errors (F12 in Chrome)
3. Verify the JSON syntax is correct (use a JSON validator)
4. Make sure you committed and pushed your changes

---

**Quick checklist for going live:**
- [ ] Profile picture added to pageInfo.json
- [ ] Hero background image added to pageInfo.json
- [ ] All 4 project screenshots added to projects.json
- [ ] Both company logos added to experiences.json
- [ ] All images load correctly in `npm run dev`
- [ ] Changes committed and pushed to GitHub
- [ ] Vercel deployment updated
