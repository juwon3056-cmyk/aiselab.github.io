// 모바일 메뉴 토글
(function(){
  var btn = document.querySelector('.hbg');
  var drawer = document.querySelector('.drawer');
  if(!btn || !drawer) return;
  function close(){ btn.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow=''; }
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var open = btn.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', close); });
  document.addEventListener('click', function(e){
    if(!btn.contains(e.target) && !drawer.contains(e.target)) close();
  });
  window.addEventListener('resize', function(){ if(window.innerWidth>860) close(); });
})();

// 소식 이미지 라이트박스 (클릭 시 원본 전체 보기)
(function(){
  var imgs = document.querySelectorAll('.news-media img');
  if(!imgs.length) return;
  var box = document.createElement('div');
  box.className = 'lightbox';
  var big = document.createElement('img');
  box.appendChild(big);
  document.body.appendChild(box);
  function open(src, alt){ big.src = src; big.alt = alt || ''; box.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close(){ box.classList.remove('open'); document.body.style.overflow = ''; big.src = ''; }
  imgs.forEach(function(im){ im.addEventListener('click', function(){ open(im.src, im.alt); }); });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();
