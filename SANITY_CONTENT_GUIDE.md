# Sanity CMS Content Guide for Shreya Mendi's Portfolio

This guide provides all the content needed to update your Sanity CMS with your resume information.

## Prerequisites

1. Start Sanity Studio:
   ```bash
   cd sanity
   sanity start
   ```
2. Open http://localhost:3333 (or your Sanity Studio URL)
3. Login with your Sanity credentials

## 1. Page Info (Personal Information)

Navigate to **PageInfo** in Sanity Studio and update:

### Fields:
- **Name**: `Shreya Mendi`
- **Role**: `Machine Learning Engineer | AI Product Engineer`
- **Email**: `mendishreya@gmail.com`
- **Phone Number**: `+1(919)-608-0547`
- **Address**: `Durham, NC`
- **Background Information**:
  ```
  Focused on building intelligent systems that create real-world impact. Skilled in developing and optimizing models, analyzing data, and collaborating across teams. I enjoy turning research ideas into practical solutions and scalable products. Bring a strong problem-solving mindset to roles such as Machine Learning Engineer, Deep Learning Engineer, Applied Scientist, or AI Product Engineer.
  ```
- **Hero Image**: Upload a professional headshot for the landing page
- **Profile Pic**: Upload a profile photo for the About section

### Social Links:
Create the following social entries and reference them in PageInfo:
- **LinkedIn**: `https://linkedin.com/in/shreya-mendi`
- **Email**: `mailto:mendishreya@gmail.com`
- **Duke Email**: `mailto:sm1179@duke.edu`
- **GitHub**: (Add if you have one)

---

## 2. Work Experience

Create **2 Experience** documents:

### Experience 1: Assetmantle Pvt Ltd
- **Job Title**: `DevOps Engineer`
- **Company**: `Assetmantle Pvt Ltd`
- **Date Started**: `2023-09-01`
- **Date Ended**: `2025-05-01`
- **Is Currently Working Here**: `false`
- **Company Image**: Upload Assetmantle logo
- **Technologies**: Reference these skills: AWS, Kubernetes, Hetzner, CI/CD
- **Points**:
  - `Strategically managed AWS and Hetzner cloud infrastructure to reduce operational costs by 38% and enhanced security.`
  - `Streamlined CI/CD pipelines with Kubernetes which increased deployment frequency and reduced time-to-market.`

### Experience 2: Hewlett Packard Enterprise Globalsoft Pvt Ltd
- **Job Title**: `Software Development Intern`
- **Company**: `Hewlett Packard Enterprise Globalsoft Pvt Ltd`
- **Date Started**: `2023-01-01`
- **Date Ended**: `2023-07-01`
- **Is Currently Working Here**: `false`
- **Company Image**: Upload HPE logo
- **Technologies**: Reference these skills: Docker, Linux, Python, Jenkins, Grafana, Prometheus
- **Points**:
  - `Built Dockerized services on Linux, automating CI/CD workflows with Jenkins, shell scripting, and cloud computing platforms.`
  - `Integrated REST APIs in Python for monitoring using Grafana & Prometheus improving the overall stability of the product.`

---

## 3. Projects

Create **4 Project** documents:

### Project 1: Inflationship - Inflation Prediction
- **Title**: `Inflationship - Inflation Prediction`
- **Summary**: `Built a SARIMAX inflation forecasting pipeline combining port traffic indicators with CPI data, reducing forecast error to 0.67–1.69% MAPE across major CPI categories. Validated model stability via 5-fold rolling cross-validation, achieving reliable predictive lift over CPI-only baselines.`
- **Image**: Upload a relevant screenshot or diagram
- **Technologies**: Python, Machine Learning, SARIMAX, Data Analytics
- **Link To Build**: (Add GitHub repo link if available)

### Project 2: Alba
- **Title**: `Alba - AI Carbon Footprint Tracker`
- **Summary**: `Built a real-time, privacy-first Chrome extension estimating energy, carbon, and water footprint for AI prompts using model metadata and GitHub Models API. Implemented live footprint labels, heuristic + AI prompt optimization, and a client-side dashboard with daily impact summaries.`
- **Image**: Upload a screenshot of the extension
- **Technologies**: JavaScript, Chrome Extensions, AI, GitHub API
- **Link To Build**: (Add Chrome Web Store or GitHub link)

### Project 3: AI AUDIT
- **Title**: `AI AUDIT - EU AI Act Compliance`
- **Summary**: `Built an EU AI Act compliance assessment system using TF-IDF + Logistic Regression, rule-based article evaluation (Articles 5, 6, 9, 10, 14), and automated remediation planning. Deployed full-stack ML workflow with MLflow, FastAPI, Docker, and Streamlit on Google Cloud Run, enabling explainable risk scoring and documentation audits.`
- **Image**: Upload a screenshot of the system
- **Technologies**: Python, TF-IDF, Machine Learning, MLflow, FastAPI, Docker, Streamlit, Google Cloud
- **Link To Build**: (Add demo or GitHub link)

### Project 4: Semantic Jury
- **Title**: `Semantic Jury - Legal Document Search`
- **Summary**: `Developed a semantic search engine for legal documents using embedding-based retrieval and citation-link modeling to surface semantically similar case law and statutes. Implemented vector search pipelines with passage ranking to support explainable legal research and faster knowledge discovery.`
- **Image**: Upload a screenshot
- **Technologies**: Python, NLP, Vector Search, Machine Learning, Embeddings
- **Link To Build**: (Add GitHub repo link if available)

---

## 4. Skills

Create **Skill** documents for each technology. Here are the recommended skills with suggested progress levels:

### Core Programming & Data
- **Python** - Progress: 95%
- **SQL** - Progress: 85%

### Cloud & Infrastructure
- **AWS** - Progress: 90%
- **Docker** - Progress: 85%
- **Kubernetes** - Progress: 80%

### DevOps & Tools
- **GitHub** - Progress: 90%
- **Jenkins** - Progress: 75%
- **Grafana** - Progress: 70%
- **Prometheus** - Progress: 70%

### Machine Learning & AI
- **Machine Learning** - Progress: 90%
- **TensorFlow** - Progress: 85%
- **Scikit-learn** - Progress: 85%
- **MLflow** - Progress: 80%
- **FastAPI** - Progress: 85%

### Development
- **Linux** - Progress: 85%
- **Shell Scripting** - Progress: 80%
- **REST APIs** - Progress: 85%
- **Streamlit** - Progress: 75%

### Soft Skills
- **Strong Communication** - Progress: 95%
- **Adaptability** - Progress: 90%
- **Teamwork and Collaboration** - Progress: 95%

**Note**: For each skill, upload an appropriate icon/logo image.

---

## 5. Education Section (Optional Enhancement)

If you want to add an education section, you would need to:
1. Create a new schema file: `/sanity/schemas/education.js`
2. Add it to the schema.js file
3. Create a new component in the Next.js app

For now, you can mention your education in the **Background Information** or create dedicated project entries for significant academic work.

---

## 6. Additional Recommendations

### LinkedIn and GitHub Integration
Make sure to:
- Add your LinkedIn profile URL to the social links
- Add your GitHub profile if you have one
- Link project repositories to their GitHub pages

### Images
For best results:
- **Hero Image**: Professional headshot, 500x500px minimum
- **Profile Pic**: Same or different professional photo
- **Company Logos**: Official logos from company websites
- **Project Screenshots**: Clear, high-quality screenshots showing the project UI
- **Skill Icons**: Use official technology logos from their respective websites

### Content Tips
1. Keep bullet points concise and impact-focused
2. Include metrics where possible (like "38% cost reduction")
3. Use action verbs (Built, Developed, Implemented, Streamlined)
4. Ensure all dates are accurate
5. Test all links before publishing

---

## 7. After Updating Sanity

Once you've updated all content in Sanity:

1. **Verify the changes**:
   - Navigate to your portfolio website
   - Check all sections load correctly
   - Verify images display properly
   - Test all links

2. **Deploy to production**:
   ```bash
   # Deploy Sanity changes
   cd sanity
   sanity deploy

   # The Next.js site will auto-update via ISR (10 second revalidation)
   # Or trigger a rebuild if needed
   ```

3. **Share your portfolio**:
   - Update your resume with the portfolio link
   - Share on LinkedIn
   - Add to your email signature

---

## Need Help?

- Sanity Documentation: https://www.sanity.io/docs
- Next.js Documentation: https://nextjs.org/docs
- Contact: mendishreya@gmail.com
