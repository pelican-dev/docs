import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage: React.FC = () => {
    const [stars, setStars] = useState<number>(0);
    const [openIssues, setOpenIssues] = useState<number>(0);
    const [closedIssues, setClosedIssues] = useState<number>(0);
    const [issuePercentage, setIssuePercentage] = useState<number>(0);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const [starsResponse, openIssuesResponse, closedIssuesResponse] = await Promise.all([
                    axios.get('https://api.github.com/repos/pelican-dev/panel'),
                    axios.get('https://api.github.com/repos/pelican-dev/panel/issues?state=open'),
                    axios.get('https://api.github.com/repos/pelican-dev/panel/issues?state=closed')
                ]);

                setStars(starsResponse.data.stargazers_count);
                setOpenIssues(openIssuesResponse.data.length);
                setClosedIssues(closedIssuesResponse.data.length);

                // Calculate the percentage of open issues relative to the total issues
                const totalIssues = openIssuesResponse.data.length + closedIssuesResponse.data.length;
                if (totalIssues > 0) {
                    setIssuePercentage((openIssuesResponse.data.length / totalIssues) * 100);
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchRepoData();
    }, []);

    return (
        <div className="homepage">
            <header>
                <h1>Welcome to Pelican</h1>
            </header>
            <main>
                <p>Welcome to Pelican! Your open-source game hosting control panel.</p>
                <p>Empower your gaming community with Pelican's powerful features and intuitive interface.</p>
                <p>Easily manage game servers, monitor performance, and engage with players effortlessly.</p>
                <p>Current stars on GitHub: {stars}</p>
                <p>Number of open issues: {openIssues}</p>
                <p>Number of closed issues: {closedIssues}</p>
                <p>Open issues: {issuePercentage}%</p>
            </main>
            <footer>
                <p>Get started with Pelican today and take your gaming experience to the next level!</p>
            </footer>
        </div>
    );
};

export default Homepage;
