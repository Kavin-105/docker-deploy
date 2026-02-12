export default function About() {
    return (
        <section id="about" className="section section-alt">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">About <span className="accent">Me</span></h2>
                    <p className="section-subtitle">A passionate developer eager to innovate</p>
                </div>
                <div className="about-content fade-in">
                    <div className="about-card">
                        <p className="about-text">
                            I am a Computer Science and Engineering student with interests in Artificial Intelligence,
                            data processing, and full-stack development. I have hands-on experience in projects
                            involving satellite image analysis, secure platforms, and real-time web applications.
                            Now I have started my App Development journey. I am eager to apply my technical skills
                            to develop innovative and impactful solutions.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">8.15</span>
                                <span className="stat-label">CGPA</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4+</span>
                                <span className="stat-label">Hackathon Wins</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Certifications</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
