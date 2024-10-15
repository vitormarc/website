function activeMobileMenu() {
  const openMenuButton = document.querySelector('.menu-open');
  const closeMenuButton = document.querySelector('.menu-close');
  const menu = document.querySelector('.menu');

  openMenuButton.addEventListener('click', () => {
    menu.dataset.open = 'true';  
    menu.style.top = `${menu.scrollTop}px`;
  })

  closeMenuButton.addEventListener('click', () => {
    menu.dataset.open = 'false';
    menu.style.top = '-120%';
  })
}

function stickyMenu() {
  const menu = document.querySelector('#menu');
  const menuButton = menu.querySelector('#menu-button');
  const openMenuButton = document.querySelector('.menu-open');
  const li = menu.querySelectorAll('li');
  const openMenuSvg = document.querySelector('#open-menu-mobile-svg');

  document.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
      menu.dataset.scroll = 'true';
      menuButton.dataset.scroll = 'true';
      menuButton.classList.add('bg-white', 'text-red');      
      openMenuSvg.dataset.scroll = 'true';
      openMenuButton.dataset.scroll = 'true';
      const isMobile = window.matchMedia("(max-width: 800px)").matches;

      if(!isMobile) {
        li.forEach(li => {
          li.dataset.scroll = 'true';
        });
      }
    } else {
      menu.dataset.scroll = 'false';
      openMenuSvg.dataset.scroll = 'false';
      openMenuButton.dataset.scroll = 'false';
      li.forEach(li => {
        li.dataset.scroll = 'false';
      });
      menuButton.classList.remove('bg-white', 'text-red');
      menuButton.dataset.scroll = 'false';
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia("(max-width: 800px)").matches;
  
  if(isMobile) {
    activeMobileMenu();
    
  }

  if(isMobile && window.location.pathname === '/') {
    $('.slider').slick({
      arrows: true,
      autoplay: true,
      draggable: true,
      infinite: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev -left-[11px] z-10 before:content-none bg-red rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next -right-[9px] before:content-none bg-red rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></button>'
    });
    $('.secao-slider').slick({
      arrows: true,
      autoplay: true,
      draggable: true,
      infinite: true,
      prevArrow: '<button type="button" data-role="none" class="slick-prev -left-[11px] z-10 before:content-none bg-white rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>',
      nextArrow: '<button type="button" data-role="none" class="slick-next -right-[9px] before:content-none bg-white rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></button>'
    });
    // $('.depoimentos-slider').slick({
    //   arrows: true,
    //   autoplay: true,
    //   draggable: true,
    //   infinite: true,
    //   prevArrow: '<button type="button" data-role="none" class="slick-prev -left-[11px] z-10 before:content-none bg-white rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg></button>',
    //   nextArrow: '<button type="button" data-role="none" class="slick-next -right-[9px] before:content-none bg-white rounded-full w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg></button>'
    // });
  }

  stickyMenu();
});