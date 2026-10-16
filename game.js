
"use strict";

// MENTIRA: El último testigo
// Primera versión jugable de investigación policial.

const cases = [
  {
    title: "La última llamada",
    location: "Hotel Blackwood · Habitación 204",
    description: "El empresario Daniel Cross fue encontrado muerto a las 23:40. La puerta estaba cerrada y tres personas estuvieron en el hotel esa noche.",
    victim: "Daniel Cross",
    culprit: 1,
    suspects: [
      {
        name: "Elena Ward",
        role: "Periodista · Exsocia",
        icon: "▤",
        alibi: "Asegura que estaba en el vestíbulo hablando por teléfono.",
        statement: "Escuché una discusión cerca de las once. No vi quién entró en la habitación."
      },
      {
        name: "Marcus Reed",
        role: "Jefe de seguridad",
        icon: "♜",
        alibi: "Afirma que vigilaba la entrada principal.",
        statement: "Nadie entró ni salió del hotel por la puerta principal durante mi turno."
      },
      {
        name: "Victor Hale",
        role: "Abogado de la víctima",
        icon: "§",
        alibi: "Dice que abandonó el hotel a las 22:30.",
        statement: "Daniel estaba preocupado por un asunto legal, pero no sé nada más."
      }
    ],
    evidence: [
      {
        title: "Registro de acceso",
        icon: "▣",
        description: "La tarjeta de seguridad de Marcus abrió la habitación 204 a las 23:17.",
        target: 1,
        type: "REGISTRO"
      },
      {
        title: "Llamada del vestíbulo",
        icon: "☎",
        description: "Una llamada del hotel confirma que Elena habló con recepción desde las 23:12 hasta las 23:28.",
        target: 0,
        type: "TELÉFONO"
      },
      {
        title: "Recibo de taxi",
        icon: "▤",
        description: "El recibo sitúa a Victor en un taxi a las 22:36, rumbo a su domicilio.",
        target: 2,
        type: "DOCUMENTO"
      },
      {
        title: "Cámara del pasillo",
        icon: "◉",
        description: "La cámara dejó de grabar durante cuatro minutos. Marcus era responsable del sistema de seguridad.",
        target: 1,
        type: "VIGILANCIA"
      },
      {
        title: "Informe de laboratorio",
        icon: "⌕",
        description: "La hora estimada de la muerte coincide con el acceso registrado a las 23:17.",
        target: 1,
        type: "FORENSE"
      }
    ]
  },
  {
    title: "Sombras en el museo",
    location: "Museo de Redmoont · Sala Este",
    description: "Durante una gala nocturna, la directora del museo fue encontrada muerta. Un valioso objeto desapareció y las declaraciones no coinciden.",
    victim: "Margaret Ellis",
    culprit: 2,
    suspects: [
      {
        name: "Nora Blake",
        role: "Restauradora",
        icon: "✎",
        alibi: "Dice que estaba trabajando en el taller.",
        statement: "Oí pasos cerca de la sala Este, pero pensé que era el personal de limpieza."
      },
      {
        name: "Adrian Cole",
        role: "Coleccionista",
        icon: "◇",
        alibi: "Asegura que nunca abandonó el salón principal.",
        statement: "Estuve conversando con varios invitados. La directora parecía nerviosa."
      },
      {
        name: "Silas Moore",
        role: "Guardia nocturno",
        icon: "♜",
        alibi: "Afirma que patrullaba el ala oeste.",
        statement: "Las cámaras funcionaban normalmente cuando revisé el panel."
      }
    ],
    evidence: [
      {
        title: "Tarjeta de acceso",
        icon: "▣",
        description: "El registro muestra que la tarjeta de Silas abrió la sala Este a las 22:48.",
        target: 2,
        type: "ACCESO"
      },
      {
        title: "Inventario del taller",
        icon: "▤",
        description: "El registro confirma que Nora permaneció en el taller durante el intervalo investigado.",
        target: 0,
        type: "DOCUMENTO"
      },
      {
        title: "Fotografía de la gala",
        icon: "▧",
        description: "Una fotografía sitúa a Adrian en el salón principal a las 22:45.",
        target: 1,
        type: "FOTOGRAFÍA"
      },
      {
        title: "Panel de vigilancia",
        icon: "◉",
        description: "El sistema registra una desconexión manual desde el puesto de seguridad.",
        target: 2,
        type: "SISTEMA"
      },
      {
        title: "Libro de turnos",
        icon: "▤",
        description: "Silas debía permanecer en el ala este durante la franja horaria del incidente.",
        target: 2,
        type: "ARCHIVO"
      }
    ]
  },
  {
    title: "Silencio en la estación",
    location: "Estación Central · Andén 4",
    description: "Un inspector retirado apareció muerto poco antes del último tren. Tres personas tenían motivos para reunirse con él.",
    victim: "Arthur Mills",
    culprit: 0,
    suspects: [
      {
        name: "Clara Voss",
        role: "Detective suspendida",
        icon: "⚑",
        alibi: "Afirma que estaba esperando el último tren.",
        statement: "Arthur me pidió que fuera a la estación. Dijo que tenía información importante."
      },
      {
        name: "Peter Shaw",
        role: "Empleado ferroviario",
        icon: "▣",
        alibi: "Dice que revisaba los horarios en la oficina.",
        statement: "El andén estuvo casi vacío. No recuerdo haber visto a Arthur."
      },
      {
        name: "Evelyn Price",
        role: "Abogada",
        icon: "§",
        alibi: "Asegura que se marchó antes de las diez.",
        statement: "No tenía ninguna reunión con Arthur esa noche."
      }
    ],
    evidence: [
      {
        title: "Billete sin utilizar",
        icon: "▤",
        description: "Un billete comprado por Clara corresponde al tren que llegó a las 22:15.",
        target: 0,
        type: "DOCUMENTO"
      },
      {
        title: "Registro de oficina",
        icon: "▣",
        description: "El registro electrónico sitúa a Peter trabajando en la oficina durante buena parte del incidente.",
        target: 1,
        type: "REGISTRO"
      },
      {
        title: "Cámara de salida",
        icon: "◉",
        description: "La cámara muestra a Evelyn abandonando la estación a las 21:52.",
        target: 2,
        type: "VIGILANCIA"
      },
      {
        title: "Mensaje recuperado",
        icon: "✉",
        description: "Un mensaje enviado a Arthur dice: «Tenemos que hablar esta noche. Andén 4».",
        target: 0,
        type: "TELÉFONO"
      },
      {
        title: "Declaración del taquillero",
        icon: "▤",
        description: "El taquillero recuerda a Clara preguntando por los accesos al andén poco antes de las diez.",
        target: 0,
        type: "TESTIMONIO"
      }
    ]
  }
];

const $ = (id) => document.getElementById(id);

let currentCase;
let evidenceFound = [];
let statementsRead = [];
let rounds = 5;
let wrongAccusations = 0;
let selectedSuspect = null;
let gameOver = false;
let started = false;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startGame() {
  currentCase = cases[Math.floor(Math.random() * cases.length)];
  evidenceFound = [];
  statementsRead = [];
  rounds = 5;
  wrongAccusations = 0;
  selectedSuspect = null;
  gameOver = false;
  started = true;

  $("intro").classList.add("hidden");
  $("game").classList.remove("hidden");

  $("caseTitle").textContent = currentCase.title;
  $("caseDescription").textContent =
    currentCase.description + " Lugar: " + currentCase.location + ".";
  $("caseNumber").textContent =
    "RM-" + String(cases.indexOf(currentCase) + 1).padStart(3, "0");

  $("notes").value = "";
  $("notesStatus").textContent = "";
  $("activityLog").innerHTML = "";

  renderSuspects();
  renderEvidence();
  renderStatements();
  updateStats();

  addLog("El expediente ha sido abierto. La investigación comienza.");
  addLog("Víctima: " + currentCase.victim + ".");
  addLog("Hay tres sospechosos. Examina las pruebas antes de acusar.");
}

function renderSuspects() {
  const container = $("suspects");
  container.innerHTML = "";

  currentCase.suspects.forEach((suspect, index) => {
    const button = document.createElement("button");
    button.className = "suspect";
    button.type = "button";

    if (selectedSuspect === index) button.classList.add("selected");

    button.innerHTML = `
      <span class="avatar"></span>
      <span class="suspect-info">
        <span class="suspect-name"></span>
        <span class="suspect-role"></span>
      </span>
      <span class="suspect-status">SOSPECHOSO</span>
    `;

    button.querySelector(".avatar").textContent = suspect.icon;
    button.querySelector(".suspect-name").textContent = suspect.name;
    button.querySelector(".suspect-role").textContent = suspect.role;

    button.addEventListener("click", () => {
      if (gameOver) return;
      selectedSuspect = index;
      renderSuspects();
      openInterrogation(index);
    });

    container.appendChild(button);
  });
}

function renderEvidence() {
  const container = $("evidenceList");
  container.innerHTML = "";

  if (evidenceFound.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Todavía no hay pruebas.<br>Busca evidencias para comenzar.</div>';
    updateStats();
    return;
  }

  evidenceFound.forEach((evidence) => {
    const card = document.createElement("article");
    card.className = "evidence-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon"></span>
        <span class="card-title"></span>
        <span class="card-type"></span>
      </div>
      <p class="card-description"></p>
    `;

    card.querySelector(".card-icon").textContent = evidence.icon;
    card.querySelector(".card-title").textContent = evidence.title;
    card.querySelector(".card-type").textContent = evidence.type;
    card.querySelector(".card-description").textContent = evidence.description;
    container.appendChild(card);
  });

  updateStats();
}

function renderStatements() {
  const container = $("statementsList");
  container.innerHTML = "";

  if (statementsRead.length === 0) {
    container.innerHTML =
      '<div class="empty-state">No has interrogado a nadie.<br>Selecciona un sospechoso para escuchar su declaración.</div>';
    return;
  }

  statementsRead.forEach((item) => {
    const card = document.createElement("article");
    card.className = "statement-card";

    const heading = document.createElement("div");
    heading.className = "card-title";
    heading.textContent = item.name;

    const statement = document.createElement("p");
    statement.className = "card-description";
    statement.textContent = item.statement;

    const alibi = document.createElement("p");
    alibi.className = "card-description";
    alibi.textContent = "Coartada: " + item.alibi;

    card.append(heading, statement, alibi);
    container.appendChild(card);
  });
}

function updateStats() {
  $("roundDisplay").textContent =
    rounds + (rounds === 1 ? " ronda" : " rondas");
  $("evidenceCount").textContent =
    evidenceFound.length + "/" + currentCase.evidence.length;
}

function addLog(message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";

  const time = document.createElement("span");
  time.className = "log-time";
  time.textContent = String(
    $("activityLog").children.length + 1
  ).padStart(2, "0");

  const text = document.createElement("span");
  text.textContent = message;

  entry.append(time, text);
  $("activityLog").prepend(entry);
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  $("evidenceTab").classList.toggle("hidden", tabName !== "evidence");
  $("statementsTab").classList.toggle("hidden", tabName !== "statements");
  $("notesTab").classList.toggle("hidden", tabName !== "notes");
}

function showModal(eyebrow, title, content) {
  $("modalEyebrow").textContent = eyebrow;
  $("modalTitle").textContent = title;

  const body = $("modalBody");
  body.replaceChildren();

  if (typeof content === "string") {
    const p = document.createElement("p");
    p.textContent = content;
    body.appendChild(p);
  } else {
    body.appendChild(content);
  }

  $("modal").classList.remove("hidden");
}

function closeModal() {
  $("modal").classList.add("hidden");
}

function openInterrogation(index) {
  const suspect = currentCase.suspects[index];
  const content = document.createElement("div");

  const statement = document.createElement("p");
  statement.textContent = "«" + suspect.statement + "»";

  const alibi = document.createElement("p");
  alibi.textContent = "COARTADA: " + suspect.alibi;

  const button = document.createElement("button");
  button.className = "primary-button";
  button.textContent = "REGISTRAR DECLARACIÓN";

  button.addEventListener("click", () => {
    if (!statementsRead.some((item) => item.name === suspect.name)) {
      statementsRead.push({
        name: suspect.name,
        statement: suspect.statement,
        alibi: suspect.alibi
      });

      renderStatements();
      addLog("Declaración registrada: " + suspect.name + ".");
    }

    switchTab("statements");
    closeModal();
  });

  content.append(statement, alibi, button);
  showModal("INTERROGATORIO", suspect.name, content);
}

function searchEvidence() {
  if (gameOver) return;

  const available = shuffle(
    currentCase.evidence.filter(
      (item) => !evidenceFound.some((found) => found.title === item.title)
    )
  );

  if (available.length === 0) {
    showModal(
      "INVESTIGACIÓN",
      "Zona examinada",
      "Ya has encontrado todas las pruebas disponibles en este expediente. Revisa tus hallazgos y decide a quién acusar."
    );
    return;
  }

  if (rounds <= 0) {
    finishGame(false, "Se agotó el tiempo de investigación.");
    return;
  }

  rounds--;

  // La búsqueda revela una prueba aún no descubierta.
  const evidence = available[0];
  evidenceFound.push(evidence);

  renderEvidence();
  updateStats();

  addLog("Nueva prueba: " + evidence.title + ".");
  switchTab("evidence");

  const remaining = currentCase.evidence.length - evidenceFound.length;

  showModal(
    "NUEVO HALLAZGO",
    evidence.title,
    evidence.description + (remaining > 0
      ? "\n\nQuedan " + remaining + " pruebas por descubrir."
      : "\n\nHas encontrado todas las pruebas del expediente.")
  );

  if (rounds === 0 && evidenceFound.length < currentCase.evidence.length) {
    addLog("Advertencia: se agotaron las rondas. Aún puedes formular una acusación.");
  }
}

function openAccusation() {
  if (gameOver) return;

  const content = document.createElement("div");
  const intro = document.createElement("p");
  intro.textContent =
    "Selecciona a la persona que consideras responsable. Una acusación equivocada puede cerrar el caso.";
  content.appendChild(intro);

  const list = document.createElement("div");
  list.className = "choice-list";

  currentCase.suspects.forEach((suspect, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";

    const name = document.createElement("span");
    name.textContent = suspect.name;

    const role = document.createElement("small");
    role.textContent = suspect.role;

    button.append(name, role);

    button.addEventListener("click", () => {
      closeModal();
      makeAccusation(index);
    });

    list.appendChild(button);
  });

  content.appendChild(list);
  showModal("DECISIÓN FINAL", "¿Quién cometió el crimen?", content);
}

function makeAccusation(index) {
  if (gameOver) return;

  const suspect = currentCase.suspects[index];

  if (index === currentCase.culprit) {
    finishGame(true, "Has identificado correctamente al culpable: " + suspect.name + ".");
    return;
  }

  wrongAccusations++;
  rounds = Math.max(0, rounds - 1);

  addLog("Acusación incorrecta contra " + suspect.name + ".");
  updateStats();

  if (wrongAccusations >= 2 || rounds === 0) {
    finishGame(false, "Las acusaciones fallidas han puesto en peligro la investigación.");
  } else {
    showModal(
      "ACUSACIÓN RECHAZADA",
      "La prueba no es suficiente",
      "Tu acusación contra " + suspect.name +
      " no se sostiene. Te queda " + rounds +
      (rounds === 1 ? " ronda" : " rondas") +
      " y una segunda acusación equivocada cerrará el caso."
    );
  }
}

function finishGame(won, message) {
  gameOver = true;

  const content = document.createElement("div");
  const symbol = document.createElement("div");
  symbol.className = "result-symbol";
  symbol.textContent = won ? "✓" : "✕";

  const result = document.createElement("p");
  result.className = won ? "result-good" : "result-bad";
  result.style.fontWeight = "700";
  result.textContent = won
    ? "CASO RESUELTO"
    : "CASO SIN RESOLVER";

  const explanation = document.createElement("p");
  explanation.textContent = message;

  const culprit = currentCase.suspects[currentCase.culprit];
  const reveal = document.createElement("p");
  reveal.textContent =
    "CULPABLE: " + culprit.name + ". " +
    (won
      ? "Las pruebas han permitido cerrar el expediente."
      : "El culpable no ha sido llevado ante la justicia.");

  const button = document.createElement("button");
  button.className = "primary-button";
  button.textContent = "ABRIR OTRO EXPEDIENTE";

  button.addEventListener("click", () => {
    closeModal();
    startGame();
  });

  content.append(symbol, result, explanation, reveal, button);
  showModal("CIERRE DEL EXPEDIENTE", won ? "Investigación completada" : "Investigación fallida", content);

  addLog(won
    ? "Caso resuelto. El culpable ha sido identificado."
    : "Caso cerrado sin una resolución satisfactoria.");
}

// Eventos de la interfaz.
$("startBtn").addEventListener("click", startGame);
$("homeBtn").addEventListener("click", (event) => {
  event.preventDefault();

  if (started && !gameOver) {
    showModal(
      "DEPARTAMENTO DE POLICÍA",
      "Expediente activo",
      "Para comenzar un expediente nuevo, termina el caso actual o recarga la página."
    );
  } else {
    $("intro").classList.remove("hidden");
    $("game").classList.add("hidden");
  }
});

$("searchBtn").addEventListener("click", searchEvidence);
$("accuseBtn").addEventListener("click", openAccusation);
$("closeModal").addEventListener("click", closeModal);

$("modal").addEventListener("click", (event) => {
  if (event.target === $("modal")) closeModal();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

$("saveNotes").addEventListener("click", () => {
  $("notesStatus").textContent = "Notas guardadas durante esta sesión.";
  addLog("El investigador actualizó sus notas.");
});

// El juego empieza en la pantalla de expediente.
