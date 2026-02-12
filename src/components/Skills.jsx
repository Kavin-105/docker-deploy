export default function Skills() {
    const skillGroups = [
        {
            title: 'Languages',
            icon: '💻',
            items: ['Java', 'C', 'HTML', 'CSS', 'JavaScript', 'C++'],
        },
        {
            title: 'Libraries & Frameworks',
            icon: '📦',
            items: ['React', 'Node.js', 'Express'],
        },
        {
            title: 'Databases',
            icon: '🗄️',
            items: ['MySQL', 'MongoDB'],
        },
        {
            title: 'Tools',
            icon: '🛠️',
            items: ['GitHub', 'Canva', 'VS Code', 'Postman'],
        },
    ]

    const softSkills = ['Communication', 'Problem Solving', 'Adaptability', 'Teamwork', 'App Development', 'Web Development']

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </div>
                <div className="skills-grid fade-in">
                    {skillGroups.map((group, idx) => (
                        <div className="skill-group" key={idx}>
                            <div className="skill-group-header">
                                <span className="skill-icon">{group.icon}</span>
                                <h3>{group.title}</h3>
                            </div>
                            <div className="skill-pills">
                                {group.items.map(item => (
                                    <span className="skill-pill" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="soft-skills fade-in">
                    <h3 className="soft-skills-title">Areas of Interest & Soft Skills</h3>
                    <div className="soft-pills">
                        {softSkills.map(s => (
                            <span className="soft-pill" key={s}>{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
