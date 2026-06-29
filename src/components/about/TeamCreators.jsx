import team from "../../data/team.json";
import "../components-css/TeamCreators.css";

export default function TeamCreators() {
  return (
    <section className="team_creators">
      <h2>Team Creators</h2>

      <div className="team_grid">
        {team.map((creator) => (
          <a
            key={creator.id}
            href={creator.github}
            target="_blank"
            rel="noopener noreferrer"
            className="team_card"
          >
            <img
              src={creator.image}
              alt={creator.name}
              className="team_avatar"
            />

            <h3>{creator.name}</h3>
            <p className="team_role">{creator.role}</p>
            <p className="team_bio">{creator.bio}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
