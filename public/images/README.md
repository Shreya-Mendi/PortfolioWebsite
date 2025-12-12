# Images Directory

This directory contains all images used in your portfolio.

## Structure

```
/images
  ├── hero-image.jpg        # Homepage hero/banner image
  ├── profile.jpg           # Your profile picture
  ├── skills/              # Skill/technology icons
  │   ├── react.png
  │   ├── typescript.png
  │   └── ...
  ├── projects/            # Project screenshots
  │   ├── portfolio.png
  │   ├── task-app.png
  │   └── ...
  └── companies/           # Company/organization logos
      ├── company1.png
      └── ...
```

## Image Guidelines

### Hero Image
- Size: 1920x1080px (or similar 16:9 ratio)
- Format: JPG or PNG
- Optimize for web (< 500KB)

### Profile Picture
- Size: 500x500px (square)
- Format: JPG or PNG
- Optimize for web (< 200KB)

### Skill Icons
- Size: 128x128px (square)
- Format: PNG (with transparency)
- Free icons: https://devicon.dev

### Project Screenshots
- Size: 1200x800px (or similar 3:2 ratio)
- Format: JPG or PNG
- Optimize for web (< 500KB)

### Company Logos
- Size: 400x400px (square)
- Format: PNG (with transparency)
- Optimize for web (< 100KB)

## Optimizing Images

Use these free tools to optimize your images:
- [TinyPNG](https://tinypng.com) - Compress PNG and JPG
- [Squoosh](https://squoosh.app) - Advanced image optimization

## Adding New Images

1. Optimize your image using one of the tools above
2. Save it to the appropriate folder
3. Update the corresponding JSON file in `/data`
4. Commit and push to deploy

Example:
```bash
# Add a new skill icon
cp react-logo.png public/images/skills/react.png

# Update data/skills.json to reference it
# "image": "/images/skills/react.png"

# Commit and push
git add public/images/skills/react.png data/skills.json
git commit -m "Add React skill icon"
git push
```

## Where to Find Free Images

### Skill Icons
- [Devicon](https://devicon.dev) - Technology logos
- [Simple Icons](https://simpleicons.org) - Brand icons
- [Icons8](https://icons8.com) - Free icons

### Stock Photos (for hero images)
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos

### Profile Picture
- Use your own professional photo
- Or create an avatar at [Avataaars](https://getavataaars.com)
