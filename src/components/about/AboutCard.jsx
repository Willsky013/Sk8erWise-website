
export default function AboutCard({ title, text }) {
  return (
    <div className="about_card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
