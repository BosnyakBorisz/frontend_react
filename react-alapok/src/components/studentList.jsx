import { StudentCard } from "./studentCard";

export function StudentList() {
  const tanulok = [
    { id: 1, nev: "Kovács Anna", szakma: "Szoftverfejlesztő és -tesztelő", kedvencNyelv: "JavaScript" },
    { id: 2, nev: "Nagy Péter", szakma: "Rendszerüzemeltető", kedvencNyelv: "Python" },
    { id: 3, nev: "Szabó Eszter", szakma: "Webfejlesztő", kedvencNyelv: "TypeScript" }
  ];

  return (
    <main>
      {tanulok.map((tanulo) => (
        <StudentCard
          key={tanulo.id}
          nev={tanulo.nev}
          szakma={tanulo.szakma}
          kedvencNyelv={tanulo.kedvencNyelv}
        />
      ))}
    </main>
  );
}