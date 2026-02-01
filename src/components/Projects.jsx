export default function Projects() {
  const projects = [
    {
      title: "Food Ordering Website",
      tech: "React, Node.js, Express, MongoDB, Stripe",
      points: [
        "Built MERN food ordering platform reducing manual processing by 45%",
        "JWT authentication with role-based dashboards",
        "REST APIs for menu, cart, orders",
        "Secure Stripe payment integration",
      ],
      github: "#",
      // live: "#",
    },
    {
      title: "WebHome – Airbnb Clone",
      tech: "Node.js, Express, MongoDB, EJS",
      points: [
        "Rental platform with booking workflows",
        "REST APIs for listings, users, bookings",
        "Reduced booking conflicts by 35%",
        "Optimized MongoDB queries (25% faster)",
      ],
      github: "#",
      // live: "#",
    },
    {
      title: "Policy Insurance Website",
      tech: "React, Node.js, Express, MySQL",
      points: [
        "Insurance system with JWT authentication",
        "RBAC to protect sensitive data",
        "Automated workflows reduced effort by 40%",
        "Secure REST APIs for admin & users",
      ],
      github: "#",
      // live: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <span className="tech">{project.tech}</span>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
