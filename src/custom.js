// サイドバー下部に小説リンクを挿入
(function() {
  function insertNovelLink() {
    var sidebar = document.querySelector('.sidebar-scrollbox');
    if (!sidebar) return;
    if (sidebar.querySelector('.novel-link-box')) return;

    var hr = document.createElement('hr');
    hr.className = 'novel-link-hr';

    var link = document.createElement('a');
    link.className = 'novel-link-box';
    link.href = 'https://babayuhei.github.io/confession-of-a-loser/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '小説『失敗者の告白』を読む';

    sidebar.appendChild(hr);
    sidebar.appendChild(link);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertNovelLink);
  } else {
    insertNovelLink();
  }
})();
