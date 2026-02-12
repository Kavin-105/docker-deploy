export default function Education() {
    const education = [
        {
            institution: 'Kongu Engineering College',
            location: 'Erode, India',
            degree: 'Bachelor of Engineering in Computer Science & Engineering',
            period: '2023 — 2027',
            grade: 'CGPA: 8.15',
            icon: '🎓',
        },
        {
            institution: 'KRP Matriculation Higher Secondary School',
            location: 'Namakkal, India',
            degree: 'HSC (12th Grade)',
            period: '2023',
            grade: 'Grade: 86%',
            icon: '📚',
        },
    ]

    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">My <span className="accent">Education</span></h2>
                    <p className="section-subtitle">Academic journey and qualifications</p>
                </div>
                <div className="education-timeline fade-in">
                    {education.map((edu, idx) => (
                        <div className="edu-card" key={idx}>
                            <div className="edu-icon">{edu.icon}</div>
                            <div className="edu-content">
                                <div className="edu-header">
                                    <h3 className="edu-institution">{edu.institution}</h3>
                                    <span className="edu-period">{edu.period}</span>
                                </div>
                                <p className="edu-degree">{edu.degree}</p>
                                <p className="edu-location">{edu.location}</p>
                                <span className="edu-grade">{edu.grade}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
