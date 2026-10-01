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

### 4. 📊 Contextual Match Analysis
* **Visual Fit Gauge**: Animated SVG radial ring calculating match percentage (0% to 100%).
* **Skill Badges**: High-contrast tags highlighting **Matched Competencies** (cyan checkmarks) vs. **Missing Skill Gaps** (red crosses).
* **Contextual Action Button**: The primary action button at the foot of the analysis card adapts dynamically based on compatibility:
  * **$\ge 75\%$**: `Apply via Official Portal ✈️` (High confidence fit).
  * **$50\% - 74\%$**: `Tailor Application & Bridge Gaps ✨` (Moderate fit with recommendations).
  * **$< 50\%$**: `Review Rejection Risks & Optimize ⚠️` (Flags critical qualification gaps).

### 5. 🚀 5-Step Beta Application Simulator
Clicking the action button launches a slide-out drawer simulating the corporate hiring lifecycle:
1. **Step 1: AI Cover Letter Generator** — Generates a tailored cover letter referencing your matched technical skills.
2. **Step 2: Corporate ATS Resume Scan** — Simulates an enterprise keyword scanner scoring candidate viability.
3. **Step 3: Technical Skills Assessment** — An interactive 2-question technical quiz addressing both strengths and gaps.
4. **Step 4: Interactive Mock Interview** — A situational interview question with multiple answer choices and real-time response feedback.
5. **Step 5: Final Verdict & Compensation Package** — Displays the hiring decision along with a localized Singapore offer package (Base Monthly Salary, CPF, AWS 13th-month bonus, and learning stipends).

### 6. 🇸🇬 Singapore Localization Highlights
* **MRT Proximity Indicators**: Displays distance and nearest MRT stations (e.g., *One-North CCL, Tanjong Pagar EWL, Downtown DTL*).
* **SkillsFuture Framework Alignment**: Provides targeted course recommendations to bridge identified skill gaps.
* **Live SG Market Ticker**: Streaming header bar displaying salary averages, in-demand technologies, and civic tech hiring drives.

### 7. 💻 AI Terminal Console
* Embedded developer-style terminal logging system events, parsing steps, and crawl notices in real-time.
* Consolidated 24-hour timestamp formatting (`[HH:mm:ss] [SYS] ...`) with zero redundant outputs.

---

## 📂 Project Structure

```text
sg-job-matchmaker/
├── index.html           # Main UI structure (Bento grid layout & modal components)
├── styles.css           # Cyberpunk/dark-mode styling, glassmorphism, animations
├── app.js               # Core application logic, matching algorithms, event handlers
├── server.py            # Python HTTP localhost server with CORS and auto-browser launch
├── start-server.ps1     # PowerShell launcher script with automated runtime detection
├── start-server.bat     # Windows batch script for double-click launching
├── pdf.min.js           # Client-side PDF.js rendering and parsing engine
├── pdf.worker.min.js    # Multi-threaded Web Worker for PDF text extraction
└── README.md            # Project documentation and user guide
```

---

## 🚀 Getting Started & Localhost Activation

The project is pre-configured to run on **`http://localhost:8080`**. You can launch the site using any of the following methods:

### Method 1: PowerShell (Recommended)
Open PowerShell or Windows Terminal, navigate to the folder, and run:
```powershell
cd C:\Users\Edmund\.gemini\antigravity\scratch\sg-job-matchmaker
.\start-server.ps1
```
*Tip: You can specify a custom port if 8080 is in use:*
```powershell
.\start-server.ps1 -Port 3000
```

### Method 2: One-Click Launch (File Explorer / CMD)
* In Windows File Explorer, open the folder and **double-click** `start-server.bat`.
* Or from Windows Command Prompt:
  ```cmd
  cd C:\Users\Edmund\.gemini\antigravity\scratch\sg-job-matchmaker
  start-server.bat
  ```

### Method 3: Python Command Line
If Python is installed on your system:
```powershell
python server.py
```
*(Or specify the full path if Python is not in your environment variables:)*
```powershell
& "C:\Users\Edmund\AppData\Local\Python\bin\python.exe" server.py
```

### To Terminate the Server
In the active terminal window, press **`Ctrl + C`**.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used | Details |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, CSS3 (Bento Grid) | Responsive grid layout with CSS custom properties, backdrop blur, and dark-mode gradients. |
| **Application Logic** | Vanilla JavaScript (ES6+) | Standalone client-side application logic with zero bundlers (no Webpack, Vite, or npm required). |
| **PDF Extraction** | PDF.js v3.4.120 | Client-side text parsing via ArrayBuffer with Web Worker fallback. |
| **Typography & Icons** | Google Fonts, FontAwesome 6 | Outfit, JetBrains Mono, and FontAwesome icons. |
| **Localhost Server** | Python `http.server` & PowerShell `.NET HttpListener` | Multi-runtime server with CORS headers (`Access-Control-Allow-Origin: *`) and no-cache controls. |

---

## 💡 Quick User Guide

### Workflow A: Matching Against a Specific Job Description
1. Click **Custom Sandbox Matcher** at the top of the dashboard.
2. In **Card 1 (Job Description)**, paste the employer's job description text (or a job posting URL).
3. In **Card 2 (Paste Applicant Resume)**, paste your resume text or drag & drop your `.pdf` / `.txt` file.
4. In **Card 3 (Rank Match Actions)**, click **"Analyze & Rank Match"**.
5. Review the **Match Analysis** score, competencies, and gaps in **Card 5**.
6. Click the contextual action button to launch the **Beta Application Simulator**.

### Workflow B: Discovering Roles from SG Portals First (Before Resume Upload)
1. In **Card 1 (Job Description)**, click **`🌐 Scan Job Portals`** in the card header (or **"Browse Active Roles from SG Portals"** in the footer).
2. The **Live SG Web Job Matches** modal will open with active vacancies across **MyCareersFuture**, **LinkedIn SG**, and **Careers@Gov**.
3. Filter by portal or inspect requirements (*Python, AWS, AI, SQL, etc.*).
4. Click **"Auto-Load into Section 1"** on any role — the job details and technical requirements will populate **Card 1** immediately.
5. In **Card 2**, attach or paste your applicant resume.
6. Click **"Analyze & Rank Match"** in Card 3 to compute your real-time compatibility score!

### Workflow C: Resume-Driven Web Job Matching
1. In **Custom Sandbox Matcher** mode, paste or upload your resume in **Card 2** first.
2. Click **`🌐 Scan Job Portals`** in Card 1.
3. The AI will extract your core competencies, highlight verified skills, generate targeted live portal search links, and rank live Singapore vacancies by **compatibility percentage** (e.g. *88% fit*).
4. Click **"Auto-Load & Rank Match"** on your top-matched role to inspect skill overlaps and launch the 5-step application simulator!

---

## 📄 License
This project is released under the **MIT License**. Created for developer pair programming and automated ATS evaluation in the Singapore technology job market.
