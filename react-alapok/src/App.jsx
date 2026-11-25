function Header() {
  return (
    <header>
      <h1>Tanulói kurzuskatalógus</h1>
      <hr/>
    </header>
  );
}

function StudentCard({ nev, szakma, kedvencNyelv }) {
  return (
    <div>
      <h3>{nev}</h3>
      <p>Szakma: {szakma}</p>
      <p>Kedvenc nyelv:{kedvencNyelv}</p>
    </div>
  );
}

function StudentList() {
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

function Footer(){
  return(
    <footer>
      <p>2026 Frontend</p>
    </footer>
  );
}
function App(){
  return(
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}
export default App


/* function Header() {
  return (
    <header>
      <h1>Tanulói kurzuskatalógus</h1>
      <hr />
    </header>
  );
}

function StudentCard({ nev, szakma, kedvencNyelv }) {
  return (
    <div>
      <h3>{nev}</h3>
      <p>Szakma: {szakma}</p>
      <p>Kedvenc nyelv: {kedvencNyelv}</p>
    </div>
  );
}

function StudentList() {
  return (
    <main>
      <StudentCard 
        nev="Kovács Anna" 
        szakma="Szoftverfejlesztő és -tesztelő" 
        kedvencNyelv="JavaScript" 
      />
      <StudentCard 
        nev="Nagy Péter" 
        szakma="Rendszerüzemeltető" 
        kedvencNyelv="Python" 
      />
      <StudentCard 
        nev="Szabó Eszter" 
        szakma="Webfejlesztő" 
        kedvencNyelv="TypeScript" 
      />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>2026 Frontend</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}

export default App; */



/* function Udvozlet(){
  return(
    <>
      <h1>Üdv React</h1>
      <p>Ez JavaScriptből került az oldalra</p>
    </>
  );
}  
  
export default Udvozlet */
  
  
/*function StudentCard() {
    return (
      <>
        <p>Bosnyák Borisz</p>
        <p>13. évfolyam</p>
        <p>C#</p>
        <p>Alvás</p>
      </>
    );
  }

  export default StudentCard;*/
