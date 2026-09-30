# 🇸🇬 SG Job Matchmaker & AI Agent Console

> **Next-Generation AI ATS Resume Matcher, Web Job Discovery Engine, and Hiring Simulator tailored for the Singapore Tech Ecosystem.**
![Status](https://img.shields.io/badge/Status-Active%20Release-00f2fe?style=for-the-badge)
![Singapore](https://img.shields.io/badge/Market-Singapore%20Tech-ff2a5f?style=for-the-badge)
![Localhost](https://img.shields.io/badge/Localhost-Port%208080-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-d832ff?style=for-the-badge)
---
## 📌 Overview
**SG Job Matchmaker** is an interactive, browser-based career intelligence platform designed specifically for job seekers and hiring professionals in Singapore. It bridges the gap between applicant resumes and employer requirements by combining **client-side PDF parsing**, **live Singapore job market discovery** (MyCareersFuture, LinkedIn SG, Careers@Gov), **multi-factor ATS compatibility scoring**, and an **end-to-end 5-step recruitment simulator**.
The application operates as a standalone web app with zero complex build tooling or external framework dependencies, and runs seamlessly on **`http://localhost:8080`**.
---
## ✨ Key Features
### 1. 🎯 Dual Matching Modalities
* **Preset Matcher Mode**:
  * Explore pre-configured candidate personas (*Kai Chen*, *Siti Nurhaliza*, *Rahul Sharma*).
  * Watch the **Dynamic Portfolio Resume** automatically reorganize and highlight relevant project achievements in real-time as different jobs are selected.
  * Filter opportunities by MRT transit line (*EWL, NSL, CCL, DTL*), industry domain (*Tech, Data, Marketing*), or search keywords.
* **Custom Sandbox Matcher**:
  * Paste any custom job description text or URL into **Box 1**.
  * Paste resume text or attach a `.pdf` / `.txt` resume file into **Box 2**.
  * Instantly analyze compatibility, score keyword overlap, and identify skill gaps.
### 2. 📄 Client-Side PDF Resume Parsing & Visual Attachment
* **Drag-and-Drop or File Upload**: Drop any `.pdf` or `.txt` resume file directly onto the dropzone.
* **Visual File Card**: Displays a sleek, professional attachment badge with the file name and a one-click detach/remove button.
* **Client-Side Extraction**: Powered by **PDF.js** with dynamic Web Worker integration (`pdf.worker.min.js`), extracting resume text directly inside the browser with zero cloud server upload required (privacy-first).
### 3. 🌐 Live Web Job Discovery Engine
* **Automated Skill Extraction**: Reads your uploaded resume to extract verified competencies (*Python, SQL, Machine Learning, AI, Deployment, HTML/CSS, Agile, Java, AWS, etc.*).
* **Singapore Portal Integration**: Matches your profile against curated, actively recruiting roles from:
  * 🏢 **MyCareersFuture Singapore** (e.g. *Grab, OCBC Bank, Shopee, ITCAN*)
  * 💼 **LinkedIn Singapore** (e.g. *TikTok / ByteDance, DBS Bank, McKinsey QuantumBlack*)
  * 🛡️ **Careers@Gov / Civic Tech** (e.g. *GovTech Singapore, Synapxe HealthTech, NCS Group*)
* **Real-Time Active Links**: External links are dynamically generated with active hiring filters (`f_TPR=r2592000` past 30 days on LinkedIn; `sortBy=new_posting_date` on MyCareersFuture) to ensure **zero expired "No longer accepting applications" notices**.
* **Instant Auto-Load**: Click **"Auto-Load & Rank Match"** on any web card to immediately populate the job description and trigger a full match evaluation.
