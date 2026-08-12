import Image from "next/image";

const emailUrl = "mailto:info@escuelacizalla.es?subject=Consulta%20sobre%20cursos%20de%20encuadernaci%C3%B3n";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Escuela+Cizalla+Doctor+Esquerdo+12+Madrid";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

function Mail() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const paths = [
  {
    number: "01",
    title: "Quiero empezar",
    text: "Aprende desde cero practicando directamente sobre un libro. No necesitas experiencia previa ni traer materiales las dos primeras clases.",
    note: "Desde 94,50 € / mes"
  },
  {
    number: "02",
    title: "Quiero profundizar",
    text: "Perfecciona restauración, dorado, libros de artista, papeles pintados o estructuras japonesas en cursos monográficos.",
    note: "Monográficos · Intensivos"
  },
  {
    number: "03",
    title: "Tengo un libro especial",
    text: "Cuéntanos qué pieza quieres recuperar, proteger o transformar. El taller también realiza encargos a medida.",
    note: "Presupuesto personalizado"
  }
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="wordmark" href="#inicio" aria-label="Escuela Cizalla, inicio">
          CIZALLA<span>•</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#elige">Cursos</a>
          <a href="#taller">El taller</a>
          <a href="#horarios">Horarios</a>
        </nav>
        <a className="header-cta" href={emailUrl}>Consultar plaza <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Escuela de encuadernación · Madrid · Desde 1992</p>
          <h1>EL OTRO<br />PLACER QUE<br />DAN LOS <em>LIBROS.</em></h1>
          <div className="hero-lead">
            <p>Aprender un oficio con las manos. Sin prisa, con buenas herramientas y un proyecto propio sobre la mesa.</p>
            <a className="text-link" href="#elige">Encuentra tu curso <Arrow /></a>
          </div>
        </div>
        <div className="hero-photo">
          <Image src="/images/hero.jpg" alt="Alumna trabajando una encuadernación en una prensa manual" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="photo-note"><strong>8</strong><span>personas máximo<br />por grupo</span></div>
        </div>
      </section>

      <section className="statement">
        <p>Cosido. Corte. Papel. Piel. Dorado.</p>
        <span>✦</span>
        <p>Treinta años enseñando a hacer libros que merece la pena conservar.</p>
      </section>

      <section className="choose" id="elige">
        <div className="section-head">
          <p className="eyebrow">Tres formas de entrar al taller</p>
          <h2>¿QUÉ QUIERES<br /><em>HACER?</em></h2>
        </div>
        <div className="path-list">
          {paths.map((path) => (
            <article className="path" key={path.number}>
              <span>{path.number}</span>
              <div><h3>{path.title}</h3><p>{path.text}</p></div>
              <strong>{path.note}</strong>
              <a href={emailUrl} aria-label={`Consultar: ${path.title}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="craft">
        <div className="craft-photo">
          <Image src="/images/techniques.jpg" alt="Detalle del cosido artesanal de varios libros" fill sizes="(max-width: 800px) 100vw, 54vw" />
          <p>El lomo también cuenta la historia.</p>
        </div>
        <div className="craft-copy">
          <p className="eyebrow">Aprender haciendo</p>
          <h2>UN LIBRO<br />DESDE<br /><em>DENTRO.</em></h2>
          <p>Empiezas practicando sobre una pieza real. A partir de ahí, cada proyecto abre una técnica nueva: costuras, tapas, estuches, mosaico, estampación o restauración.</p>
          <ul>
            <li><span>01</span> Atención adaptada a tu nivel</li>
            <li><span>02</span> Material básico incluido</li>
            <li><span>03</span> Clases que puedes recuperar</li>
          </ul>
        </div>
      </section>

      <section className="workshop" id="taller">
        <div className="workshop-copy">
          <p className="eyebrow">Doctor Esquerdo, 12 · Madrid</p>
          <h2>TODO TIENE<br />SU SITIO.<br /><em>TÚ TAMBIÉN.</em></h2>
          <p>Prensas, plegaderas, punzones, cizallas y un cuarto dedicado al dorado. Cada alumno dispone de su propia mesa y del tiempo necesario para trabajar con precisión.</p>
          <div className="workshop-facts">
            <div><strong>1992</strong><span>Año de fundación</span></div>
            <div><strong>30+</strong><span>Años de escuela</span></div>
          </div>
        </div>
        <div className="workshop-photo">
          <Image src="/images/history.jpg" alt="Interior del taller Escuela Cizalla con mesas, prensas y herramientas" fill sizes="(max-width: 900px) 100vw, 56vw" />
        </div>
      </section>

      <section className="voices">
        <p className="eyebrow">Lo que ocurre alrededor de la mesa</p>
        <blockquote>“Las clases se convierten en estimulantes sesiones de actividad creativa y de tranquilo contrapunto de las tensiones cotidianas.”</blockquote>
        <div><span>Eduardo Pajares</span><span>Alumno desde 2004</span></div>
      </section>

      <section className="schedule" id="horarios">
        <div className="schedule-title">
          <p className="eyebrow">Elige tu ritmo</p>
          <h2>TIEMPO PARA<br /><em>HACERLO BIEN.</em></h2>
        </div>
        <div className="schedule-details">
          <div className="times">
            <p><span>MA—SA</span><strong>10:00 — 14:00</strong></p>
            <p><span>MA—JU</span><strong>16:30 — 20:30</strong></p>
          </div>
          <p>Los grupos se organizan según las plazas disponibles. Escríbenos y te propondremos el horario y la modalidad que mejor encajen contigo.</p>
          <a className="primary-button" href={emailUrl}><Mail /> Consultar disponibilidad</a>
        </div>
      </section>

      <section className="contact">
        <div>
          <p className="eyebrow">Tu próximo libro puede empezar aquí</p>
          <h2>VEN A CONOCER<br /><em>EL TALLER.</em></h2>
        </div>
        <div className="contact-actions">
          <a href={emailUrl}><span>Escribir por email</span><small>info@escuelacizalla.es</small><Arrow /></a>
          <a href="tel:+34629266370"><span>Llamar al taller</span><small>629 266 370</small><Arrow /></a>
          <a href={mapsUrl}><span>Abrir en Maps</span><small>Doctor Esquerdo, 12 · Madrid</small><Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#inicio">CIZALLA<span>•</span></a>
        <p>El otro placer que dan los libros.</p>
        <small>Propuesta visual creada con información e imágenes públicas del negocio. Contenidos sujetos a su revisión y aprobación.</small>
      </footer>
    </main>
  );
}
