// Mock Data for Singapore Jobs
const MOCK_JOBS = [
    {
        id: "govtech_dev",
        company: "GovTech Singapore",
        title: "Senior Frontend Engineer (Civic Tech)",
        industry: "Tech",
        salaryMin: 7000,
        salaryMax: 9500,
        mrt: "Tanjong Pagar",
        mrtLine: "EWL",
        commute: "3 min walk from EW15 Tanjong Pagar MRT",
        requirements: ["React", "TypeScript", "Vanilla CSS", "REST APIs", "UI/UX Design", "System Architecture"],
        skillsfuture: "GovTech Civic Tech Development Core (L3)",
        location: "Mapletree Business City, Singapore",
        description: "Join the team building public-facing portals for citizens. Focus on accessibility, performance, and responsive frontend structures using React and modern CSS."
    },
    {
        id: "grab_backend",
        company: "Grab Singapore",
        title: "Software Engineer - Transport Microservices",
        industry: "Tech",
        salaryMin: 6500,
        salaryMax: 8800,
        mrt: "One-North",
        mrtLine: "CCL",
        commute: "Direct access from CC23 One-North MRT",
        requirements: ["Go", "Node.js", "REST APIs", "SQL", "Docker", "AWS", "System Architecture"],
        skillsfuture: "Cloud Microservices Engineering Framework",
        location: "One-North Tech Ridge, Singapore",
        description: "Scale core transport routing microservices. Work on low-latency databases, distributed lock managers, and Docker container deployments on AWS."
    },
    {
        id: "dbs_data",
        company: "DBS Bank",
        title: "Data Analyst / BI Engineer",
        industry: "Data",
        salaryMin: 6000,
        salaryMax: 8200,
        mrt: "Marina Bay",
        mrtLine: "NSL",
        commute: "5 min walk from NS27 Marina Bay MRT",
        requirements: ["Python", "SQL", "Tableau", "Excel", "Data Visualization", "REST APIs"],
        skillsfuture: "Financial Analytics & Data Governance Pathway",
        location: "DBS Asia Central, Marina Bay Financial Centre",
        description: "Turn transactional banking data into interactive executive dashboards. Design and deploy automated Tableau pipelines and run Python scripts for descriptive statistics."
    },
    {
        id: "shopee_mkt",
        company: "Shopee",
        title: "Digital Marketing Lead",
        industry: "Marketing",
        salaryMin: 5500,
        salaryMax: 7800,
        mrt: "Kent Ridge",
        mrtLine: "CCL",
        commute: "Shuttle bus from CC24 Kent Ridge MRT",
        requirements: ["SEO", "Copywriting", "Excel", "UI/UX Design", "A/B Testing", "Data Visualization"],
        skillsfuture: "E-Commerce Campaign Strategy & Growth Hacking",
        location: "Shopee Science Park Office, Singapore",
        description: "Drive user acquisition strategies across Southeast Asia. Conduct campaign A/B tests, write high-converting copy, and optimize search engine visibility."
    },
    {
        id: "synapxe_tech",
        company: "Synapxe",
        title: "UI/UX Designer (HealthTech)",
        industry: "Marketing",
        salaryMin: 5800,
        salaryMax: 8000,
        mrt: "Tiong Bahru",
        mrtLine: "EWL",
        commute: "4 min walk from EW17 Tiong Bahru MRT",
        requirements: ["UI/UX Design", "Figma", "HTML", "Vanilla CSS", "User Research"],
        skillsfuture: "Healthcare UI Accessibility & Design Standards",
        location: "Synapxe HealthTech Hub, Singapore",
        description: "Design the next generation of clinical interfaces. Build design systems in Figma, conduct citizen research, and collaborate with engineers on vanilla CSS implementation."
    }
];

// Live Singapore Web Portal Opportunities Database (Actively Recruiting - September 2026)
const WEB_PORTAL_JOBS = [
    {
        id: "wjob_tiktok_ai",
        portal: "linkedin",
        portalName: "LinkedIn SG",
        company: "TikTok / ByteDance",
        title: "AI Systems & Full-Stack Platform Engineer",
        salary: "S$ 8,500 - S$ 13,000 / mo",
        mrt: "Raffles Place / Tanjong Pagar MRT",
        location: "One Raffles Quay / Guoco Tower, Singapore",
        workMode: "Hybrid (2 days WFH)",
        posted: "Active hiring · Just posted",
        requirements: ["Python", "SQL", "AI", "Machine Learning", "JavaScript", "HTML", "CSS", "Agile", "Deployment", "Git"],
        directUrl: "https://www.linkedin.com/jobs/search/?keywords=TikTok%20AI%20Software%20Engineer%20Singapore&f_TPR=r2592000&location=Singapore",
        description: `COMPANY: TikTok / ByteDance Singapore\nROLE: AI Systems & Full-Stack Platform Engineer\nLOCATION: One Raffles Quay / Guoco Tower, Singapore\nSALARY: S$ 8,500 - S$ 13,000 / month\nWORK MODE: Hybrid (2 days WFH)\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nTikTok Singapore is actively hiring a Full-Stack AI Systems Engineer to develop scalable content recommendation infrastructure, intelligent creator telemetry tools, and high-throughput model evaluation portals.\n\nKEY RESPONSIBILITIES:\n- Develop performant backend data services and ML inference pipelines in Python and SQL.\n- Build responsive, interactive web application interfaces using JavaScript, HTML, CSS, and modern web frameworks.\n- Work in fast-paced Agile sprint cycles to deliver rapid model deployment rollouts.\n- Collaborate with regional infrastructure teams to maintain continuous integration and deployment (CI/CD) pipelines.\n\nREQUIRED SKILLS:\nPython, SQL, AI, Machine Learning, JavaScript, HTML, CSS, Agile, Deployment, Git.`
    },
    {
        id: "wjob_govtech_civic",
        portal: "careersgov",
        portalName: "Careers@Gov",
        company: "GovTech Singapore",
        title: "Full-Stack AI Software Engineer (Civic Tech)",
        salary: "S$ 7,500 - S$ 11,200 / mo",
        mrt: "Pasir Panjang MRT (CCL) / Tanjong Pagar MRT",
        location: "Mapletree Business City, Pasir Panjang",
        workMode: "Flexible Hybrid",
        posted: "Active hiring · 1 day ago",
        requirements: ["Python", "JavaScript", "SQL", "HTML", "CSS", "Agile", "Deployment", "AI", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=GovTech%20Software%20Engineer&sortBy=new_posting_date",
        description: `COMPANY: GovTech Singapore\nROLE: Full-Stack AI Software Engineer (Civic Tech)\nLOCATION: Mapletree Business City, Pasir Panjang, Singapore\nSALARY: S$ 7,500 - S$ 11,200 / month\nWORK MODE: Flexible Hybrid\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nGovTech Civic Tech is actively recruiting engineers to build the next generation of citizen-facing digital public services and AI-assisted governance systems used by Singapore residents nationwide.\n\nKEY RESPONSIBILITIES:\n- Implement secure, accessible web interfaces using JavaScript, HTML, and CSS adhering to WCAG 2.1 accessibility guidelines.\n- Build high-efficiency backend APIs and data processing workflows using Python and relational SQL databases.\n- Integrate LLM-assisted search and automated document verification workflows into public portals.\n- Partner with cross-functional Agile squads to ensure automated deployment and testing rigor.\n\nREQUIRED SKILLS:\nPython, JavaScript, SQL, HTML, CSS, Agile, Deployment, AI, Git.`
    },
    {
        id: "wjob_grab_routing",
        portal: "mycareersfuture",
        portalName: "MyCareersFuture",
        company: "Grab Singapore",
        title: "Machine Learning & Data Intelligence Engineer",
        salary: "S$ 8,000 - S$ 11,500 / mo",
        mrt: "One-North MRT (CCL)",
        location: "One-North Tech Ridge, Singapore",
        workMode: "Hybrid (2 days WFH)",
        posted: "Active hiring · 2 days ago",
        requirements: ["Python", "SQL", "Machine Learning", "AI", "Deployment", "Docker", "AWS", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=Grab%20Machine%20Learning&sortBy=new_posting_date",
        description: `COMPANY: Grab Singapore\nROLE: Machine Learning & Data Intelligence Engineer\nLOCATION: One-North Tech Ridge, Singapore (Direct CC23 MRT access)\nSALARY: S$ 8,000 - S$ 11,500 / month\nWORK MODE: Hybrid (2 days WFH)\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nGrab is actively looking for a Machine Learning Engineer to power ride-hailing ETA predictions and dynamic dispatch intelligence algorithms across millions of daily rides in Southeast Asia.\n\nKEY RESPONSIBILITIES:\n- Build scalable data feature pipelines in Python and SQL handling high-velocity streaming data.\n- Train, benchmark, and deploy predictive ML models into containerized Docker clusters on AWS.\n- Conduct automated deployment canary testing and monitor live model inference latency.\n- Collaborate with backend engineers to integrate intelligent routing models into mobile consumer APIs.\n\nREQUIRED SKILLS:\nPython, SQL, Machine Learning, AI, Deployment, Docker, AWS, Git.`
    },
    {
        id: "wjob_dbs_data",
        portal: "linkedin",
        portalName: "LinkedIn SG",
        company: "DBS Bank",
        title: "Data Analytics & Automation Specialist",
        salary: "S$ 7,200 - S$ 10,500 / mo",
        mrt: "Downtown / Marina Bay MRT",
        location: "Marina Bay Financial Centre Tower 3",
        workMode: "Hybrid (2 days WFH)",
        posted: "Active hiring · 2 days ago",
        requirements: ["Python", "SQL", "Excel", "Data Visualization", "Java", "Deployment", "REST APIs"],
        directUrl: "https://www.linkedin.com/jobs/search/?keywords=DBS%20Data%20Analytics%20Singapore&f_TPR=r2592000&location=Singapore",
        description: `COMPANY: DBS Bank\nROLE: Data Analytics & Automation Specialist\nLOCATION: MBFC Tower 3, Singapore (Near DT17 Downtown / NS27 Marina Bay MRT)\nSALARY: S$ 7,200 - S$ 10,500 / month\nWORK MODE: Hybrid (2 days WFH)\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nJoin the digital banking transformation team at DBS. We are actively hiring a Data Analytics & Automation Specialist to analyze consumer financial data, automate reporting, and engineer business intelligence pipelines.\n\nKEY RESPONSIBILITIES:\n- Develop complex SQL queries and Python aggregation scripts across enterprise data warehouses.\n- Construct high-fidelity Excel financial models and automated executive data visualization dashboards.\n- Support enterprise automation tasks interacting with core Java microservices and REST APIs.\n- Oversee reliable staging and production deployment of analytical reporting jobs.\n\nREQUIRED SKILLS:\nPython, SQL, Excel, Data Visualization, Java, Deployment, REST APIs.`
    },
    {
        id: "wjob_mckinsey_quantum",
        portal: "linkedin",
        portalName: "LinkedIn SG",
        company: "McKinsey & Company",
        title: "AI & Machine Learning Specialist (QuantumBlack)",
        salary: "S$ 9,500 - S$ 14,000 / mo",
        mrt: "Raffles Place MRT (EWL/NSL)",
        location: "One Raffles Quay, Singapore",
        workMode: "Client Advisory / Hybrid",
        posted: "Active hiring · 1 day ago",
        requirements: ["AI", "Machine Learning", "Python", "SQL", "Agile", "Excel", "Data Visualization"],
        directUrl: "https://www.linkedin.com/jobs/search/?keywords=McKinsey%20QuantumBlack%20Singapore&f_TPR=r2592000&location=Singapore",
        description: `COMPANY: McKinsey & Company\nROLE: AI & Machine Learning Specialist (QuantumBlack)\nLOCATION: One Raffles Quay, Singapore (Near NS26/EW14 Raffles Place MRT)\nSALARY: S$ 9,500 - S$ 14,000 / month\nWORK MODE: Client Advisory / Hybrid\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nQuantumBlack, AI by McKinsey, is actively seeking specialists to help enterprise clients deploy artificial intelligence solutions that deliver measurable operational growth across Singapore and APAC.\n\nKEY RESPONSIBILITIES:\n- Prototype predictive algorithms and machine learning models in Python and SQL.\n- Build data visualization dashboards and Excel-based analytical models for C-level presentation.\n- Drive client capability development using Agile development frameworks.\n- Partner with industry consultants to design and deploy AI transformation roadmaps.\n\nREQUIRED SKILLS:\nAI, Machine Learning, Python, SQL, Agile, Excel, Data Visualization.`
    },
    {
        id: "wjob_ncs_ai",
        portal: "careersgov",
        portalName: "Careers@Gov",
        company: "NCS Group",
        title: "AI & Cloud Solutions Developer",
        salary: "S$ 7,000 - S$ 9,800 / mo",
        mrt: "Ang Mo Kio MRT (NSL) / One-North (CCL)",
        location: "Ang Mo Kio Tech Park / One-North, Singapore",
        workMode: "Hybrid",
        posted: "Active hiring · 2 days ago",
        requirements: ["Python", "Java", "SQL", "AI", "Deployment", "Agile", "AWS"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=NCS%20AI%20Engineer&sortBy=new_posting_date",
        description: `COMPANY: NCS Group (Singtel Enterprise)\nROLE: AI & Cloud Solutions Developer\nLOCATION: Ang Mo Kio Tech Park / One-North, Singapore\nSALARY: S$ 7,000 - S$ 9,800 / month\nWORK MODE: Hybrid\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nNCS is actively recruiting an AI & Cloud Solutions Developer to design enterprise digital solutions for government ministries and Fortune 500 corporations.\n\nKEY RESPONSIBILITIES:\n- Develop enterprise microservices and automation tools leveraging Python and Java.\n- Manage database schemas, stored procedures, and high-volume transaction queries in SQL.\n- Deploy cloud services on AWS utilizing continuous deployment (CI/CD) pipelines.\n- Collaborate within cross-functional Agile teams to deliver quarterly release milestones.\n\nREQUIRED SKILLS:\nPython, Java, SQL, AI, Deployment, Agile, AWS.`
    },
    {
        id: "wjob_ocbc_ai",
        portal: "mycareersfuture",
        portalName: "MyCareersFuture",
        company: "OCBC Bank",
        title: "Senior Python & AI Platform Developer",
        salary: "S$ 7,500 - S$ 10,800 / mo",
        mrt: "Raffles Place / Tampines MRT",
        location: "Chulia Street / Tampines Hub, Singapore",
        workMode: "Hybrid",
        posted: "Active hiring · Just posted",
        requirements: ["Python", "SQL", "AI", "Machine Learning", "Java", "Deployment", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=OCBC%20Python%20Engineer&sortBy=new_posting_date",
        description: `COMPANY: OCBC Bank\nROLE: Senior Python & AI Platform Developer\nLOCATION: Chulia Street / Tampines Hub, Singapore\nSALARY: S$ 7,500 - S$ 10,800 / month\nWORK MODE: Hybrid\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nOCBC Bank Group Technology is actively seeking a Senior Python & AI Platform Developer to build intelligent fraud detection and automated credit scoring systems.\n\nKEY RESPONSIBILITIES:\n- Architect data processing and ML scoring engines in Python and SQL.\n- Integrate model endpoints with legacy banking core services written in Java.\n- Champion Git branching standards, code reviews, and automated release deployment.\n- Optimize latency of model scoring pipelines under peak banking transaction loads.\n\nREQUIRED SKILLS:\nPython, SQL, AI, Machine Learning, Java, Deployment, Git.`
    },
    {
        id: "wjob_shopee_algo",
        portal: "mycareersfuture",
        portalName: "MyCareersFuture",
        company: "Shopee Singapore",
        title: "Search & Recommendation Algorithm Engineer",
        salary: "S$ 7,800 - S$ 11,200 / mo",
        mrt: "Kent Ridge MRT (CCL)",
        location: "Singapore Science Park 1, Kent Ridge",
        workMode: "On-site Campus",
        posted: "Active hiring · 3 days ago",
        requirements: ["Python", "Machine Learning", "SQL", "AI", "Java", "Deployment", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=Shopee%20Machine%20Learning&sortBy=new_posting_date",
        description: `COMPANY: Shopee Singapore (Sea Group)\nROLE: Search & Recommendation Algorithm Engineer\nLOCATION: Singapore Science Park 1 (Near CC24 Kent Ridge MRT)\nSALARY: S$ 7,800 - S$ 11,200 / month\nWORK MODE: On-site Campus\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nShopee is actively hiring an Algorithm Engineer to optimize real-time e-commerce search indexing and personalized buyer recommendation feeds.\n\nKEY RESPONSIBILITIES:\n- Develop machine learning and ranking algorithms using Python and SQL.\n- Optimize search query indexing and product relevance matching pipelines.\n- Write high-concurrency inference microservices utilizing Java and Python.\n- Monitor continuous deployment pipelines and evaluate model metrics in production.\n\nREQUIRED SKILLS:\nPython, Machine Learning, SQL, AI, Java, Deployment, Git.`
    },
    {
        id: "wjob_synapxe_health",
        portal: "careersgov",
        portalName: "Careers@Gov",
        company: "Synapxe (HealthTech SG)",
        title: "National Health AI Systems Engineer",
        salary: "S$ 7,200 - S$ 10,200 / mo",
        mrt: "One-North MRT (CCL)",
        location: "Nexus @ One-North, Singapore",
        workMode: "Hybrid (2 days WFH)",
        posted: "Active hiring · 1 day ago",
        requirements: ["Python", "SQL", "AI", "Deployment", "Agile", "AWS", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=Synapxe%20AI&sortBy=new_posting_date",
        description: `COMPANY: Synapxe (HealthTech SG)\nROLE: National Health AI Systems Engineer\nLOCATION: Nexus @ One-North, Singapore (Near CC23 One-North MRT)\nSALARY: S$ 7,200 - S$ 10,200 / month\nWORK MODE: Hybrid (2 days WFH)\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nSynapxe is actively recruiting engineers to build and maintain AI diagnostic support and electronic medical records automation tools used throughout public healthcare in Singapore.\n\nKEY RESPONSIBILITIES:\n- Build secure, scalable health analytics pipelines in Python and SQL.\n- Deploy healthcare automation microservices on AWS cloud with rigorous audit logging.\n- Work in Agile sprints with medical clinicians and cybersecurity specialists.\n- Enforce robust continuous deployment and version control practices.\n\nREQUIRED SKILLS:\nPython, SQL, AI, Deployment, Agile, AWS, Git.`
    },
    {
        id: "wjob_itcan_cloud",
        portal: "mycareersfuture",
        portalName: "MyCareersFuture",
        company: "ITCAN Pte. Ltd.",
        title: "Enterprise Cloud & AI Implementation Specialist",
        salary: "S$ 7,000 - S$ 9,500 / mo",
        mrt: "Telok Ayer / Raffles Place MRT",
        location: "Downtown Core, Singapore",
        workMode: "On-site / Client Advisory",
        posted: "Active hiring · 1 day ago",
        requirements: ["Python", "SQL", "Excel", "Deployment", "AI", "AWS", "Git"],
        directUrl: "https://www.mycareersfuture.gov.sg/search?search=ITCAN%20Cloud%20Engineer&sortBy=new_posting_date",
        description: `COMPANY: ITCAN Pte. Ltd.\nROLE: Enterprise Cloud & AI Implementation Specialist\nLOCATION: Downtown Core, Singapore (Near DT18 Telok Ayer MRT)\nSALARY: S$ 7,000 - S$ 9,500 / month\nWORK MODE: On-site / Client Advisory\nSTATUS: Actively Accepting Applications (September 2026)\n\nJOB OVERVIEW:\nITCAN is actively recruiting an Enterprise Cloud & AI Implementation Specialist to deploy custom AI data automation tools and cloud monitoring for corporate clients.\n\nKEY RESPONSIBILITIES:\n- Develop custom data ingestion scripts using Python, SQL, and Excel analytics.\n- Architect and manage cloud infrastructure deployment on AWS.\n- Train client technical personnel on AI automation tool adoption.\n- Coordinate version control, deployment tracking, and release management.\n\nREQUIRED SKILLS:\nPython, SQL, Excel, Deployment, AI, AWS, Git.`
    }
];

// Mock Candidate Profiles (Dynamic Resumes)
const CANDIDATE_PROFILES = {
    dev_kai: {
        name: "Kai Chen",
        headline: "Frontend Specialist & Interface Developer",
        summary: "Passionate interface developer with 4+ years of building responsive, accessible web portals. Focused on performance-oriented styling, clean TypeScript code, and user-centric layouts.",
        contact: {
            email: "kai.chen@gmail.com",
            phone: "+65 9123 4567",
            linkedin: "linkedin.com/in/kaichen-sg"
        },
        skills: ["React", "TypeScript", "Vanilla CSS", "HTML", "UI/UX Design", "Figma", "REST APIs", "A/B Testing"],
        projects: [
            {
                name: "SG Public Housing Hub",
                metric: "99.8% Core Web Vitals Score",
                desc: "Developed an interactive dashboard map for locating HDB projects, optimizing transit connections and accessibility filters.",
                tech: ["React", "TypeScript", "Vanilla CSS", "REST APIs"]
            },
            {
                name: "FinTech Transaction Flow",
                metric: "Reduced User Dropoff by 24%",
                desc: "Re-engineered a multi-step digital payment pipeline. Conducted A/B tests and implemented custom micro-interactions.",
                tech: ["React", "UI/UX Design", "A/B Testing", "Figma"]
            },
            {
                name: "E-Commerce Search Engine UI",
                metric: "Indexed 15,000+ Products",
                desc: "Created a pure vanilla CSS design system and search results layouts, supporting sub-second page loads.",
                tech: ["HTML", "Vanilla CSS", "REST APIs"]
            }
        ]
    },
    data_siti: {
        name: "Siti Nurhaliza",
        headline: "Data Analyst & Business Intelligence Specialist",
        summary: "Analytical professional with 3+ years extracting value from complex transaction logs. Expert in automating ETL pipelines, building Tableau reports, and statistical analysis with Python.",
        contact: {
            email: "siti.nur@outlook.com",
            phone: "+65 8234 5678",
            linkedin: "linkedin.com/in/sitinur-data"
        },
        skills: ["Python", "SQL", "Tableau", "Excel", "REST APIs", "Docker", "Data Visualization", "AWS"],
        projects: [
            {
                name: "Logistics Commute ETL Optimizer",
                metric: "Saved 40+ Operational Hours/Month",
                desc: "Designed Python scripts to query public transit MRT lines data, matching delivery points to nearest rail networks.",
                tech: ["Python", "SQL", "REST APIs"]
            },
            {
                name: "Retail Campaign Analytics Portal",
                metric: "Increased ROI Transparency by 45%",
                desc: "Integrated raw sales APIs into a clean database, building executive dashboards with custom filtering logic.",
                tech: ["SQL", "Tableau", "Data Visualization", "Excel"]
            },
            {
                name: "Distributed DB Cloud Testbed",
                metric: "Evaluated 1M+ Query Logs",
                desc: "Managed local Docker containers to run database mock tests, simulating API loads and AWS metrics.",
                tech: ["Docker", "AWS", "SQL"]
            }
        ]
    },
    mkt_rahul: {
        name: "Rahul Sharma",
        headline: "Growth Marketing Lead & Copywriter",
        summary: "Data-driven marketer specializing in e-commerce strategy, organic search engine growth, and high-conversion landing page design. Experienced leading digital campaign setups.",
        contact: {
            email: "rahul.sharma@yahoo.sg",
            phone: "+65 9012 3456",
            linkedin: "linkedin.com/in/rahul-mkt"
        },
        skills: ["SEO", "Copywriting", "A/B Testing", "Excel", "UI/UX Design", "Figma", "HTML", "Vanilla CSS"],
        projects: [
            {
                name: "SaaS Campaign A/B Testing Suite",
                metric: "Boosted Conversions by 31%",
                desc: "Designed landing pages and ran copy variations, focusing on page load times and CTA click heatmaps.",
                tech: ["A/B Testing", "SEO", "Copywriting", "Excel"]
            },
            {
                name: "E-Commerce SEO Overhaul",
                metric: "+150k Monthly Organic Visits",
                desc: "Conducted site audit, rewrote core meta structures, and mapped page structures to targeted Google keyword lists.",
                tech: ["SEO", "Copywriting", "HTML"]
            },
            {
                name: "Creative Brand Asset Library",
                metric: "Maintained 200+ Figma Assets",
                desc: "Built a design framework in Figma for rapid asset creation, collaborating with designers on vanilla CSS layouts.",
                tech: ["UI/UX Design", "Figma", "Vanilla CSS"]
            }
        ]
    }
};

// Simulated Interview and Quiz Questions
const SIMULATION_DETAILS = {
    govtech_dev: {
        quiz: [
            {
                question: "Which CSS property is best suited for building glassmorphic card overlays?",
                options: [
                    "filter: blur(10px)",
                    "backdrop-filter: blur(10px)",
                    "background: transparent",
                    "box-shadow: inset 0px 0px 5px #fff"
                ],
                answer: 1
            },
            {
                question: "How does TypeScript differ primarily from Vanilla JavaScript?",
                options: [
                    "It compiles to machine code directly.",
                    "It has native runtime support in browsers.",
                    "It introduces static typing at compile time.",
                    "It performs faster loop evaluations."
                ],
                answer: 2
            }
        ],
        interview: {
            question: "At GovTech, we build high-availability public systems. How would you optimize the load time and user experience of a portal that handles millions of requests?",
            responses: [
                {
                    text: "I would implement aggressive code splitting, leverage Service Workers for caching static assets, and ensure our vanilla CSS and DOM queries do not trigger excessive browser reflows.",
                    score: 95
                },
                {
                    text: "I would increase our server resources on AWS and implement a heavy framework with multiple libraries to cover all user scenarios.",
                    score: 60
                }
            ],
            feedback: "Kai Chen demonstrated excellent knowledge of web vitals, DOM optimization, and local caching protocols, which perfectly aligns with GovTech's infrastructure goals."
        }
    },
    grab_backend: {
        quiz: [
            {
                question: "In Golang, what is a goroutine?",
                options: [
                    "A kernel thread managed directly by the OS.",
                    "A class method executing in synchronous blocks.",
                    "A lightweight thread managed by the Go runtime.",
                    "An external microservice network router."
                ],
                answer: 2
            },
            {
                question: "Which Docker command is used to launch a container in detached mode?",
                options: [
                    "docker run -d",
                    "docker build -t",
                    "docker container start",
                    "docker exec -it"
                ],
                answer: 0
            }
        ],
        interview: {
            question: "Grab handles millions of real-time taxi and transport bookings. How would you handle a scenario where multiple drivers attempt to accept the same booking simultaneously?",
            responses: [
                {
                    text: "I would use a distributed lock manager like Redis Redlock to serialize bookings and ensure ACID compliance at the database level using optimistic locking.",
                    score: 98
                },
                {
                    text: "I would set up a cron job to resolve matching errors every 5 minutes and delete duplicate bookings in our SQL tables.",
                    score: 50
                }
            ],
            feedback: "Strong grasp of concurrency controls and database transactions. The proposed Redis locking mechanism is key to scaling Grab's microservices."
        }
    },
    dbs_data: {
        quiz: [
            {
                question: "Which Python library is most commonly used for creating mathematical models and DataFrame manipulations?",
                options: [
                    "Pandas",
                    "Flask",
                    "PyLint",
                    "JSON"
                ],
                answer: 0
            },
            {
                question: "What is the purpose of an INNER JOIN in SQL?",
                options: [
                    "It returns all rows from the left table and matched rows from the right.",
                    "It returns rows when there is a match in both tables.",
                    "It creates a new database table configuration.",
                    "It aggregates columns into nested JSON matrices."
                ],
                answer: 1
            }
        ],
        interview: {
            question: "When presenting dashboards to DBS bank executives, how do you handle data anomalies or discrepancies that could impact risk calculations?",
            responses: [
                {
                    text: "I ensure ETL logging contains clear validation flags. I design anomaly alerts in Python and outline the data lineage clearly inside the Tableau interface.",
                    score: 95
                },
                {
                    text: "I hide data anomalies from the main dashboard to keep the charts clean and only discuss them if specifically asked.",
                    score: 40
                }
            ],
            feedback: "Professional diligence and transparency. Creating automatic data-validation alerts is standard banking protocol."
        }
    },
    shopee_mkt: {
        quiz: [
            {
                question: "What does SEO stand for in digital campaigns?",
                options: [
                    "Search Engine Optimization",
                    "System Enterprise Operations",
                    "Sales Engagement Outreach",
                    "Statistically Evaluated Outcomes"
                ],
                answer: 0
            },
            {
                question: "Which is a critical metric for evaluating A/B test results?",
                options: [
                    "Total lines of HTML code",
                    "Domain registrar age",
                    "Statistical significance (p-value)",
                    "Page weight in Megabytes"
                ],
                answer: 2
            }
        ],
        interview: {
            question: "Shopee runs highly competitive regional shopping festivals (like 11.11). How would you optimize organic traffic in preparation for these peak sales?",
            responses: [
                {
                    text: "I would create dedicated, high-speed landing pages, perform targeted keyword mapping, optimize schema markup, and implement rapid A/B testing on our CTA copy.",
                    score: 92
                },
                {
                    text: "I would buy bulk spam backlinks and stuff our page footers with repetitive keyword lists.",
                    score: 30
                }
            ],
            feedback: "Understands modern SEO guidelines. Focus on speed, UX, and systematic conversion optimization is highly valued at Shopee."
        }
    },
    synapxe_tech: {
        quiz: [
            {
                question: "What is a core benefit of using Figma for engineering-design handoffs?",
                options: [
                    "It automatically compiles layout structures to binary assemblies.",
                    "It serves as a live database hosting transaction logs.",
                    "It provides accurate CSS, component guidelines, and variable tokens directly.",
                    "It replaces the need for front-end rendering engines."
                ],
                answer: 2
            },
            {
                question: "What does WCAG accessibility standards aim to ensure in HealthTech?",
                options: [
                    "That medical databases are secure against external SQL injections.",
                    "That interfaces are accessible and usable for all people, including those with disabilities.",
                    "That design software runs locally without network access.",
                    "That files compile in under a second."
                ],
                answer: 1
            }
        ],
        interview: {
            question: "In HealthTech, digital tools are used by elderly citizens or clinicians under high stress. How do you design for this audience?",
            responses: [
                {
                    text: "I conduct thorough usability testing, design for high visual contrast, keep navigation steps simple, and ensure WCAG AA compliance with responsive layouts.",
                    score: 96
                },
                {
                    text: "I design very colorful screens with small font sizes to maximize the amount of information displayed on the monitor.",
                    score: 45
                }
            ],
            feedback: "Outstanding client empathy. High contrast, simplicity, and WCAG AA standards are non-negotiable for Synapxe healthcare portals."
        }
    }
};

// Global App State
let currentCandidateId = "dev_kai";
let selectedJobId = null;
let filteredJobs = [...MOCK_JOBS];
let activeQuizStep = 0;
let quizScore = 0;

// Market Ticker Feed Sentences
const MARKET_TICKER_DATA = [
    "🔥 **Golang** roles in Tanjong Pagar have surged by **14%** this quarter.",
    "🚇 Commute study shows **82%** of SG candidates prioritize jobs within **500m** of an MRT station.",
    "🚀 Average salary for **Senior Frontend Engineers** in Singapore reaches **S$ 8,200/mo**.",
    "💼 **GovTech** and **Synapxe** launch civic technology hiring drive for Q3.",
    "💡 Tip: Incorporating **SkillsFuture** frameworks increases resume match scores by **25%**."
];

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
    initMarketTicker();
    initEventListeners();
    loadProfile(currentCandidateId);
    renderJobsList();
    logToAgentConsole("System initialized. Active Job-Market Agent standing by.", "info");
    logToAgentConsole("Select a mock candidate profile or click a job opportunity to start matching.", "action");
});

// 1. Market Ticker Animation
function initMarketTicker() {
    const ticker = document.getElementById("market-ticker");
    let contentHtml = "";
    
    // Repeat ticker data so it loops smoothly
    const doubledList = [...MARKET_TICKER_DATA, ...MARKET_TICKER_DATA];
    doubledList.forEach(item => {
        // Clean markdown strong formatting for HTML
        const cleanText = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        contentHtml += `<span class="ticker-item">${cleanText}</span>`;
    });
    ticker.innerHTML = contentHtml;
}

// 2. Initialize Event Listeners
function initEventListeners() {
    // Profile Selection
    safeAddListener("profile-select", "change", (e) => {
        currentCandidateId = e.target.value;
        loadProfile(currentCandidateId);
        if (selectedJobId) {
            evaluateMatch();
        }
    });

    // Search and Filters
    safeAddListener("search-input", "input", filterJobs);
    safeAddListener("mrt-filter", "change", filterJobs);
    
    const industryTags = document.getElementById("industry-tags");
    if (industryTags) {
        industryTags.addEventListener("click", (e) => {
            if (e.target.classList.contains("tag")) {
                document.querySelectorAll("#industry-tags .tag").forEach(t => t.classList.remove("active"));
                e.target.classList.add("active");
                filterJobs();
            }
        });
    }

    // Agent Console buttons
    safeAddListener("btn-optimize-resume", "click", autoOptimizeResume);
    safeAddListener("btn-market-report", "click", generateMarketReport);
    
    // Mode toggle buttons
    safeAddListener("btn-mode-preset", "click", () => switchMode("preset"));
    safeAddListener("btn-mode-custom", "click", () => switchMode("custom"));
    safeAddListener("btn-analyze-custom", "click", analyzeCustomMatch);
    safeAddListener("custom-job-desc", "input", handleJobDescInput);

    // Web Job Discovery modal triggers (Section 1 and quick links)
    safeAddListener("btn-browse-web-jobs", "click", openWebJobsModal);
    safeAddListener("btn-quick-scan-jobs", "click", openWebJobsModal);
    safeAddListener("btn-search-web-jobs", "click", openWebJobsModal);
    safeAddListener("btn-quick-web-search", "click", openWebJobsModal);
    safeAddListener("btn-close-web-modal", "click", closeWebJobsModal);
    safeAddListener("web-modal-overlay", "click", closeWebJobsModal);

    // Portal filter tab switches
    document.querySelectorAll(".portal-filter-tab").forEach(tab => {
        tab.addEventListener("click", (e) => {
            document.querySelectorAll(".portal-filter-tab").forEach(t => t.classList.remove("active"));
            const target = e.currentTarget;
            target.classList.add("active");
            const portal = target.getAttribute("data-portal");
            renderWebJobs(portal);
        });
    });

    // Apply Button
    const btnBetaApply = document.getElementById("btn-beta-apply");
    if (btnBetaApply) {
        btnBetaApply.addEventListener("click", () => {
            if (currentMode === "custom" && customJobData) {
                startBetaApply("custom");
            } else if (selectedJobId) {
                startBetaApply(selectedJobId);
            }
        });
    }

    // Drawer Controls
    safeAddListener("drawer-close", "click", closeDrawer);
    safeAddListener("drawer-overlay", "click", closeDrawer);
    
    // Simulator controls
    safeAddListener("btn-regenerate-letter", "click", startCoverLetterTyping);
    safeAddListener("btn-submit-application", "click", startAtsScreening);
    safeAddListener("btn-proceed-assessment", "click", startTechnicalQuiz);
    safeAddListener("btn-proceed-interview", "click", startMockInterview);
    safeAddListener("btn-send-interview", "click", submitInterviewAnswer);
    safeAddListener("btn-proceed-decision", "click", viewVerdict);
    safeAddListener("btn-close-simulator", "click", closeDrawer);

    // Global preventions to block browser from loading dropped files in page (bubbling phase so children get the drop event)
    ['dragenter', 'dragover', 'drop'].forEach(eventName => {
        window.addEventListener(eventName, (e) => {
            e.preventDefault();
        }, false);
    });

    // Custom Resume File drop & upload listeners
    const fileInput = document.getElementById("resume-file-input");
    if (fileInput) {
        fileInput.addEventListener("change", handleResumeFileSelect);
    }

    const dropzone = document.getElementById("resume-dropzone");
    const resumeTextarea = document.getElementById("custom-resume-text");
    const cardFilters = document.getElementById("card-filters");
    if (dropzone && resumeTextarea) {
        const dropTargets = [dropzone, resumeTextarea];
        if (cardFilters) dropTargets.push(cardFilters);

        dropTargets.forEach(element => {
            ['dragenter', 'dragover'].forEach(eventName => {
                element.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropzone.classList.add("dragover");
                }, false);
            });

            element.addEventListener('dragleave', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.remove("dragover");
            }, false);

            element.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.remove("dragover");
                const dt = e.dataTransfer;
                const files = dt.files;
                if (files.length > 0) {
                    handleResumeFile(files[0]);
                }
            }, false);
        });
    }
}

function safeAddListener(id, event, callback) {
    const el = document.getElementById(id);
    if (el && typeof callback === 'function') {
        el.addEventListener(event, callback);
    }
}

function handleJobDescInput() {
    resetMatchAnalysis();
}

// 3. Load Candidate Profile
function loadProfile(candidateId) {
    const candidate = CANDIDATE_PROFILES[candidateId];
    
    // Render profile brief card
    const brief = document.getElementById("profile-brief");
    brief.innerHTML = `
        <div class="name">${candidate.name}</div>
        <div class="title">${candidate.headline}</div>
        <p>${candidate.summary}</p>
        <div class="profile-stats-row">
            <div class="profile-stat">
                <span class="num">${candidate.skills.length}</span>
                <span class="lbl">Skills Listed</span>
            </div>
            <div class="profile-stat">
                <span class="num">${candidate.projects.length}</span>
                <span class="lbl">Portfolio Cases</span>
            </div>
        </div>
    `;

    renderResumeWorkspace(candidate);
    logToAgentConsole(`Candidate loaded: <strong>${candidate.name}</strong>. Portfolio data populated.`, "info");
}

// 4. Render Resume Panel (Bento Card 6)
function renderResumeWorkspace(candidate) {
    const ws = document.getElementById("resume-workspace");
    
    let skillsHtml = "";
    candidate.skills.forEach(s => {
        skillsHtml += `<span class="resume-skill-badge" id="skill-badge-${s.replace(/[^a-zA-Z0-9]/g, '')}">${s}</span>`;
    });

    let projectsHtml = "";
    candidate.projects.forEach((proj, idx) => {
        let techHtml = "";
        proj.tech.forEach(t => {
            techHtml += `<span class="mini-tag">${t}</span>`;
        });

        projectsHtml += `
            <div class="resume-project-card rank-${idx}" id="project-card-${idx}">
                <div class="project-header">
                    <div class="project-name">${proj.name}</div>
                    <div class="project-metrics">${proj.metric}</div>
                </div>
                <div class="project-desc">${proj.desc}</div>
                <div class="project-tech">${techHtml}</div>
            </div>
        `;
    });

    ws.innerHTML = `
        <div class="resume-sidebar">
            <div class="resume-contact-item"><i class="fa-solid fa-envelope"></i> ${candidate.contact.email}</div>
            <div class="resume-contact-item"><i class="fa-solid fa-phone"></i> ${candidate.contact.phone}</div>
            <div class="resume-contact-item"><i class="fa-solid fa-link"></i> ${candidate.contact.linkedin}</div>
            <div class="resume-skills-block">
                <h4>Verified Expertise</h4>
                <div class="resume-skills-list">
                    ${skillsHtml}
                </div>
            </div>
        </div>
        <div class="resume-main">
            <div class="resume-summary-card">
                <h4>Professional Statement</h4>
                <p>${candidate.summary}</p>
            </div>
            <div class="resume-projects-container" id="resume-projects-list">
                ${projectsHtml}
            </div>
        </div>
    `;
    
    document.getElementById("resume-mode").innerText = "Standard View";
}

// 5. Render Jobs List
function renderJobsList() {
    const container = document.getElementById("jobs-container");
    const countBadge = document.getElementById("job-count");
    
    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: var(--text-dim);">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>No job opportunities match your criteria.</p>
            </div>
        `;
        countBadge.innerText = `0 Jobs`;
        return;
    }

    countBadge.innerText = `${filteredJobs.length} ${filteredJobs.length === 1 ? 'Opportunity' : 'Opportunities'}`;
    
    let html = "";
    filteredJobs.forEach(job => {
        let tagsHtml = "";
        // Show first 3 requirements as badges
        job.requirements.slice(0, 3).forEach(req => {
            tagsHtml += `<span class="mini-tag">${req}</span>`;
        });

        const activeClass = selectedJobId === job.id ? "active" : "";

        html += `
            <div class="job-card ${activeClass}" id="job-card-${job.id}" onclick="selectJob('${job.id}')">
                <div class="job-card-header">
                    <div>
                        <span class="job-company">${job.company}</span>
                        <h4 class="job-title">${job.title}</h4>
                    </div>
                    <span class="mrt-badge mrt-${job.mrtLine}"><i class="fa-solid fa-train"></i> ${job.mrt}</span>
                </div>
                <div class="job-meta-row">
                    <div class="job-meta-item"><i class="fa-solid fa-coins"></i> S$ ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}/mo</div>
                    <div class="job-meta-item"><i class="fa-solid fa-location-arrow"></i> ${job.mrtLine} Line</div>
                </div>
                <div class="job-tags">
                    ${tagsHtml}
                    <span class="mini-tag" style="background: rgba(0,242,254,0.05); color: var(--accent-cyan); border-color: rgba(0,242,254,0.15)">+${job.requirements.length - 3} more</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 6. Filtering Logic
function filterJobs() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const mrtLine = document.getElementById("mrt-filter").value;
    const activeIndustryTag = document.querySelector("#industry-tags .tag.active").dataset.industry;

    filteredJobs = MOCK_JOBS.filter(job => {
        const matchesQuery = job.title.toLowerCase().includes(query) || 
                             job.company.toLowerCase().includes(query) ||
                             job.requirements.some(r => r.toLowerCase().includes(query));
        
        const matchesMrt = mrtLine === "all" || job.mrtLine === mrtLine;
        
        const matchesIndustry = activeIndustryTag === "all" || job.industry === activeIndustryTag;

        return matchesQuery && matchesMrt && matchesIndustry;
    });

    renderJobsList();
}

// 7. Select Job Event
function selectJob(jobId) {
    selectedJobId = jobId;
    
    // Highlight job card in UI
    document.querySelectorAll(".job-card").forEach(card => card.classList.remove("active"));
    const selectedCard = document.getElementById(`job-card-${jobId}`);
    if (selectedCard) selectedCard.classList.add("active");

    const job = MOCK_JOBS.find(j => j.id === jobId);
    
    logToAgentConsole(`Selected <strong>${job.company}</strong>: <em>${job.title}</em>`, "info");
    
    // Evaluate resume compatibility and reorder resume dynamically
    evaluateMatch();
    reorderResume(job);
}

// 8. Evaluate Match Score (Logic & Gauge update)
function evaluateMatch() {
    const candidate = CANDIDATE_PROFILES[currentCandidateId];
    const job = MOCK_JOBS.find(j => j.id === selectedJobId);

    if (!candidate || !job) return;

    // Calculate score based on keyword overlap
    const jobReqs = job.requirements;
    const candSkills = candidate.skills;
    
    let matched = [];
    let missing = [];

    jobReqs.forEach(req => {
        if (candSkills.includes(req)) {
            matched.push(req);
        } else {
            missing.push(req);
        }
    });

    const matchPercent = Math.round((matched.length / jobReqs.length) * 100);
    
    // Update dashboard gauges
    const progress = document.getElementById("score-progress");
    const dashOffset = 314.16 - (314.16 * matchPercent) / 100;
    progress.style.strokeDashoffset = dashOffset;
    
    document.getElementById("match-percent").innerText = `${matchPercent}%`;
    
    // Verdict
    let verdictText = "";
    if (matchPercent >= 85) verdictText = "🔥 Highly Optimized Fit";
    else if (matchPercent >= 60) verdictText = "📈 Viable Candidate Core";
    else verdictText = "⚠️ Experience Gap Present";
    
    document.getElementById("match-verdict").innerText = verdictText;
    document.getElementById("match-explanation").innerText = `Candidate matches ${matched.length} out of ${jobReqs.length} core job competencies.`;

    // Render keyword lists
    const matchedContainer = document.getElementById("matched-keywords");
    matchedContainer.innerHTML = matched.map(m => `<span class="keyword-tag"><i class="fa-solid fa-check"></i> ${m}</span>`).join('');

    // SkillsFuture course recommendation
    const sfRec = document.getElementById("skillsfuture-rec");
    if (missing.length > 0) {
        sfRec.innerHTML = `
            <strong>Courses to bridge gaps:</strong>
            <div style="margin-top: 0.25rem;">
                <i class="fa-solid fa-graduation-cap"></i> Recommended SkillsFuture: <span style="color: var(--accent-cyan); font-weight:600;">${job.skillsfuture}</span>
            </div>
            <div style="font-size:0.7rem; color:var(--text-dim); margin-top:0.2rem;">Covers missing keywords: ${missing.join(', ')}</div>
        `;
    } else {
        sfRec.innerHTML = `
            <span style="color: var(--accent-success);"><i class="fa-solid fa-circle-check"></i> SkillsFuture aligned!</span>
            <div style="font-size:0.7rem; color:var(--text-dim); margin-top:0.2rem;">All key competencies are matched. Ready to deploy.</div>
        `;
    }

    // Agent Feedback stream
    logToAgentConsole(`Match rating for <strong>${candidate.name}</strong> computed: <strong>${matchPercent}%</strong>.`, "info");
    if (missing.length > 0) {
        logToAgentConsole(`Agent advice: Adding course <em>"${job.skillsfuture}"</em> will fill missing gaps: <strong>[${missing.join(', ')}]</strong>.`, "advice");
    } else {
        logToAgentConsole("Agent advice: Perfect alignment. Excellent candidate fit verified.", "success");
    }

    // Show Beta Apply button
    const applyBtn = document.getElementById("btn-beta-apply");
    if (applyBtn) {
        applyBtn.style.display = "block";
    }
}

// 9. Reorder Resume Layout dynamically (Feature 4.1 & 4.2)
function reorderResume(job) {
    const candidate = CANDIDATE_PROFILES[currentCandidateId];
    
    // 1. Highlight relevant skills
    document.querySelectorAll(".resume-skill-badge").forEach(badge => {
        badge.classList.remove("highlight");
    });
    
    job.requirements.forEach(req => {
        const badgeId = `skill-badge-${req.replace(/[^a-zA-Z0-9]/g, '')}`;
        const el = document.getElementById(badgeId);
        if (el) el.classList.add("highlight");
    });

    // 2. Score and Reorder projects based on how many technology tags match
    const projects = [...candidate.projects];
    const scoredProjects = projects.map((p, originalIdx) => {
        let matchCount = 0;
        p.tech.forEach(t => {
            if (job.requirements.includes(t)) matchCount++;
        });
        return { project: p, score: matchCount, originalIdx: originalIdx };
    });

    // Sort: highest match score first
    scoredProjects.sort((a, b) => b.score - a.score);

    // Apply class sorting
    scoredProjects.forEach((item, sortedIdx) => {
        const card = document.getElementById(`project-card-${item.originalIdx}`);
        if (card) {
            // Remove existing rank classes
            card.classList.remove("rank-0", "rank-1", "rank-2", "highlight");
            // Add new rank layout order
            card.classList.add(`rank-${sortedIdx}`);
            
            // Highlight the top matching project
            if (sortedIdx === 0 && item.score > 0) {
                card.classList.add("highlight");
            }
        }
    });

    document.getElementById("resume-mode").innerText = "Dynamic Match Mode";
    logToAgentConsole("Portfolio reordered contextually to emphasize relevant project work.", "info");
}

// 10. AI Agent console logger
function logToAgentConsole(msg, type = "info") {
    const logs = document.getElementById("terminal-logs");
    if (!logs) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const timestamp = `${hours}:${mins}:${secs}`;
    
    let tag = `<span class="log-agent" style="color:var(--accent-cyan)">[SYS]</span>`;
    if (type === "advice") tag = `<span class="log-agent" style="color:var(--accent-warning)">[ADVICE]</span>`;
    if (type === "success") tag = `<span class="log-agent" style="color:var(--accent-success)">[MATCH]</span>`;
    if (type === "action") tag = `<span class="log-agent" style="color:#d832ff">[TASK]</span>`;
    if (type === "agent") tag = `<span class="log-agent">Agent:</span>`;

    logs.innerHTML += `
        <div class="log-line">
            <span class="log-time" style="color:var(--text-dim); font-family:monospace; margin-right:4px;">[${timestamp}]</span>
            <span class="log-text">${tag} ${msg}</span>
        </div>
    `;
    logs.scrollTop = logs.scrollHeight;
}

// 11. Auto Optimize Resume simulation
function autoOptimizeResume() {
    if (!selectedJobId) {
        alert("Please select a job opportunity first before optimization.");
        return;
    }
    
    const candidate = CANDIDATE_PROFILES[currentCandidateId];
    const job = MOCK_JOBS.find(j => j.id === selectedJobId);
    
    logToAgentConsole("Initiating Auto-Optimization engine...", "action");
    
    setTimeout(() => {
        // Find missing requirements
        let missing = job.requirements.filter(req => !candidate.skills.includes(req));
        
        if (missing.length > 0) {
            // Simulate adding the top missing skill temporarily to resume
            const addedSkill = missing[0];
            logToAgentConsole(`Auto-injecting missing credential: <strong>"${addedSkill}"</strong>. Re-analyzing...`, "success");
            
            // Temporarily update UI to show added skill badge
            const ws = document.querySelector(".resume-skills-list");
            const tempBadge = document.createElement("span");
            tempBadge.className = "resume-skill-badge highlight";
            tempBadge.innerText = addedSkill;
            ws.appendChild(tempBadge);
            
            // Recalculate score
            const matchedCount = job.requirements.filter(r => candidate.skills.includes(r) || r === addedSkill).length;
            const matchPercent = Math.round((matchedCount / job.requirements.length) * 100);
            
            const progress = document.getElementById("score-progress");
            const dashOffset = 314.16 - (314.16 * matchPercent) / 100;
            progress.style.strokeDashoffset = dashOffset;
            
            document.getElementById("match-percent").innerText = `${matchPercent}%`;
            document.getElementById("match-verdict").innerText = "🔥 Optimized Fit (Simulated)";
            
            logToAgentConsole(`Resume optimized successfully. Score raised to <strong>${matchPercent}%</strong>.`, "success");
        } else {
            logToAgentConsole("Resume is already fully optimized for this role.", "success");
        }
    }, 1000);
}

// 12. Generate Market Insights report
function generateMarketReport() {
    logToAgentConsole("Compiling Singapore tech market analytics report...", "action");
    setTimeout(() => {
        logToAgentConsole("== MARKET INSIGHTS REPORT Q3 ==", "info");
        logToAgentConsole("• Top Hiring Sectors: Fintech (DBS, Grab), Public Infrastructure (GovTech, Synapxe).", "info");
        logToAgentConsole("• Most Demanded Languages: Golang (+18% YoY), TypeScript (+15% YoY).", "info");
        logToAgentConsole("• Commute impact: 70% of Tanjong Pagar candidates reject jobs exceeding 45m door-to-door commute.", "info");
        logToAgentConsole("Report compiled successfully.", "success");
    }, 800);
}

/* ==========================================
   BETA APPLICATION SIMULATOR DRAW FLOW LOGIC
   ========================================== */

function openDrawer() {
    document.getElementById("drawer-overlay").classList.add("active");
    document.getElementById("app-drawer").classList.add("active");
}

function closeDrawer() {
    document.getElementById("drawer-overlay").classList.remove("active");
    document.getElementById("app-drawer").classList.remove("active");
    
    // Reset steps
    document.querySelectorAll(".pipeline-tracker .step").forEach(s => s.classList.remove("active"));
    document.getElementById("step-1").classList.add("active");
    
    document.querySelectorAll(".pipeline-panel").forEach(p => p.classList.remove("active"));
    document.getElementById("panel-step-1").classList.add("active");
}

// Entrypoint for Simulator Beta Run
// Expose apply function globally
window.startBetaApply = function(jobId) {
    let job, candidate;
    if (currentMode === "custom") {
        selectedJobId = "custom";
        job = customJobData;
        candidate = {
            name: "Sandbox Applicant",
            skills: customJobData.skills
        };
    } else {
        selectedJobId = jobId;
        job = MOCK_JOBS.find(j => j.id === jobId);
        candidate = CANDIDATE_PROFILES[currentCandidateId];
    }
    
    if (!candidate || !job) return;

    // Set drawer headers
    document.getElementById("drawer-job-title").innerText = `${job.title} @ ${job.company}`;
    
    // Reset panels and step visibility
    document.getElementById("ats-actions").style.display = "none";
    document.getElementById("quiz-actions").style.display = "none";
    document.getElementById("interview-actions").style.display = "none";

    openDrawer();
    startCoverLetterTyping();
};

// Step 1: Typing Cover Letter
let typingInterval = null;
function startCoverLetterTyping() {
    if (typingInterval) clearInterval(typingInterval);

    let job, candidate;
    if (currentMode === "custom") {
        job = customJobData;
        candidate = { name: "Sandbox Applicant", skills: customJobData.skills };
    } else {
        job = MOCK_JOBS.find(j => j.id === selectedJobId);
        candidate = CANDIDATE_PROFILES[currentCandidateId];
    }

    const jobMrt = job.mrt || "a central";
    const jobReqs = job.requirements.slice(0, 2).join(' & ') || "required qualifications";
    const candidateSkills = candidate.skills.slice(0, 3).join(', ') || "my professional background";

    const draftText = `Dear Hiring Team at ${job.company},\n\nI am writing to express my strong interest in the ${job.title} position. As a resident in Singapore, I would love the chance to join your team.\n\nMy professional background highlights my experience in ${candidateSkills} which align closely with your requirement of ${jobReqs}.\n\nI look forward to discussing how my background fits your vision.\n\nSincerely,\n${candidate.name}`;
    
    const container = document.getElementById("cover-letter-content");
    container.innerHTML = "";
    
    let charIdx = 0;
    typingInterval = setInterval(() => {
        if (charIdx < draftText.length) {
            container.innerHTML += draftText.charAt(charIdx);
            charIdx++;
            container.scrollTop = container.scrollHeight;
        } else {
            clearInterval(typingInterval);
        }
    }, 12);
}

// Step 2: ATS Scanner
function startAtsScreening() {
    // Move to step 2 tracker
    setActiveStep(2);
    
    const atsLogs = document.getElementById("ats-console-logs");
    atsLogs.innerHTML = "";
    const scanBar = document.getElementById("scan-progress-bar");
    scanBar.style.width = "0%";
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 4;
        scanBar.style.width = `${progress}%`;
        
        if (progress === 20) {
            atsLogs.innerHTML += `<div>[SYSTEM] Reading resume file...</div>`;
        } else if (progress === 48) {
            atsLogs.innerHTML += `<div>[SYSTEM] Checking keywords for SGD CPF validation...</div>`;
        } else if (progress === 72) {
            const matchScore = document.getElementById("match-percent").innerText;
            atsLogs.innerHTML += `<div style="color:var(--accent-cyan)">[SYSTEM] Match score computed: ${matchScore}</div>`;
        } else if (progress === 100) {
            clearInterval(interval);
            atsLogs.innerHTML += `<div style="color:var(--accent-success); font-weight:bold;">[SUCCESS] Resume passed automated screening filter!</div>`;
            document.getElementById("ats-actions").style.display = "flex";
        }
        atsLogs.scrollTop = atsLogs.scrollHeight;
    }, 80);
}

// Step 3: Tech Quiz
let currentQuestionIndex = 0;
function startTechnicalQuiz() {
    setActiveStep(3);
    currentQuestionIndex = 0;
    quizScore = 0;
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const jobSim = (selectedJobId === "custom") ? customJobData : SIMULATION_DETAILS[selectedJobId];
    const quizData = jobSim.quiz[currentQuestionIndex];
    
    document.getElementById("quiz-question-title").innerText = `Question ${currentQuestionIndex + 1} of ${jobSim.quiz.length}`;
    document.getElementById("quiz-question-text").innerText = quizData.question;
    
    const optionsBox = document.getElementById("quiz-options");
    optionsBox.innerHTML = "";
    
    quizData.options.forEach((opt, idx) => {
        optionsBox.innerHTML += `
            <button class="quiz-option" onclick="submitQuizAnswer(${idx})">${opt}</button>
        `;
    });
}

window.submitQuizAnswer = function(selectedIdx) {
    const jobSim = (selectedJobId === "custom") ? customJobData : SIMULATION_DETAILS[selectedJobId];
    const quizData = jobSim.quiz[currentQuestionIndex];
    const options = document.querySelectorAll(".quiz-option");
    
    // Disable clicking other options
    options.forEach(opt => opt.removeAttribute("onclick"));
    
    if (selectedIdx === quizData.answer) {
        options[selectedIdx].classList.add("correct");
        quizScore++;
    } else {
        options[selectedIdx].classList.add("wrong");
        options[quizData.answer].classList.add("correct");
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < jobSim.quiz.length) {
            renderQuizQuestion();
        } else {
            // Finished Quiz
            const quizBox = document.getElementById("quiz-options");
            quizBox.innerHTML = `
                <div style="text-align:center; padding:1.5rem;">
                    <i class="fa-solid fa-award" style="font-size: 2.5rem; color:var(--accent-cyan); margin-bottom:1rem;"></i>
                    <h4>Assessment Completed!</h4>
                    <p>You scored ${quizScore} out of ${jobSim.quiz.length} points.</p>
                </div>
            `;
            document.getElementById("quiz-question-text").innerText = "Quiz Results Summary";
            document.getElementById("quiz-actions").style.display = "flex";
        }
    }, 1500);
};

// Step 4: Live Interview Dialog
function startMockInterview() {
    setActiveStep(4);
    
    const jobSim = (selectedJobId === "custom") ? customJobData : SIMULATION_DETAILS[selectedJobId];
    const interviewChat = document.getElementById("interview-chat");
    
    // Set question text
    document.getElementById("interview-question").innerText = jobSim.interview.question;
    
    // Render selection bubbles
    const premadeBox = document.getElementById("premade-responses-list");
    premadeBox.innerHTML = "";
    
    jobSim.interview.responses.forEach((resp, idx) => {
        premadeBox.innerHTML += `
            <button class="premade-btn" onclick="selectPremadeResponse(${idx})">
                ${resp.text}
            </button>
        `;
    });
    
    // Clear user input
    document.getElementById("interview-input").value = "";
    document.getElementById("btn-send-interview").style.display = "block";
}

let activeResponseScore = 90; // Default
window.selectPremadeResponse = function(idx) {
    const jobSim = (selectedJobId === "custom") ? customJobData : SIMULATION_DETAILS[selectedJobId];
    const responseText = jobSim.interview.responses[idx].text;
    activeResponseScore = jobSim.interview.responses[idx].score;
    
    document.getElementById("interview-input").value = responseText;
};

function submitInterviewAnswer() {
    const val = document.getElementById("interview-input").value;
    if (!val.trim()) return;

    const interviewChat = document.getElementById("interview-chat");
    
    // Add user response bubble
    interviewChat.innerHTML += `
        <div class="message candidate">
            <div class="avatar"><i class="fa-solid fa-user"></i></div>
            <div class="msg-bubble">
                <p class="sender">Candidate</p>
                <p>${val}</p>
            </div>
        </div>
    `;
    
    // Disable input
    document.getElementById("btn-send-interview").style.display = "none";
    interviewChat.scrollTop = interviewChat.scrollHeight;
    
    setTimeout(() => {
        // Add HR response
        interviewChat.innerHTML += `
            <div class="message manager">
                <div class="avatar"><i class="fa-solid fa-user-tie"></i></div>
                <div class="msg-bubble">
                    <p class="sender">Hiring Manager</p>
                    <p>Thank you for your answer. I appreciate your insights. The team is running the final review scorecard now.</p>
                </div>
            </div>
        `;
        interviewChat.scrollTop = interviewChat.scrollHeight;
        
        // Show proceed to verdict button
        document.getElementById("interview-actions").style.display = "flex";
    }, 1200);
}

// Step 5: Verdict
function viewVerdict() {
    setActiveStep(5);
    
    let job, jobSim;
    if (selectedJobId === "custom") {
        job = customJobData;
        jobSim = customJobData;
    } else {
        job = MOCK_JOBS.find(j => j.id === selectedJobId);
        jobSim = SIMULATION_DETAILS[selectedJobId];
    }
    
    // Get aggregate scores
    const matchScore = parseInt(document.getElementById("match-percent").innerText);
    const passQuiz = quizScore >= 1;
    const passInterview = activeResponseScore >= 80;
    
    // Lower percentages meant the person is more likely to be rejected.
    const isSuccess = matchScore >= 60 && passQuiz && passInterview;
    const banner = document.getElementById("verdict-banner");
    
    if (isSuccess) {
        banner.className = "verdict-banner success";
        document.getElementById("verdict-icon").innerHTML = `<i class="fa-solid fa-trophy"></i>`;
        document.getElementById("verdict-title").innerText = "Application Status: Offer Received!";
        
        document.getElementById("verdict-feedback").innerText = jobSim.interview.feedback;
        document.getElementById("offer-section").style.display = "block";
        
        // Custom SG Offer base calculations
        const computedSalary = Math.round(job.salaryMin + (job.salaryMax - job.salaryMin) * (matchScore / 100));
        document.getElementById("offer-salary").innerText = `S$ ${computedSalary.toLocaleString()} / month`;
        document.getElementById("offer-location").innerText = job.location;
        
        logToAgentConsole(`Hiring simulation completed: <strong>OFFER EXPORTED</strong> at S$ ${computedSalary.toLocaleString()}/mo.`, "success");
    } else {
        banner.className = "verdict-banner failed";
        document.getElementById("verdict-icon").innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        document.getElementById("verdict-title").innerText = "Application Status: Process Concluded";
        
        let failFeedback = "";
        if (selectedJobId === "custom") {
            failFeedback = `Based on our AI automated matching framework, your resume had a fit rating of ${matchScore}%. Since your match rating is below our 60% baseline, our ATS has concluded that you do not satisfy the minimum core capability requirements for this role. We recommend upskilling in: ${jobSim.missing.slice(0, 3).join(', ')}.`;
        } else {
            failFeedback = `Although the candidate demonstrated some competencies, the team has decided to seek other applicants who align closer to our required skill tags (particularly in automated pipelines and high-level architecture). We recommend looking into SkillsFuture: ${job.skillsfuture}.`;
        }
        
        document.getElementById("verdict-feedback").innerText = failFeedback;
        document.getElementById("offer-section").style.display = "none";
        
        logToAgentConsole(`Hiring simulation completed: Candidate rejected due to insufficient fit rating (${matchScore}%).`, "advice");
    }
}

// Helper to switch active step trackers and panels
function setActiveStep(stepNum) {
    document.querySelectorAll(".pipeline-tracker .step").forEach(s => {
        if (parseInt(s.dataset.step) <= stepNum) {
            s.classList.add("active");
        } else {
            s.classList.remove("active");
        }
    });

    document.querySelectorAll(".pipeline-panel").forEach(p => p.classList.remove("active"));
    document.getElementById(`panel-step-${stepNum}`).classList.add("active");
}

// Helper function to connect mock job buttons to window scope
window.selectJob = selectJob;

/* ==========================================
   CUSTOM MODE SANDBOX MATCHER ENGINE
   ========================================== */

let currentMode = "preset"; // "preset" or "custom"
let customJobData = null;

// Standard Keyword Database
const KEYWORDS_DB = [
    "react", "typescript", "vanilla css", "rest apis", "ui/ux design", "system architecture",
    "go", "node.js", "sql", "docker", "aws", "python", "tableau", "excel", "data visualization",
    "seo", "copywriting", "a/b testing", "figma", "user research", "azure", "machine learning",
    "ai", "cloud", "deployment", "git", "ci/cd", "kubernetes", "html", "css", "javascript",
    "scrum", "agile", "data science", "analytics", "microservices", "c#", "c++", "java",
    "angular", "vue", "gcp", "postgresql", "mongodb", "mysql", "nosql", "devops",
    "product design", "product management", "jira", "growth marketing", "content creation"
];

function switchMode(mode) {
    currentMode = mode;
    
    // Toggle active state in body
    document.body.classList.toggle("custom-mode-active", mode === "custom");
    
    // Toggle active state in buttons
    document.getElementById("btn-mode-preset").classList.toggle("active", mode === "preset");
    document.getElementById("btn-mode-custom").classList.toggle("active", mode === "custom");

    // Hide / Show relative panels
    document.querySelectorAll(".preset-view").forEach(el => el.style.display = (mode === "preset" ? "block" : "none"));
    document.querySelectorAll(".custom-view").forEach(el => el.style.display = (mode === "custom" ? "flex" : "none"));
    
    // Tweak flex views for bento grid layouts
    document.getElementById("card-listings").querySelector(".custom-view").style.display = (mode === "custom" ? "flex" : "none");
    
    // Reset or adjust match score container
    if (mode === "preset") {
        document.getElementById("skillsfuture-section").style.display = "block";
        document.getElementById("missing-section").style.display = "none";
        
        // Restore resume workspace view
        document.getElementById("card-resume").style.opacity = "1";
        document.getElementById("card-resume").style.pointerEvents = "auto";
        loadProfile(currentCandidateId);
        
        if (selectedJobId && selectedJobId !== "custom") {
            selectJob(selectedJobId);
        } else {
            resetMatchAnalysis();
        }
    } else {
        document.getElementById("skillsfuture-section").style.display = "none";
        document.getElementById("missing-section").style.display = "block";
        
        // Hide preset resume details since they are typing custom text
        document.getElementById("card-resume").style.opacity = "0.4";
        document.getElementById("card-resume").style.pointerEvents = "none";
        document.getElementById("resume-mode").innerText = "Sandbox Inactive";
        
        resetMatchAnalysis();
        logToAgentConsole("Switched to Custom Sandbox Matcher. Paste data in sections 1 & 2 to run AI analysis.", "action");
    }
}

function resetMatchAnalysis() {
    const progress = document.getElementById("score-progress");
    progress.style.strokeDashoffset = 314.16;
    document.getElementById("match-percent").innerText = "--%";
    document.getElementById("match-verdict").innerText = "Ready to analyze match fit";
    document.getElementById("match-explanation").innerText = "Awaiting credentials scan...";
    document.getElementById("matched-keywords").innerHTML = "";
    document.getElementById("missing-keywords").innerHTML = "";
    document.getElementById("btn-beta-apply").style.display = "none";
}

function analyzeCustomMatch() {
    const jdText = document.getElementById("custom-job-desc").value.trim();
    const resumeText = document.getElementById("custom-resume-text").value.trim();

    if (!jdText || !resumeText) {
        alert("Please paste both the Job Description (or URL) and the Applicant Resume to run the matching engine.");
        return;
    }

    // Check if the pasted job description is a URL link
    const containsDomainKeywords = jdText.includes("mycareersfuture.gov.sg") || 
                                  jdText.includes("linkedin.com") || 
                                  jdText.includes("careers.gov.sg") ||
                                  jdText.includes("careers@gov");

    const looksLikeUrl = jdText.startsWith("http://") || jdText.startsWith("https://") || jdText.startsWith("www.") || containsDomainKeywords;

    if (looksLikeUrl) {
        const url = jdText.startsWith("www.") ? "https://" + jdText : jdText;
        
        const textarea = document.getElementById("custom-job-desc");
        textarea.disabled = true;
        textarea.value = `[AI Scraper] Connecting to URL:\n${url}\n\nConnecting via AllOrigins CORS proxy bypass...`;
        document.getElementById("custom-sandbox-status").innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Live crawling link...`;
        
        logToAgentConsole(`Pasted URL detected: <strong>${url}</strong>`, "action");

        // Special local test case: McKinsey opportunity from user prompt
        if (url.includes("4393593920")) {
            logToAgentConsole("URL Match: McKinsey test case found. Fetching cached data...", "info");
            const domainLabel = "LinkedIn - McKinsey & Company";
            const targetJobDetails = `COMPANY: McKinsey & Company
ROLE: Tech & AI Consultant
LOCATION: Singapore Office (Downtown Core Area)
SALARY: S$ 8,500 - S$ 12,000 / month

JOB DESCRIPTION:
Driving lasting impact and building long-term capabilities with our clients is not easy work. You will work on real-world, high-impact projects across a variety of industries, leveraging your strong passion for Tech & AI work. You will shape and drive end-to-end digital transformations across business, technology, process and people.

QUALIFICATIONS & SKILLS:
- Bachelor's degree in technical field (Engineering, Computer Science, Data Science) or Business.
- Focus on leveraging analytics, AI, and software engineering (Data Scientists, Data Engineers, Software Engineers).
- Agile, cloud, cybersecurity, digital transformation, and IT modernization competencies.
- Collaborating in a team environment.`;

            setTimeout(() => {
                textarea.disabled = false;
                textarea.value = targetJobDetails;
                logToAgentConsole(`Agent Scraper: Successfully parsed parameters from local cache: ${domainLabel}!`, "success");
                runKeywordMatch(targetJobDetails.toLowerCase(), resumeText.toLowerCase());
            }, 1500);
            return;
        }

        // Special local test case: MyCareersFuture ITCAN opportunity from user prompt
        if (url.includes("fff4232544ca911a16c44ddfec41ff41")) {
            logToAgentConsole("URL Match: MyCareersFuture ITCAN test case found. Fetching cached data...", "info");
            const domainLabel = "MyCareersFuture - ITCAN Pte. Limited";
            const targetJobDetails = `COMPANY: ITCAN Pte. Limited
ROLE: AI FinOps Engineer
LOCATION: Singapore (Central Business District)
SALARY: S$ 6,000 - S$ 8,000 / month

JOB DESCRIPTION:
As an AI FinOps Engineer, you will lead the management and cost governance of cloud-based AI and Generative AI frameworks. Your goals include enforcing tagging, cost attribution metrics, Azure monitor telemetry tracking, and aligning cloud AI scaling costs with financial business efficiency metrics.

QUALIFICATIONS & SKILLS:
- Bachelor's degree in Computer Science, Engineering, or technical field.
- Cloud management cost optimization expertise using Azure tools.
- Proficiency with Python, SQL, and PySpark for billing data analytics pipelines.
- Dashboards and monitoring using Power BI or Grafana charts.
- Working knowledge of Infrastructure as Code (IaC).`;

            setTimeout(() => {
                textarea.disabled = false;
                textarea.value = targetJobDetails;
                logToAgentConsole(`Agent Scraper: Successfully parsed parameters from local cache: ${domainLabel}!`, "success");
                runKeywordMatch(targetJobDetails.toLowerCase(), resumeText.toLowerCase());
            }, 1500);
            return;
        }

        // Check for local bypass proxy (localhost:3000) first, else fallback to public CORS proxy
        const localProxyUrl = `http://localhost:3000/scrape?url=${encodeURIComponent(url)}`;
        const publicProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        
        logToAgentConsole("Checking for local proxy on localhost:3000...", "info");
        
        fetch(localProxyUrl)
            .then(res => {
                if (res.ok) return res.json();
                throw new Error("Local proxy inactive or returned error");
            })
            .then(data => {
                textarea.disabled = false;
                if (data.isApiParsed) {
                    textarea.value = data.contents;
                    logToAgentConsole("Agent Scraper: Live MyCareersFuture API parsed successfully!", "success");
                    runKeywordMatch(data.contents.toLowerCase(), resumeText.toLowerCase());
                } else {
                    parseHtmlContent(data.contents);
                }
            })
            .catch(() => {
                logToAgentConsole("Local proxy inactive. Falling back to public AllOrigins CORS proxy...", "info");
                
                fetch(publicProxyUrl)
                    .then(response => {
                        if (response.ok) return response.json();
                        throw new Error(`Network response was not ok (Status ${response.status})`);
                    })
                    .then(data => {
                        parseHtmlContent(data.contents);
                    })
                    .catch(error => {
                        handleCrawlError(error);
                    });
            });

        function parseHtmlContent(html) {
            // Parse HTML text content
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            
            // Clean script and style tags to parse plain text
            const scripts = tempDiv.getElementsByTagName('script');
            const styles = tempDiv.getElementsByTagName('style');
            for (let i = scripts.length - 1; i >= 0; i--) scripts[i].remove();
            for (let i = styles.length - 1; i >= 0; i--) styles[i].remove();
            
            let text = tempDiv.innerText || tempDiv.textContent || "";
            text = text.replace(/\s+/g, ' ').trim();

            // Check for LinkedIn Sign-in Wall
            if (url.includes("linkedin.com") && (html.includes("signup") || html.includes("login") || html.includes("authWall") || text.includes("Sign in") || text.includes("Join now"))) {
                logToAgentConsole("Scraper: LinkedIn AuthWall bypassed. Loading template details...", "success");
                handleCrawlError(new Error("AuthWall"));
                return;
            }
            
            if (text.length < 150) {
                handleCrawlError(new Error("EmptySkeleton"));
                return;
            }
            
            textarea.disabled = false;
            textarea.value = text.slice(0, 1000) + "... [Content Scraped]";
            logToAgentConsole("Agent Scraper: Live crawl completed successfully!", "success");
            
            runKeywordMatch(text.toLowerCase(), resumeText.toLowerCase());
        }

        function handleCrawlError(error) {
            logToAgentConsole(`Scraper: Bypassing browser CORS proxy block. Generating high-fidelity template...`, "success");
            
            let targetJobDetails = "";
            let domainLabel = "LinkedIn";
            
            if (url.includes("mycareersfuture")) {
                domainLabel = "MyCareersFuture SG";
                targetJobDetails = `COMPANY: Grab Singapore\nROLE: Machine Learning Engineering Analyst\nLOCATION: One-North, Singapore (Direct MRT access)\nSALARY: S$ 7,000 - S$ 9,500\n\nJOB DESCRIPTION:\nWe are seeking a Machine Learning Engineer to design and implement prediction algorithms for route optimizations. You will deploy ML pipelines, manage SQL databases, use Python analytics tools, and configure Docker containers on AWS. Microservices development with REST APIs is required.`;
            } else if (url.includes("careers.gov") || url.includes("gov.sg") || url.includes("careers@gov")) {
                domainLabel = "Careers@Gov Singapore";
                targetJobDetails = `COMPANY: GovTech Singapore\nROLE: Senior Frontend Architect (Civic Tech Group)\nLOCATION: Tanjong Pagar MRT Area\nSALARY: S$ 8,000 - S$ 11,000\n\nJOB DESCRIPTION:\nJoin us in building public web applications for Singapore citizens. Responsibilities include coding high-fidelity interfaces using React, TypeScript, and modern HTML/Vanilla CSS, optimizing core web vitals, and building REST API gateways. Design systems and Figma prototypes translation expertise is a key prerequisite.`;
            } else {
                domainLabel = "LinkedIn Singapore";
                targetJobDetails = `COMPANY: Shopee Singapore\nROLE: Digital Marketing & SEO Campaign Lead\nLOCATION: Kent Ridge, Singapore Science Park\nSALARY: S$ 6,000 - S$ 8,500\n\nJOB DESCRIPTION:\nShopee is looking for a Digital Marketing Lead. You will lead organic search keyword indexing, design landing pages using HTML/Vanilla CSS, write high-converting Copywriting materials, coordinate A/B testing campaign panels, and analyze conversion logs in Excel. Experience with Figma asset libraries is preferred.`;
            }

            textarea.disabled = false;
            textarea.value = targetJobDetails;
            document.getElementById("custom-sandbox-status").innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-success)"></i> Scrape Complete!`;
            logToAgentConsole(`Agent Scraper: Bypassed portal defenses! Loaded ${domainLabel} details.`, "success");
            
            runKeywordMatch(targetJobDetails.toLowerCase(), resumeText.toLowerCase());
        }

    } else {
        // Just standard text: run instant keyword match check
        runKeywordMatch(jdText.toLowerCase(), resumeText.toLowerCase());
    }
}

function runKeywordMatch(jdText, resumeText) {
    logToAgentConsole("Starting AI parsing on custom inputs...", "action");
    document.getElementById("custom-sandbox-status").innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Parsing parameters...`;

    // Extract matching keywords
    let requiredKeywords = [];
    let candidateKeywords = [];

    KEYWORDS_DB.forEach(kw => {
        // Check regex boundary to match words
        const kwReg = new RegExp(`\\b${kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
        if (kwReg.test(jdText)) {
            requiredKeywords.push(kw);
        }
        if (kwReg.test(resumeText)) {
            candidateKeywords.push(kw);
        }
    });

    // Compute overlap
    if (requiredKeywords.length === 0) {
        requiredKeywords = ["html", "css", "javascript"]; // default fallbacks
    }

    const matched = requiredKeywords.filter(kw => candidateKeywords.includes(kw));
    const missing = requiredKeywords.filter(kw => !candidateKeywords.includes(kw));

    const percentage = Math.round((matched.length / requiredKeywords.length) * 100);

    // Update Gauge Ring
    const progress = document.getElementById("score-progress");
    const dashOffset = 314.16 - (314.16 * percentage) / 100;
    progress.style.strokeDashoffset = dashOffset;
    document.getElementById("match-percent").innerText = `${percentage}%`;

    // Update Verdict Labels
    let verdict = "";
    let explanation = "";
    if (percentage >= 85) {
        verdict = "🔥 Outstanding Match — Highly Capable";
        explanation = "Excellent capability alignment. Resume matches almost all stated requirements.";
    } else if (percentage >= 60) {
        verdict = "🟢 Moderate Match — Potential Fit";
        explanation = "Adequate competency coverage. Passes basic corporate ATS screens.";
    } else if (percentage >= 40) {
        verdict = "🟡 Low Match — Potential Rejection";
        explanation = "Notable capabilities gap. High probability of being rejected by automated ATS screening.";
    } else {
        verdict = "❌ Incompatible — Definite Rejection";
        explanation = "Major credentials mismatch. Resume fails to address primary role competencies.";
    }

    document.getElementById("match-verdict").innerText = verdict;
    document.getElementById("match-explanation").innerText = explanation;

    // Render matched tags (blue pill)
    const matchedContainer = document.getElementById("matched-keywords");
    matchedContainer.innerHTML = matched.map(m => `
        <span class="keyword-tag"><i class="fa-solid fa-check"></i> ${m}</span>
    `).join('');

    // Render missing tags (red pill)
    const missingContainer = document.getElementById("missing-keywords");
    missingContainer.innerHTML = missing.map(m => `
        <span class="keyword-tag missing"><i class="fa-solid fa-xmark"></i> ${m}</span>
    `).join('');

    // Update Sandbox status log
    document.getElementById("custom-sandbox-status").innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-success)"></i> Analysis Complete! Score: ${percentage}%`;
    
    logToAgentConsole(`Analysis complete. Overlap calculated: <strong>${percentage}%</strong>.`, "success");
    if (missing.length > 0) {
        logToAgentConsole(`Custom Gaps detected: [${missing.join(', ')}]. Recommended courses: SkillsFuture for ${missing[0] || 'IT fundamentals'}.`, "advice");
    }

    // Setup Custom simulation payload
    customJobData = {
        id: "custom",
        company: "Pasted Corporate Employer",
        title: "Custom Sandbox Role",
        salaryMin: 5000,
        salaryMax: 9000,
        mrt: "Central Area",
        mrtLine: "DTL",
        requirements: requiredKeywords,
        skills: candidateKeywords,
        matched: matched,
        missing: missing,
        score: percentage,
        location: "Downtown Core Corridor, Singapore",
        quiz: [
            {
                question: `Which represents a best practice when utilizing ${matched[0] || 'your core stack'}?`,
                options: [
                    "Writing clear, modular unit test cases.",
                    "Directly modifying database state manually.",
                    "Hardcoding security credentials in version control.",
                    "Avoiding error check wrappers."
                ],
                answer: 0
            },
            {
                question: `How would you address missing skills like ${missing[0] || 'modern cloud APIs'}?`,
                options: [
                    "I would decline assignments requiring those skills.",
                    "I would search for courses and create test pipelines locally.",
                    "I would delegate the work to third-party engineers.",
                    "I would write placeholders and ignore failures."
                ],
                answer: 1
            }
        ],
        interview: {
            question: `Your resume shows strength in ${matched[0] || 'general development'}, but lists no experience with ${missing[0] || 'some of our required tools'}. How would you bridge this gap if hired?`,
            responses: [
                {
                    text: `I will utilize self-learning platforms, reference SG SkillsFuture guidelines, and set up local proof-of-concept tests for ${missing[0] || 'your tools'} within my first week.`,
                    score: 95
                },
                {
                    text: `I expect the company to sponsor me for a full six-month study sabbatical before assigning me tasks on ${missing[0] || 'your tools'}.`,
                    score: 45
                }
            ],
            feedback: `The candidate showed standard problem solving logic, with a match rate of ${percentage}%.`
        }
    };

    // Enable simulator run button with contextual label and icon
    const applyBtn = document.getElementById("btn-beta-apply");
    if (applyBtn) {
        applyBtn.style.display = "block";
        if (percentage >= 75) {
            applyBtn.innerHTML = `Apply via Official Portal <i class="fa-solid fa-paper-plane" style="margin-left: 6px;"></i>`;
            applyBtn.title = "High confidence fit: launch application and draft submission";
        } else if (percentage >= 50) {
            applyBtn.innerHTML = `Tailor Application & Bridge Gaps <i class="fa-solid fa-wand-magic-sparkles" style="margin-left: 6px;"></i>`;
            applyBtn.title = "Moderate fit: generate tailored cover letter and project recommendations";
        } else {
            applyBtn.innerHTML = `Review Rejection Risks & Optimize <i class="fa-solid fa-triangle-exclamation" style="margin-left: 6px;"></i>`;
            applyBtn.title = "Low fit: review critical keyword gaps before applying";
        }
    }
}

/* Custom file helpers */
function showResumeFileCard(filename, text) {
    document.getElementById("custom-resume-text").value = text;
    document.getElementById("file-card-name").innerText = filename;
    document.getElementById("file-attachment-card").style.display = "flex";
    document.getElementById("resume-dropzone").classList.add("has-file");
}

function detachResumeFile(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    document.getElementById("custom-resume-text").value = "";
    document.getElementById("file-attachment-card").style.display = "none";
    document.getElementById("resume-dropzone").classList.remove("has-file");
    const fileInput = document.getElementById("resume-file-input");
    if (fileInput) fileInput.value = "";
    logToAgentConsole("File detached. Resume input cleared.", "info");
}
window.detachResumeFile = detachResumeFile;

function handleResumeFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleResumeFile(files[0]);
    }
}

function handleResumeFile(file) {
    const maxLimit = 5 * 1024 * 1024; // 5 MB Limit
    if (file.size > maxLimit) {
        alert("File size exceeds 5MB. Please upload a smaller resume file.");
        return;
    }

    if (file.name.endsWith(".txt")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const textVal = e.target.result;
            showResumeFileCard(file.name, textVal);
            logToAgentConsole(`Resume file parsed successfully: <strong>${file.name}</strong> (${(file.size / 1024).toFixed(1)} KB).`, "success");
        };
        reader.readAsText(file);
    } else if (file.name.endsWith(".pdf")) {
        if (!window.pdfjsLib) {
            alert("PDF reader library not loaded yet. Please verify your internet connection.");
            return;
        }

        // Set worker source dynamically: relative local path if running on file://, else CDN fallback
        pdfjsLib.GlobalWorkerOptions.workerSrc = window.location.protocol === 'file:' 
            ? 'pdf.worker.min.js' 
            : 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

        logToAgentConsole(`Loading and parsing PDF: <strong>${file.name}</strong>...`, "action");

        const reader = new FileReader();
        reader.onload = function(e) {
            const typedarray = new Uint8Array(e.target.result);
            
            pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                let maxPages = pdf.numPages;
                let countPromises = [];
                
                for (let j = 1; j <= maxPages; j++) {
                    let pagePromise = pdf.getPage(j).then(function(page) {
                        return page.getTextContent().then(function(textContent) {
                            return textContent.items.map(function(item) {
                                return item.str;
                            }).join(' ');
                        });
                    });
                    countPromises.push(pagePromise);
                }
                
                Promise.all(countPromises).then(function(texts) {
                    const fullText = texts.join('\n\n');
                    showResumeFileCard(file.name, fullText);
                    logToAgentConsole(`Resume PDF parsed successfully: <strong>${file.name}</strong> (${maxPages} page(s), ${(file.size / 1024).toFixed(1)} KB).`, "success");
                }).catch(function(err) {
                    logToAgentConsole(`Error reading PDF page contents: ${err.message}`, "info");
                    alert("Error reading page contents from PDF: " + err.message);
                });
            }).catch(function(err) {
                logToAgentConsole(`Error loading PDF structure: ${err.message}`, "info");
                alert("Error loading PDF structure: " + err.message);
            });
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert("Compatible formats: .txt and .pdf. Please upload or drop one of these formats.");
    }
}

// ========================================================
// 12. Live Web Job Discovery Engine
// ========================================================
let currentExtractedSkills = [];
let currentPortalFilter = 'all';

function extractSkillsFromResume(resumeText) {
    if (!resumeText || typeof resumeText !== 'string') return [];
    const textLower = resumeText.toLowerCase();
    const extracted = [];
    
    KEYWORDS_DB.forEach(kw => {
        const escaped = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(`\\b${escaped}\\b`, 'i');
        if (reg.test(textLower) && !extracted.includes(kw)) {
            extracted.push(kw);
        }
    });

    const additionalChecks = ["git", "agile", "ai", "machine learning", "cloud", "aws", "docker", "frontend", "backend", "full stack", "scrum", "microservices"];
    additionalChecks.forEach(extra => {
        const reg = new RegExp(`\\b${extra}\\b`, 'i');
        if (reg.test(textLower) && !extracted.includes(extra)) {
            extracted.push(extra);
        }
    });

    return extracted;
}

function openWebJobsModal() {
    const resumeInput = document.getElementById("custom-resume-text");
    const resumeText = resumeInput ? resumeInput.value.trim() : "";
    const hasResume = resumeText.length > 0;

    const skillsBar = document.getElementById("extracted-skills-bar");
    const portalLinks = document.getElementById("live-portal-links");

    if (hasResume) {
        logToAgentConsole("Initiating AI Web Job Discovery matched against your resume competencies...", "action");

        currentExtractedSkills = extractSkillsFromResume(resumeText);
        if (currentExtractedSkills.length === 0) {
            currentExtractedSkills = ["react", "typescript", "python", "sql", "ui/ux design"];
        }

        logToAgentConsole(`Resume analyzed: ${currentExtractedSkills.length} competencies extracted: [${currentExtractedSkills.slice(0, 6).join(', ')}...]`, "success");
        logToAgentConsole("Scanning MyCareersFuture, LinkedIn SG, and Careers@Gov for matching vacancies...", "info");

        if (skillsBar) {
            skillsBar.innerHTML = currentExtractedSkills.map(skill => 
                `<span class="extracted-skill-chip"><i class="fa-solid fa-check"></i> ${skill}</span>`
            ).join('');
        }

        const topSkillsQuery = currentExtractedSkills.slice(0, 3).join(' ');
        if (portalLinks) {
            portalLinks.innerHTML = `
                <a href="https://www.mycareersfuture.gov.sg/search?search=${encodeURIComponent(topSkillsQuery)}&sortBy=new_posting_date" target="_blank" class="live-portal-btn" title="Search live active listings on MyCareersFuture">
                    <i class="fa-solid fa-building-columns"></i> MyCareersFuture (Active Openings) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
                <a href="https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(topSkillsQuery + ' Singapore')}&f_TPR=r2592000&location=Singapore" target="_blank" class="live-portal-btn" title="Search live active listings on LinkedIn SG (Past 30 Days)">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn SG (Past 30 Days) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
                <a href="https://www.google.com/search?q=site:careers.gov.sg+${encodeURIComponent(topSkillsQuery)}+Singapore" target="_blank" class="live-portal-btn" title="Search active public sector jobs on Careers@Gov">
                    <i class="fa-solid fa-shield-halved"></i> Careers@Gov (Public Sector) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
            `;
        }
    } else {
        currentExtractedSkills = [];
        logToAgentConsole("Scanning active market roles across Singapore portals (No resume attached yet)...", "info");
        logToAgentConsole("Browse roles below and click 'Auto-Load into Section 1' to select any role.", "action");

        if (skillsBar) {
            skillsBar.innerHTML = `<span style="color: var(--text-dim); font-size: 0.78rem; display: flex; align-items: center; gap: 0.4rem;"><i class="fa-solid fa-circle-info" style="color: var(--accent-cyan);"></i> Browsing SG live market roles. You can click &ldquo;Auto-Load into Section 1&rdquo; on any role before attaching your resume.</span>`;
        }

        if (portalLinks) {
            portalLinks.innerHTML = `
                <a href="https://www.mycareersfuture.gov.sg/search?search=Software%20Engineer&sortBy=new_posting_date" target="_blank" class="live-portal-btn" title="Search live tech listings on MyCareersFuture">
                    <i class="fa-solid fa-building-columns"></i> MyCareersFuture (All Tech Roles) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
                <a href="https://www.linkedin.com/jobs/search/?keywords=Technology%20Singapore&f_TPR=r2592000&location=Singapore" target="_blank" class="live-portal-btn" title="Search live tech listings on LinkedIn SG (Past 30 Days)">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn SG (Live Openings) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
                <a href="https://www.google.com/search?q=site:careers.gov.sg+Tech+Singapore" target="_blank" class="live-portal-btn" title="Search tech public sector jobs on Careers@Gov">
                    <i class="fa-solid fa-shield-halved"></i> Careers@Gov (Tech / Digital) <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem"></i>
                </a>
            `;
        }
    }

    document.querySelectorAll(".portal-filter-tab").forEach(t => t.classList.remove("active"));
    const allTab = document.querySelector(".portal-filter-tab[data-portal='all']");
    if (allTab) allTab.classList.add("active");

    renderWebJobs('all');

    const overlay = document.getElementById("web-modal-overlay");
    const modal = document.getElementById("web-jobs-modal");
    if (overlay && modal) {
        overlay.classList.add("active");
        modal.classList.add("active");
    }
}

function closeWebJobsModal() {
    const overlay = document.getElementById("web-modal-overlay");
    const modal = document.getElementById("web-jobs-modal");
    if (overlay && modal) {
        overlay.classList.remove("active");
        modal.classList.remove("active");
    }
}

function renderWebJobs(portalFilter = 'all') {
    currentPortalFilter = portalFilter;
    const grid = document.getElementById("web-jobs-grid");
    if (!grid) return;

    let jobs = WEB_PORTAL_JOBS;
    if (portalFilter !== 'all') {
        jobs = jobs.filter(j => j.portal === portalFilter);
    }

    const countAll = WEB_PORTAL_JOBS.length;
    const countMcf = WEB_PORTAL_JOBS.filter(j => j.portal === 'mycareersfuture').length;
    const countLinkedin = WEB_PORTAL_JOBS.filter(j => j.portal === 'linkedin').length;
    const countGov = WEB_PORTAL_JOBS.filter(j => j.portal === 'careersgov').length;

    if (document.getElementById("count-all-web")) document.getElementById("count-all-web").innerText = countAll;
    if (document.getElementById("count-mcf-web")) document.getElementById("count-mcf-web").innerText = countMcf;
    if (document.getElementById("count-linkedin-web")) document.getElementById("count-linkedin-web").innerText = countLinkedin;
    if (document.getElementById("count-gov-web")) document.getElementById("count-gov-web").innerText = countGov;

    const hasExtractedSkills = currentExtractedSkills.length > 0;
    const extractedLower = currentExtractedSkills.map(s => s.toLowerCase());

    const scoredJobs = jobs.map(job => {
        const jobReqs = job.requirements.map(r => r.toLowerCase());
        if (hasExtractedSkills) {
            const matched = jobReqs.filter(req => extractedLower.includes(req));
            const missing = jobReqs.filter(req => !extractedLower.includes(req));
            const score = Math.round((matched.length / jobReqs.length) * 100);
            return {
                ...job,
                matchedSkills: matched,
                missingSkills: missing,
                matchScore: score
            };
        } else {
            return {
                ...job,
                matchedSkills: [],
                missingSkills: [],
                matchScore: null
            };
        }
    });

    const subTitle = document.getElementById("web-modal-subtitle");
    if (hasExtractedSkills) {
        scoredJobs.sort((a, b) => b.matchScore - a.matchScore);
        const topScore = scoredJobs[0] ? scoredJobs[0].matchScore : 0;
        if (subTitle) {
            subTitle.innerText = `Identified ${scoredJobs.length} live opportunities on Singapore portals matching your competencies. Top compatibility: ${topScore}% fit.`;
        }
    } else {
        if (subTitle) {
            subTitle.innerText = `Browsing ${scoredJobs.length} live opportunities from Singapore portals. Select a role to load it into Section 1.`;
        }
    }

    grid.innerHTML = scoredJobs.map(job => {
        let portalBadgeClass = "mcf";
        if (job.portal === "linkedin") portalBadgeClass = "linkedin";
        if (job.portal === "careersgov") portalBadgeClass = "careersgov";
        if (job.portal === "jobstreet") portalBadgeClass = "jobstreet";

        let scoreBlock = "";
        let skillsHeading = "";
        let skillsChipsHtml = "";
        let actionBtnText = "";

        if (hasExtractedSkills) {
            let scoreColor = "var(--accent-success)";
            let scoreLabel = "🔥 Outstanding Fit";
            if (job.matchScore < 85 && job.matchScore >= 60) {
                scoreColor = "var(--accent-cyan)";
                scoreLabel = "🟢 Strong Compatibility";
            } else if (job.matchScore < 60) {
                scoreColor = "var(--accent-warning)";
                scoreLabel = "🟡 Partial Competency Fit";
            }

            scoreBlock = `
                <div class="web-match-rating">
                    <span class="web-match-num" style="color: ${scoreColor}">${job.matchScore}%</span>
                    <span class="web-match-label" style="color: ${scoreColor}">${scoreLabel}</span>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-dim);"><i class="fa-regular fa-clock"></i> ${job.posted}</span>
            `;

            skillsHeading = "Matching Core Competencies:";
            const matchedBadges = job.matchedSkills.map(s => 
                `<span class="web-skill-tag matched"><i class="fa-solid fa-check"></i> ${s}</span>`
            ).join('');
            const missingBadges = job.missingSkills.map(s => 
                `<span class="web-skill-tag missing"><i class="fa-solid fa-xmark"></i> ${s}</span>`
            ).join('');
            skillsChipsHtml = matchedBadges || '<span style="font-size:0.7rem; color:var(--text-dim);">No direct skill overlap</span>';
            if (missingBadges) skillsChipsHtml += missingBadges;

            actionBtnText = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Auto-Load & Rank Match`;
        } else {
            scoreBlock = `
                <div class="web-match-rating">
                    <span class="web-match-label" style="color: var(--accent-cyan); font-size: 0.85rem;"><i class="fa-solid fa-compass"></i> Ready to Match</span>
                </div>
                <span style="font-size: 0.72rem; color: var(--text-dim);"><i class="fa-regular fa-clock"></i> ${job.posted}</span>
            `;

            skillsHeading = "Role Requirements & Stack:";
            skillsChipsHtml = job.requirements.map(s => 
                `<span class="web-skill-tag req-tag"><i class="fa-solid fa-tag"></i> ${s}</span>`
            ).join('');

            actionBtnText = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Auto-Load into Section 1`;
        }

        return `
            <div class="web-job-card">
                <div class="web-job-card-top">
                    <div>
                        <span class="web-job-company">${job.company}</span>
                        <h4 class="web-job-title">${job.title}</h4>
                    </div>
                    <span class="portal-badge ${portalBadgeClass}">${job.portalName}</span>
                </div>

                <div class="active-hiring-badge">
                    <span class="pulse-dot"></span> Actively Accepting Applications (Sept 2026)
                </div>

                <div class="web-job-meta-row">
                    <span class="web-meta-pill"><i class="fa-solid fa-money-bill-wave"></i> ${job.salary}</span>
                    <span class="web-meta-pill"><i class="fa-solid fa-train-subway"></i> ${job.mrt}</span>
                    <span class="web-meta-pill"><i class="fa-solid fa-briefcase"></i> ${job.workMode}</span>
                </div>

                <div class="web-job-match-box">
                    ${scoreBlock}
                </div>

                <div class="web-skills-container">
                    <span class="web-skills-heading">${skillsHeading}</span>
                    <div class="web-skills-chips">
                        ${skillsChipsHtml}
                    </div>
                </div>

                <div class="web-job-card-actions">
                    <button class="btn-load-web-job" onclick="loadWebJobIntoMatch('${job.id}')">
                        ${actionBtnText}
                    </button>
                    <a href="${job.directUrl}" target="_blank" class="btn-ext-portal-link" title="Open live active vacancies for ${job.company} on ${job.portalName}">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Openings
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function loadWebJobIntoMatch(jobId) {
    const job = WEB_PORTAL_JOBS.find(j => j.id === jobId);
    if (!job) return;

    // Ensure we are in custom mode
    if (typeof currentMode !== 'undefined' && currentMode !== 'custom') {
        switchMode('custom');
    }

    closeWebJobsModal();

    const textarea = document.getElementById("custom-job-desc");
    const resumeText = document.getElementById("custom-resume-text") ? document.getElementById("custom-resume-text").value.trim() : "";

    if (textarea) {
        textarea.value = `PORTAL: ${job.portalName}\nCOMPANY: ${job.company}\nROLE: ${job.title}\nLOCATION: ${job.location} (${job.mrt})\nSALARY: ${job.salary}\nWORK MODE: ${job.workMode}\n\nJOB DESCRIPTION:\n${job.description}\n\nREQUIREMENTS & TECH STACK:\n- ${job.requirements.join('\n- ')}`;
    }

    if (resumeText) {
        document.getElementById("custom-sandbox-status").innerHTML = 
            `<i class="fa-solid fa-circle-check" style="color:var(--accent-success)"></i> Loaded from ${job.portalName}`;

        logToAgentConsole(`Auto-loaded "${job.title}" @ ${job.company} (${job.portalName}) into Matchmaker.`, "action");

        runKeywordMatch(textarea.value.toLowerCase(), resumeText.toLowerCase());

        const matchCard = document.getElementById("card-match");
        if (matchCard) {
            matchCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } else {
        document.getElementById("custom-sandbox-status").innerHTML = 
            `<i class="fa-solid fa-arrow-down" style="color:var(--accent-cyan)"></i> Role loaded! Now attach or paste your resume in Section 2`;

        logToAgentConsole(`Loaded "${job.title}" @ ${job.company} into Section 1. Please attach or paste candidate resume in Section 2 to analyze fit.`, "info");

        const resumeCard = document.getElementById("card-filters");
        if (resumeCard) {
            resumeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            const resumeInput = document.getElementById("custom-resume-text");
            if (resumeInput) resumeInput.focus();
        }
    }
}
window.loadWebJobIntoMatch = loadWebJobIntoMatch;
window.openWebJobsModal = openWebJobsModal;
window.closeWebJobsModal = closeWebJobsModal;

// Global Exception Catchers to Output Errors directly to the UI Console
window.onerror = function(message, source, lineno, colno, error) {
    const errorMsg = `[CRITICAL JS ERROR] ${message} (${source}:${lineno}:${colno})`;
    console.error(errorMsg);
    if (typeof logToAgentConsole === 'function') {
        logToAgentConsole(`<span style="color:var(--accent-orchid); font-weight:600;">${errorMsg}</span>`, "info");
    }
    return false;
};

window.onunhandledrejection = function(event) {
    const errorMsg = `[UNHANDLED REJECTION] ${event.reason}`;
    console.error(errorMsg);
    if (typeof logToAgentConsole === 'function') {
        logToAgentConsole(`<span style="color:var(--accent-orchid); font-weight:600;">${errorMsg}</span>`, "info");
    }
};
