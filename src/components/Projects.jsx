import projects from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.tech}</p>
          <a href={p.github}>GitHub</a>
        </div>
      ))}
    </section>
  );
}
