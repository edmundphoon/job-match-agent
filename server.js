const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/scrape', async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl) {
        return res.status(400).json({ error: 'Missing target URL query param' });
    }
    
    console.log(`[Proxy] Fetching target: ${targetUrl}`);
    
    try {
        let finalUrl = targetUrl;
        // If it's a MyCareersFuture link, extract the 32-character Job ID and call the JSON API directly
        if (targetUrl.includes('mycareersfuture.gov.sg/job/')) {
            const matches = targetUrl.match(/-([a-f0-9]{32})(\?|$)/);
            if (matches && matches[1]) {
                finalUrl = `https://api.mycareersfuture.gov.sg/v2/jobs/${matches[1]}`;
                console.log(`[Proxy] Detected MyCareersFuture URL. Fetching JSON API directly: ${finalUrl}`);
            }
        }
        
        const response = await axios.get(finalUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            },
            timeout: 5000
        });
        
        // If we fetched the JSON API, format it into a readable text block
        if (finalUrl.includes('api.mycareersfuture.gov.sg')) {
            const job = response.data;
            const textContent = `
COMPANY: ${job.company.name}
ROLE: ${job.title}
SALARY: S$ ${job.salary.minimum} - S$ ${job.salary.maximum}
LOCATION: ${job.address.district || 'Singapore'}

JOB DESCRIPTION:
${job.description.replace(/<[^>]*>/g, '')}

REQUIREMENTS:
${job.requirements.replace(/<[^>]*>/g, '')}
            `;
            res.json({ contents: textContent, isApiParsed: true });
        } else {
            res.json({ contents: response.data, isApiParsed: false });
        }
        
    } catch (error) {
        console.error(`[Error] Failed to fetch: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 SG Job Matchmaker Local Proxy Server Running!`);
    console.log(`👉 Address: http://localhost:${PORT}`);
    console.log(`==================================================\n`);
});
