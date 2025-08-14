// ====== Utiles ======
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
const todayISO = () => new Date().toISOString().slice(0,10);

// Fecha en header
(function initToday(){
  const d = new Date();
  const opts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  $('#todayLabel').textContent = d.toLocaleDateString('es-ES', opts);
})();

// ====== Datos de ejercicios ======
const DATA_EJERCICIOS = {
  ganar: [
    { name:'Sentadillas con peso corporal', reps:'4×12', tiempo:'60–75 s descanso' },
    { name:'Press banca (o flexiones)', reps:'4×8–10', tiempo:'90 s descanso' },
    { name:'Remo con banda o mancuerna', reps:'4×10–12', tiempo:'60–75 s descanso' },
    { name:'Peso muerto rumano', reps:'3×10', tiempo:'90 s descanso' },
    { name:'Zancadas alternas', reps:'3×12 por pierna', tiempo:'60 s descanso' },
  ],
  bajar: [
    { name:'Jumping jacks', reps:'3×60 s', tiempo:'30 s descanso' },
    { name:'Sentadilla + press', reps:'4×12', tiempo:'45–60 s descanso' },
    { name:'Mountain climbers', reps:'4×45 s', tiempo:'30 s descanso' },
    { name:'Plancha', reps:'3×45–60 s', tiempo:'30 s descanso' },
    { name:'Burpees controlados', reps:'3×10–12', tiempo:'60 s descanso' },
  ]
};

// ====== Dietas de ejemplo (kcal aprox.) ======
const DIETAS = {
  ganar: {
    desayuno: { item:'Avena con banana y mantequilla de maní + leche', kcal: 550 },
    comida:   { item:'Arroz, pollo a la plancha, aguacate y ensalada',   kcal: 800 },
    cena:     { item:'Pasta integral con atún y aceite de oliva',        kcal: 700 },
    snack:    { item:'Yogur griego con nueces y miel',                    kcal: 350 },
  },
  bajar: {
    desayuno: { item:'Tortilla de claras con espinaca + fruta',          kcal: 300 },
    comida:   { item:'Ensalada grande con pollo, quinua y verduras',     kcal: 500 },
    cena:     { item:'Pescado al horno con vegetales',                    kcal: 450 },
    snack:    { item:'Manzana y 10 almendras',                            kcal: 180 },
  }
};

// ====== Frases motivadoras (120) ======
const QUOTES = [
  "Un día a la vez.",
  "Pequeños pasos, grandes cambios.",
  "Tu constancia es tu superpoder.",
  "La disciplina gana al talento.",
  "Empieza donde estás.",
  "Hoy cuentas tú.",
  "Suda, sonríe, repite.",
  "Sé más fuerte que tus excusas.",
  "Hazlo por tu yo del futuro.",
  "La acción vence al miedo.",
  "No te rindas ahora.",
  "La energía sigue a la acción.",
  "Avanza aunque sea lento.",
  "La constancia construye cuerpos.",
  "El progreso es progreso.",
  "Rompe el no puedo.",
  "El mejor momento es ahora.",
  "Sin prisa, sin pausa.",
  "Hazlo simple, hazlo bien.",
  "Tu cuerpo te escucha.",
  "Cada repetición cuenta.",
  "Cada gota suma.",
  "Entrena la mente.",
  "Sueña grande, comienza pequeño.",
  "No perfect, only better.",
  "Gana el día.",
  "Sé tu competencia.",
  "El hábito te hace libre.",
  "Tu 1% hoy importa.",
  "Pasito a pasito.",
  "Tu esfuerzo te define.",
  "Confía en el proceso.",
  "No te compares.",
  "Más fuerte que ayer.",
  "Cree y crea.",
  "Hazlo por salud.",
  "Hazlo aunque cueste.",
  "Compromiso contigo.",
  "La incomodidad te crece.",
  "Hoy cuenta doble.",
  "Tu meta te necesita.",
  "Más disciplina, menos drama.",
  "Cuerpo activo, mente clara.",
  "Hazlo posible.",
  "El progreso es invisible… hasta que no.",
  "Rutina hoy, resultados mañana.",
  "Eres capaz.",
  "Constante > Intenso.",
  "Entrena con propósito.",
  "Domina lo básico.",
  "Suda tus metas.",
  "Movimiento es medicina.",
  "Elige salud.",
  "Pelear por ti vale.",
  "No pares por cansancio.",
  "Quema excusas.",
  "Corre tu carrera.",
  "Respira y sigue.",
  "Aprende del intento.",
  "Pensar menos, hacer más.",
  "Persistir es ganar.",
  "Crea tu momentum.",
  "Mejor poco que nada.",
  "Dale tiempo al tiempo.",
  "Tu hábito te cuida.",
  "Mañana agradecerás.",
  "Entrena con amor propio.",
  "Sin excusas.",
  "El futuro empieza hoy.",
  "Mente fuerte, cuerpo fuerte.",
  "Sigue el plan.",
  "Tu meta vale la pena.",
  "Nada cambia si tú no.",
  "Constancia mata duda.",
  "Levántate otra vez.",
  "Hay magia en lo simple.",
  "Haz lo duro fácil.",
  "Paso firme.",
  "Tu rutina es tu identidad.",
  "No necesitas ganas, necesitas hábito.",
  "Que duela bien.",
  "Deja huella en ti.",
  "Elijo cuidarme.",
  "Entrena para vivir mejor.",
  "No te sabotees.",
  "Las metas aman la repetición.",
  "Foco, no ruido.",
  "La hora es ahora.",
  "Tu salud es prioridad.",
  "Suficiente es suficiente.",
  "Vuelves más fuerte.",
  "La suma de días gana.",
  "Persevera.",
  "Hoy te toca.",
  "La constancia no falla.",
  "Muévete por ti.",
  "Tu mejor versión te espera.",
  "No todo es motivación: es hábito.",
  "Cero excusas, solo acción.",
  "Enfócate en el siguiente paso.",
  "Sé valiente.",
  "Eres tu proyecto.",
  "Tu cuerpo aprende.",
  "Hazlo con calma.",
  "Cada día cuenta.",
  "Actúa como quien quieres ser.",
  "No lo pienses tanto.",
  "Más salud, menos prisa.",
  "No te detengas.",
  "Hazlo rutinario.",
  "Tu tiempo vale.",
  "Entrena ligera/o, pero entrena.",
  "Suma, no restes.",
  "Conviértelo en normal.",
  "Hoy lo logras.",
  "Tu constancia inspira.",
  "El progreso está en ti.",
  "Entrena con alegría.",
  "No más excusas.",
  "Sé imparable.",
  "Tu disciplina es libertad.",
  "Sigue empujando.",
  "Hecho > Perfecto.",
  "Tu decisión cambia todo.",
  "Muévete y el ánimo llega.",
  "Nunca es tarde.",
  "Gana salud, gana vida.",
  "Tu plan, tu poder.",
  "Cree en tu capacidad.",
  "La meta te guía.",
  "Vas por buen camino.",
  "Hábitos que sanan."
];

// ——— Frases: rotación diaria sin repetir hasta consumir 100 ———
function getDailyQuote(){
  const key = 'quotes:' + todayISO();
  let state = JSON.parse(localStorage.getItem(key) || 'null');
  if (!state) {
    // barajamos y guardamos
    const shuffled = QUOTES.slice().sort(()=>Math.random()-0.5);
    state = { idx: 0, order: shuffled };
  }
  const quote = state.order[state.idx % state.order.length];
  state.idx += 1;
  localStorage.setItem(key, JSON.stringify(state));
  return { quote, left: Math.max(0, 100 - state.idx) };
}
function newQuote(){
  const { quote, left } = getDailyQuote();
  $('#quote').textContent = '“' + quote + '”';
  $('#quoteLeft').textContent = left > 0 ? `Frases restantes para llegar a 100 hoy: ${left}` : '¡Meta de 100 frases alcanzada hoy!';
}

// ====== Render ejercicios ======
let currentGoal = null;
function setGoal(goal){
  currentGoal = goal;
  renderExercises();
  planificarDieta(); // refresca el plan
}
function renderExercises(){
  const list = $('#exerciseList');
  list.innerHTML = '';
  const data = DATA_EJERCICIOS[currentGoal] || [];
  data.forEach((e,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${i+1}. ${e.name}</strong>
        <div class="muted">${e.reps} • ${e.tiempo}</div>
      </div>
      <span class="badge">${currentGoal==='ganar'?'Ganar':'Bajar'}</span>
    `;
    list.appendChild(li);
  });
}
function shuffleExercises(){
  if(!currentGoal) return;
  DATA_EJERCICIOS[currentGoal].sort(()=>Math.random()-0.5);
  renderExercises();
}

// ====== Planificar dieta ======
function planificarDieta(){
  if(!currentGoal){ currentGoal='ganar'; }
  const plan = DIETAS[currentGoal];
  const mealPlan = $('#mealPlan');
  mealPlan.innerHTML = `
    <ul class="list">
      <li><div><strong>Desayuno</strong><div class="muted">${plan.desayuno.item}</div></div><span class="badge">${plan.desayuno.kcal} kcal</span></li>
      <li><div><strong>Comida</strong><div class="muted">${plan.comida.item}</div></div><span class="badge">${plan.comida.kcal} kcal</span></li>
      <li><div><strong>Cena</strong><div class="muted">${plan.cena.item}</div></div><span class="badge">${plan.cena.kcal} kcal</span></li>
      <li><div><strong>Snack</strong><div class="muted">${plan.snack.item}</div></div><span class="badge">${plan.snack.kcal} kcal</span></li>
    </ul>
  `;
  const total = plan.desayuno.kcal + plan.comida.kcal + plan.cena.kcal + plan.snack.kcal;
  $('#totalKcal').textContent = `Total aproximado: ${total} kcal`;
}

// ====== Hidratación ======
let aguaHoy = 0;
function loadAgua(){
  const key = 'agua:' + todayISO();
  aguaHoy = parseInt(localStorage.getItem(key) || '0', 10);
  const meta = parseInt(localStorage.getItem('metaAgua') || '0', 10);
  $('#metaAgua').value = meta || '';
  updateAgua(meta);
}
function guardarMetaAgua(){
  const meta = parseInt($('#metaAgua').value || '0', 10);
  localStorage.setItem('metaAgua', meta);
  updateAgua(meta);
}
function recomendarAgua(){
  const kg = parseFloat($('#pesoKg').value || '0');
  if(kg>0){
    const recomendado = Math.round(kg * 35); // 35 ml por kg
    $('#metaAgua').value = recomendado;
    localStorage.setItem('metaAgua', recomendado);
    updateAgua(recomendado);
  }
}
function sumarAgua(ml){
  aguaHoy += ml;
  localStorage.setItem('agua:' + todayISO(), aguaHoy);
  updateAgua(parseInt($('#metaAgua').value || '0', 10));
}
function resetAgua(){
  aguaHoy = 0;
  localStorage.setItem('agua:' + todayISO(), aguaHoy);
  updateAgua(parseInt($('#metaAgua').value || '0', 10));
}
function updateAgua(meta){
  const pct = (meta>0) ? Math.min(100, Math.round(aguaHoy/meta*100)) : 0;
  $('#aguaBar').style.width = pct + '%';
  $('#aguaLabel').textContent = `${aguaHoy} / ${meta||0} ml`;
}

// ====== Recordatorio Gym ======
let recordatorioTimer = null;
async function ensureNotifPermission(){
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission !== 'denied'){
    const p = await Notification.requestPermission();
    return p === 'granted';
  }
  return false;
}
function programarRecordatorio(){
  const time = $('#horaGym').value;
  const msg = $('#msgGym').value || '¡Hora de entrenar!';
  if(!time){ $('#recordatorioEstado').textContent='Selecciona una hora.'; return; }

  // calcular ms hasta la hora de hoy
  const now = new Date();
  const [hh,mm] = time.split(':').map(Number);
  const target = new Date();
  target.setHours(hh, mm, 0, 0);
  let ms = target - now;
  if (ms < 0) { // si ya pasó, programa para 24h después
    ms += 24*60*60*1000;
  }

  if (recordatorioTimer) clearTimeout(recordatorioTimer);
  recordatorioTimer = setTimeout(async ()=>{
    const audio = $('#ding'); audio.currentTime = 0; audio.play().catch(()=>{});
    if (await ensureNotifPermission()){
      new Notification('Entrenador Virtual', { body: msg });
    }
    alert(msg);
  }, ms);

  $('#recordatorioEstado').textContent = `Recordatorio programado para hoy a las ${time}.`;
}
function cancelarRecordatorio(){
  if (recordatorioTimer) clearTimeout(recordatorioTimer);
  $('#recordatorioEstado').textContent = 'Recordatorio cancelado.';
}

// ====== Cronómetro ======
let chronoInt = null, startAt = null, elapsed = 0;
function fmt(t){
  const h = Math.floor(t/3600000);
  const m = Math.floor((t%3600000)/60000);
  const s = Math.floor((t%60000)/1000);
  const pad = n => String(n).padStart(2,'0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function tick(){
  const now = Date.now();
  const t = elapsed + (now - startAt);
  $('#chronoDisplay').textContent = fmt(t);
}
function startChrono(){
  if (chronoInt) return;
  startAt = Date.now();
  chronoInt = setInterval(tick, 250);
}
function pauseChrono(){
  if (!chronoInt) return;
  clearInterval(chronoInt); chronoInt = null;
  elapsed = elapsed + (Date.now() - startAt);
  $('#chronoDisplay').textContent = fmt(elapsed);
}
function resetChrono(){
  clearInterval(chronoInt); chronoInt = null;
  elapsed = 0; startAt = null;
  $('#chronoDisplay').textContent = '00:00:00';
}

// ====== Init ======
(function init(){
  // meta agua por defecto si no existe
  if (!localStorage.getItem('metaAgua')) localStorage.setItem('metaAgua', '2000');
  loadAgua();
  setGoal('ganar'); // objetivo inicial
  newQuote();

  // animación en clic del emoji
  $('.emoji').addEventListener('click', ()=>{
    $('.emoji').style.animation = 'swing .9s ease-in-out 1';
    setTimeout(()=>{$('.emoji').style.animation = 'bounce 1.6s ease-in-out infinite';}, 900);
  });
})();
