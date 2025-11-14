document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mood-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const answer = prompt('¿Te sientes "down" ahora mismo? Responde sí o no.').trim().toLowerCase();
    if (!answer) {
      alert('No respondiste. Si necesitas ayuda, habla con alguien de confianza.');
      return;
    }

    if (['sí', 'si', 's'].includes(answer)) {
      alert('Siento que te sientes down. Si estás en riesgo, busca ayuda profesional o llama a emergencias locales. También puedes hablar con un amigo de confianza.');
      return;
    }

    if (['no', 'n'].includes(answer)) {
      alert('No lo intentes ocultar, se que eres down. No te preocupes, todos tenemos días difíciles. Si necesitas hablar, busca apoyo en amigos, familiares o profesionales.');
      return;
    }

    alert('No entendí tu respuesta. Responde con sí o no.');
  });
});
