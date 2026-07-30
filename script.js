document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a, button').forEach(el => {
    const text = el.textContent.trim();

    if (text.includes('인기업체 바로가기')) {
      el.style.background = '#7b3fe4';
      el.style.color = '#ffffff';
      el.style.border = '2px solid #7b3fe4';
    }

    if (text === '이용 방법 보기') {
      el.style.background = '#ffffff';
      el.style.color = '#7b3fe4';
      el.style.border = '2px solid #7b3fe4';
    }

    if (text === '예약 전 확인사항') {
      el.style.background = '#ffffff';
      el.style.color = '#7b3fe4';
      el.style.border = '2px solid #7b3fe4';
    }
  });
});
