
export function Skill({ skill }) {
  console.log(skill);

  return (
    <div className="skill-container">
      <div className="skill-image">
        <img src={skill.image} alt={skill.name}></img>
      </div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}
