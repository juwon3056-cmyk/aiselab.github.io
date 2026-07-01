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
