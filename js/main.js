function animateStatCounters() {
  var counters = document.querySelectorAll('[data-stat-value]');
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };

  function animate(el) {
    var target = parseFloat(el.getAttribute('data-stat-value'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = parseInt(el.getAttribute('data-duration') || '1100', 10);
    var start = null;

    function tick(now) {
      if (start === null) start = now;
      var t = Math.min(1, (now - start) / duration);
      var val = Math.round(target * ease(t));
      el.textContent = prefix + val.toLocaleString('ko-KR') + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  } else {
    counters.forEach(animate);
  }
}

document.addEventListener('DOMContentLoaded', animateStatCounters);
