(function () {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
      });
    });
  }

  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const product = data.get('product') || '';
      const body = [
        '姓名：' + data.get('name'),
        '公司：' + data.get('company'),
        '电话：' + data.get('phone'),
        '邮箱：' + (data.get('email') || ''),
        '产品/牌号：' + product,
        '月用量：' + (data.get('usage') || ''),
        '交货地：' + (data.get('city') || ''),
        '备注：' + (data.get('message') || '')
      ].join('%0D%0A');
      const subject = encodeURIComponent('【塑恩官网询价】' + (product || '产品询价'));
      window.location.href =
        'mailto:youty123@suenplastic.com?subject=' + subject + '&body=' + body;
      setTimeout(function () {
        window.location.href = 'inquiry-success.html?product=' + encodeURIComponent(product);
      }, 400);
    });
  }

  const params = new URLSearchParams(window.location.search);
  const productField = document.getElementById('product');
  if (productField && params.get('product')) {
    productField.value = params.get('product');
  }
})();
