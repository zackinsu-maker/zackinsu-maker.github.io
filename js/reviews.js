var reviewPool = [
  { name: "김정호 소장", meta: "강남 오피스빌딩 관리소장", tag: "소방·기계", text: "소방 종합점검부터 기계설비 성능점검까지 한 번에 챙겨주셔서 매년 일정 때문에 받던 스트레스가 사라졌습니다. 보고서까지 알아서 제출해 주시니 든든해요." },
  { name: "이수민 팀장", meta: "물류센터 시설팀장", tag: "정보통신", text: "정보통신설비 성능점검이 새로 의무화된 걸 모르고 있었는데, 먼저 안내해 주시고 기한 안에 마무리해 주셨어요. 행정처분 걱정을 덜었습니다." },
  { name: "박영재 과장", meta: "복합상가 관리사무소", tag: "소방점검", text: "작동점검·종합점검 일정을 캘린더로 정리해 주시고 마감 전에 꼭 연락 주십니다. 현장 응대도 빨라서 신뢰가 갑니다." },
  { name: "최은영 부장", meta: "병원 시설관리 책임자", tag: "실내공기질", text: "다중이용시설이라 실내공기질 측정이 까다로운데 항목별로 꼼꼼히 측정하고 개선점까지 짚어주셨어요. 설명이 친절해서 좋았습니다." },
  { name: "정민석 대리", meta: "지식산업센터 관리팀", tag: "기계설비", text: "기계설비 유지관리자 선임부터 성능점검까지 절차를 처음부터 끝까지 대행해 주셨습니다. 복잡한 법령을 쉽게 풀어 설명해 주셔서 이해가 됐어요." },
  { name: "한지우 소장", meta: "오피스텔 관리소장", tag: "원스톱", text: "여러 업체에 따로 맡기던 점검을 한 곳에서 처리하니 비용도 줄고 관리도 편해졌습니다. 진작 맡길 걸 그랬어요." },
  { name: "윤성호 팀장", meta: "제조공장 안전관리팀", tag: "대기측정", text: "대기 자가측정 주기를 놓치기 쉬운데 사전에 챙겨주시고 결과 정리까지 깔끔하게 해주셨습니다. 담당자 입장을 잘 이해해 주세요." },
  { name: "강현주 과장", meta: "상업시설 운영팀", tag: "소방·통신", text: "점검 결과를 그냥 던져주는 게 아니라 무엇을 보완해야 하는지 우선순위로 알려주셔서 실무에 큰 도움이 됐습니다." },
  { name: "조대현 소장", meta: "아파트 관리사무소장", tag: "기계설비", text: "주민 민원이 걱정이었는데 점검 일정과 내용을 미리 공유해 주셔서 안내문 작성이 수월했습니다. 현장 매너도 좋으십니다." },
  { name: "임세라 차장", meta: "리테일 점포개발팀", tag: "원스톱", text: "신규 건물 오픈 전에 필요한 법정 점검을 한 번에 정리해 주셔서 오픈 일정에 차질이 없었어요. 응대 속도가 정말 빠릅니다." },
  { name: "노진우 부장", meta: "데이터센터 인프라팀", tag: "정보통신", text: "정보통신설비가 핵심인 시설이라 꼼꼼함이 중요한데, 기준에 맞춰 빠짐없이 점검하고 기록을 체계적으로 남겨주셔서 만족합니다." },
  { name: "서아름 대리", meta: "호텔 시설팀", tag: "실내공기질", text: "투숙객 안전과 직결되는 부분이라 신경 쓰였는데, 측정부터 개선 권고까지 전문적으로 챙겨주셨습니다. 보고서가 깔끔해요." },
  { name: "오태경 소장", meta: "업무용 빌딩 관리소장", tag: "건물보험", text: "특수건물이라 화재보상책임 보험 가입이 의무인 줄 몰랐는데 먼저 챙겨주셔서 과태료를 피했습니다. 보장 범위까지 알기 쉽게 설명해 주셔서 안심이 됩니다." },
  { name: "백승현 팀장", meta: "복합문화시설 관리팀", tag: "소방점검", text: "법정 주기를 늘 헷갈렸는데 우리 건물 기준으로 명확히 정리해 주셨어요. 과태료 걱정 없이 본업에 집중할 수 있게 됐습니다." },
  { name: "문가영 과장", meta: "물류창고 안전팀", tag: "대기측정", text: "배출시설 자가측정이 처음이라 막막했는데 종별 주기부터 측정 항목까지 친절하게 안내받았습니다. 끝까지 함께해 주셔서 감사합니다." }
];

function shuffleReviews() {
  var pool = reviewPool.slice();
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
  }
  return pool.slice(0, 6);
}

function renderReviews() {
  var grid = document.getElementById('reviewGrid');
  if (!grid) return;
  var picks = shuffleReviews();
  grid.innerHTML = picks.map(function (r) {
    var initial = r.name.charAt(0);
    return (
      '<div class="review-card">' +
        '<div style="display:flex; align-items:center; justify-content:space-between;">' +
          '<span class="review-stars">★★★★★</span>' +
          '<span class="badge badge-signal">' + r.tag + '</span>' +
        '</div>' +
        '<p class="review-text">&quot;' + r.text + '&quot;</p>' +
        '<div class="review-meta">' +
          '<span class="review-avatar">' + initial + '</span>' +
          '<div><div class="review-name">' + r.name + '</div><div class="review-org">' + r.meta + '</div></div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  renderReviews();
  var btn = document.getElementById('reshuffleBtn');
  if (btn) btn.addEventListener('click', renderReviews);
});
