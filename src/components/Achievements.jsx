export default function Achievements() {
    const achievements = [
        {
            icon: '🏆',
            title: 'First Place — Renaissance\'24',
            desc: 'Won first place in Idea Presentation at the Renaissance\'24 competition.',
        },
        {
            icon: '⚡',
            title: '24-Hour Hackathon — Hackbuzz',
            desc: 'Participated and competed in the intense 24-hour Hackbuzz hackathon.',
        },
        {
            icon: '📄',
            title: 'Predictive Maintenance (PdM)',
            desc: 'Paper presented on Predictive Maintenance in machines at CIT, Coimbatore.',
        },
        {
            icon: '🥇',
            title: 'First Place — 12-Hour Hackathon',
            desc: 'Won first place in the 12-hour hackathon conducted by MCA (Greentechlife).',
        },
    ]

    const certifications = [
        { name: 'MongoDB Associate Developer', icon: '🍃' },
        { name: 'OCI AI Foundations', icon: '☁️' },
    ]

    const leadership = [
        { role: 'Member', org: 'Rotract Club' },
        { role: 'Placement Coordinator', org: 'from III Semester' },
    ]

    return (
        <section id="achievements" className="section section-alt">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Achievements & <span className="accent">Certifications</span></h2>
                    <p className="section-subtitle">Awards, certifications, and leadership roles</p>
                </div>

                <div className="achievements-grid fade-in">
                    {achievements.map((a, idx) => (
                        <div className="achievement-card" key={idx}>
                            <span className="achievement-icon">{a.icon}</span>
                            <h3>{a.title}</h3>
                            <p>{a.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="certs-leadership fade-in">
                    <div className="cert-section">
                        <h3 className="sub-heading">Certifications</h3>
                        <div className="cert-list">
                            {certifications.map((c, idx) => (
                                <div className="cert-item" key={idx}>
                                    <span>{c.icon}</span>
                                    <span>{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cert-section">
                        <h3 className="sub-heading">Leadership</h3>
                        <div className="cert-list">
                            {leadership.map((l, idx) => (
                                <div className="cert-item" key={idx}>
                                    <span>👤</span>
                                    <span><strong>{l.role}</strong> — {l.org}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
