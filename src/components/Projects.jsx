export default function Projects() {
    const projects = [
        {
            title: 'Quiz Website',
            tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
            desc: 'A quiz platform that allows users to attempt quizzes, store scores in a database, and provides a simple, user-friendly interface for learning and engagement.',
            link: 'https://github.com/Kavin-105',
        },
        {
            title: 'EV Charging Station Locator',
            tech: ['HTML', 'CSS', 'PHP'],
            desc: 'A web application to help users locate nearby EV charging stations with interactive maps, real-time station data, and responsive design for seamless accessibility.',
            link: 'https://github.com/Kavin-105',
        },
        {
            title: 'E-Voting Platform',
            tech: ['MongoDB', 'Express', 'React', 'Node.js'],
            desc: 'A secure online voting system for institutions with user authentication, live vote counting, automated result declaration, ensuring transparency and reliability.',
            link: 'https://github.com/Kavin-105',
        },
    ]

    return (
        <section id="projects" className="section section-alt">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
                    <p className="section-subtitle">Things I've built and contributed to</p>
                </div>
                <div className="projects-grid fade-in">
                    {projects.map((project, idx) => (
                        <div className="project-card" key={idx}>
                            <div className="project-number">0{idx + 1}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-tech">
                                {project.tech.map(t => (
                                    <span className="tech-pill" key={t}>{t}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View on GitHub
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
