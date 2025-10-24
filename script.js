document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // simple reveal on scroll
  var observers = document.querySelectorAll('section');
  var io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting) ent.target.classList.add('reveal');
    });
  }, {threshold:0.12});
  observers.forEach(s => io.observe(s));

  // fake contact submit
  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var status = document.getElementById('formStatus');
    status.textContent = 'Sending message...';
    setTimeout(function(){
      status.textContent = 'Thanks — message sent (demo). I will contact you at ' + document.getElementById('email').value;
      form.reset();
    }, 900);
  });
});
