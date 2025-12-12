# Content Update Guide

This guide explains how to update your portfolio content using JSON files.

## Overview

Your portfolio uses JSON files instead of a CMS. This means:
- ✅ 100% free (no external services)
- ✅ Version controlled (all changes tracked in Git)
- ✅ Easy to edit (just edit JSON files)
- ✅ Auto-deploys (push to GitHub = live in 2 minutes)

## File Structure

```
/data
  ├── pageInfo.json      # Your personal information
  ├── experiences.json   # Work experience & internships
  ├── projects.json      # Your projects
  ├── skills.json        # Technical skills
  └── socials.json       # Social media links

/public/images
  ├── hero-image.jpg     # Homepage hero image
  ├── profile.jpg        # Profile picture
  ├── skills/           # Skill icons
  ├── projects/         # Project screenshots
  └── companies/        # Company logos
```

## Editing Content

### 1. Personal Information (`pageInfo.json`)

```json
{
  "name": "Your Name",
  "role": "Software Engineering Student",
  "heroImage": "/images/hero-image.jpg",
  "backgroundInformation": "Your bio here...",
  "profilePic": "/images/profile.jpg",
  "phoneNumber": "+1 (555) 123-4567",
  "email": "your.email@example.com",
  "address": "Your City, State"
}
```

**To update:** Just edit the values and save.

### 2. Work Experience (`experiences.json`)

```json
[
  {
    "id": "1",
    "jobTitle": "Software Engineering Intern",
    "companyImage": "/images/companies/company.png",
    "company": "Company Name",
    "dateStarted": "2024-06-01",
    "dateEnded": "2024-08-31",
    "isCurrentlyWorkingHere": false,
    "technologies": [
      { "title": "React", "image": "/images/skills/react.png" }
    ],
    "points": [
      "What you did in this role",
      "Another achievement",
      "Another responsibility"
    ]
  }
]
```

**To add a new experience:**
1. Copy an existing entry
2. Change the `id` to a unique number
3. Update all fields
4. Add it to the array

**For current positions:** Set `isCurrentlyWorkingHere: true` and `dateEnded: null`

### 3. Projects (`projects.json`)

```json
[
  {
    "id": "1",
    "title": "Project Name",
    "image": "/images/projects/project.png",
    "linkToBuild": "https://github.com/yourusername/project",
    "summary": "Brief description of your project and what it does",
    "technologies": [
      { "title": "Next.js", "image": "/images/skills/nextjs.png" },
      { "title": "TypeScript", "image": "/images/skills/typescript.png" }
    ]
  }
]
```

**Perfect for students:** Add class projects, personal projects, hackathon projects!

### 4. Skills (`skills.json`)

```json
[
  {
    "id": "1",
    "title": "React",
    "image": "/images/skills/react.png",
    "progress": 85
  }
]
```

**Progress bar:** Use 0-100 to show proficiency level.

### 5. Social Links (`socials.json`)

```json
[
  {
    "id": "1",
    "title": "GitHub",
    "url": "https://github.com/yourusername"
  },
  {
    "id": "2",
    "title": "LinkedIn",
    "url": "https://linkedin.com/in/yourprofile"
  }
]
```

## Adding Images

### 1. Prepare your images
- Use PNG or JPG format
- Optimize for web (use tools like TinyPNG)
- Recommended sizes:
  - Hero image: 1920x1080px
  - Profile pic: 500x500px
  - Skill icons: 128x128px
  - Project screenshots: 1200x800px
  - Company logos: 400x400px

### 2. Add to the correct folder
```bash
# Add a skill icon
cp react-icon.png public/images/skills/react.png

# Add a project screenshot
cp project-demo.png public/images/projects/my-project.png

# Add a company logo
cp company-logo.png public/images/companies/acme-corp.png
```

### 3. Reference in JSON
Use paths starting with `/images/`:
```json
"image": "/images/skills/react.png"
```

## Publishing Changes

### Method 1: Using Git Command Line

```bash
# 1. Check what changed
git status

# 2. Add your changes
git add data/ public/images/

# 3. Commit with a message
git commit -m "Update portfolio: add new project"

# 4. Push to GitHub
git push

# 5. Wait 1-2 minutes - your site is live!
```

### Method 2: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to the file you want to edit (e.g., `data/projects.json`)
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Your site updates automatically!

### Method 3: Using VS Code (easiest for students)

1. Open your portfolio folder in VS Code
2. Edit JSON files
3. Use the Source Control panel (Ctrl+Shift+G)
4. Enter a commit message
5. Click "Commit" then "Sync Changes"
6. Done!

## Common Tasks

### Add a New Project (Perfect after finishing assignments!)

1. Take a screenshot of your project → save to `public/images/projects/`
2. Open `data/projects.json`
3. Copy an existing project entry
4. Update the `id`, `title`, `image`, `linkToBuild`, `summary`, and `technologies`
5. Commit and push!

### Update Your Skills (As you learn new technologies)

1. Download skill icon → save to `public/images/skills/`
2. Open `data/skills.json`
3. Add new entry with unique `id`
4. Set `progress` based on your proficiency
5. Commit and push!

### Add an Internship/Job

1. Add company logo to `public/images/companies/`
2. Open `data/experiences.json`
3. Add new entry at the beginning of the array (most recent first)
4. Fill in all details
5. Commit and push!

## Tips for Students

### Keep it updated!
- After every project → add to portfolio
- Learn a new skill → add to skills list
- Finish an internship → add to experiences

### Use meaningful commit messages
```bash
# Good
git commit -m "Add machine learning course project"
git commit -m "Update skills: added Docker and Kubernetes"

# Bad
git commit -m "update"
git commit -m "changes"
```

### JSON Syntax Tips

- Use double quotes `"` not single quotes `'`
- Don't forget commas between items
- Last item in a list has NO comma
- Validate JSON at https://jsonlint.com if unsure

### Example: Semester Update

```bash
# End of semester - update everything!
# 1. Add new class projects
# 2. Update skills learned in courses
# 3. Add any internship/TA experience
# 4. Update profile pic if needed

git add data/ public/images/
git commit -m "End of Fall 2024 semester update"
git push
```

## Validation

Before pushing, validate your JSON:

### Option 1: Online Validator
1. Copy your JSON file content
2. Go to https://jsonlint.com
3. Paste and click "Validate JSON"
4. Fix any errors shown

### Option 2: VS Code (built-in)
VS Code shows JSON errors with red underlines. Hover over them to see what's wrong.

### Option 3: Build Locally
```bash
npm run build
```

If the build succeeds, your JSON is valid!

## Troubleshooting

### "Unexpected token" error
- Missing or extra comma
- Missing quote mark
- Use https://jsonlint.com to find the exact issue

### Image not showing
- Check the path starts with `/images/` not `images/`
- Verify the file exists in `public/images/`
- Check file extension matches (`.png` vs `.jpg`)

### Build failing on Vercel
- Check JSON syntax at https://jsonlint.com
- Make sure all referenced images exist
- Check the Vercel deployment logs for details

## Resources

- [JSON Syntax](https://www.json.org)
- [JSON Validator](https://jsonlint.com)
- [TinyPNG Image Optimizer](https://tinypng.com)
- [Free Skill Icons](https://devicon.dev)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

## Need Help?

- JSON syntax: https://www.json.org
- Git help: https://git-scm.com/docs
- Vercel deployment: See DEPLOYMENT.md
