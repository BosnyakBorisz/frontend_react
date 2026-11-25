export function StudentCard({ nev, szakma, kedvencNyelv }) {
  return (
    <div>
      <h3>{nev}</h3>
      <p>Szakma: {szakma}</p>
      <p>Kedvenc nyelv: {kedvencNyelv}</p>
    </div>
  );
}
