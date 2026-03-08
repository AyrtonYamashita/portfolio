let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timeoutId = null;

export function startTyping(phrases) {
  const element = document.getElementById("typing");
  if (!element) return;

  const currentPhrase = phrases[currentPhraseIndex];
  let typingDelay = isDeleting ? 50 : 100;

  // Atualiza o texto
  element.innerText = isDeleting 
    ? currentPhrase.substring(0, charIndex - 1) 
    : currentPhrase.substring(0, charIndex + 1);

  charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

  // Lógica de pausa e troca de estado
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingDelay = 2000; // Pausa no final da frase
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    typingDelay = 500; // Pausa antes de começar a próxima
  }

  // Limpa o timeout anterior para evitar "atropelamento" de funções
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => startTyping(phrases), typingDelay);
}

// Função para resetar a animação (importante para a troca de idioma)
export function resetTyping() {
    currentPhraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    clearTimeout(timeoutId);
}