window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // Verificar se a seção passou da linha.

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  console.log(`O topo passou da linha? ${sectionTopReachOrPassedTargetLine}`);

  // Verificar se a base esta abaixo da linha alvo.

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  console.log(
    `O fundo da seção passou da linha? ${sectionEndPassedTargetLine}`
  );

  // Limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  if (sectionBoundaries) {
    
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 470) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`#section, 
#section img, 
#section .stats, 
#services, 
#services header,
#services .card,
#about,
#about header,
#about content`);
