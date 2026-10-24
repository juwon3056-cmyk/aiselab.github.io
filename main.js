// 헤더: index는 히어로를 지나면 흰 배경, 하위 페이지는 항상 흰 배경
(function(){
  var hd = document.querySelector('.hd');
  var hero = document.querySelector('.hero');
  var drawer = document.querySelector('.drawer');
  var btn = document.querySelector('.hbg');
  if(!hd) return;
  function upd(){
    var solid = !hero || window.scrollY > hero.offsetHeight - 80 || (drawer && drawer.classList.contains('open'));
    hd.classList.toggle('solid', !!solid);
  }
  upd(); window.addEventListener('scroll', upd, {passive:true});
  if(btn && drawer){
    function set(open){
      btn.classList.toggle('open', open); drawer.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : ''; upd();
    }
    btn.addEventListener('click', function(){ set(!drawer.classList.contains('open')); });
    drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ set(false); }); });
    window.addEventListener('resize', function(){ if(window.innerWidth > 960) set(false); });
  }
})();

// 스크롤 등장
(function(){
  var els = document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){ io.observe(e); });
})();

// 소식 이미지 크게 보기
(function(){
  var imgs = document.querySelectorAll('.news .media img');
  if(!imgs.length) return;
  var box = document.createElement('div'); box.className = 'lightbox';
  var big = document.createElement('img'); box.appendChild(big); document.body.appendChild(box);
  function close(){ box.classList.remove('open'); document.body.style.overflow = ''; }
  imgs.forEach(function(im){ im.addEventListener('click', function(){
    big.src = im.src; big.alt = im.alt; box.classList.add('open'); document.body.style.overflow = 'hidden';
  }); });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();

// 논문 필터 (전체 / 학술지 / 학회) + 편수 자동 계산
// 논문을 추가·삭제하면 버튼과 연도 옆 숫자는 자동으로 맞춰집니다.
(function(){
  var chips = document.querySelectorAll('.chip[data-f]');
  if(!chips.length) return;
  var en = document.documentElement.lang === 'en';
  var listed = document.querySelectorAll('.pubs .grp .pub');
  var years = Array.prototype.filter.call(document.querySelectorAll('.pubs .grp'), function(g){ return /^\d{4}/.test(g.querySelector('h2') ? g.querySelector('h2').textContent : ''); });
  var yearPubs = []; years.forEach(function(g){ yearPubs = yearPubs.concat(Array.prototype.slice.call(g.querySelectorAll('.pub'))); });
  var n = {all: yearPubs.length, jour: 0, conf: 0};
  yearPubs.forEach(function(p){ n[p.dataset.k] = (n[p.dataset.k]||0) + 1; });
  chips.forEach(function(c){ c.textContent = c.textContent.replace(/\d+$/, n[c.dataset.f]); });
  years.forEach(function(g){
    var k = g.querySelectorAll('.pub').length, sp = g.querySelector('h2 span');
    if(sp) sp.textContent = en ? k + (k > 1 ? ' papers' : ' paper') : k + '편';
  });
  chips.forEach(function(c){ c.addEventListener('click', function(){
    chips.forEach(function(o){ o.classList.toggle('on', o === c); });
    var f = c.dataset.f;
    document.querySelectorAll('.pubs .pub').forEach(function(p){
      p.hidden = !(f === 'all' || p.dataset.k === f);
    });
    document.querySelectorAll('.pubs .grp').forEach(function(g){
      g.hidden = !g.querySelector('.pub:not([hidden])');
    });
  }); });
})();
