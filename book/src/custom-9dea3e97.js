// サイドバー上部に小説リンクを挿入
(function() {
  function insertNovelLink() {
    var sidebar = document.querySelector('.sidebar-scrollbox');
    if (!sidebar) return;
    // 既に追加済みなら何もしない
    if (sidebar.querySelector('.novel-link-box')) return;
    
    var link = document.createElement('a');
    link.className = 'novel-link-box';
    link.href = 'https://babayuhei.github.io/confession-of-a-loser/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '小説『失敗者の告白』を読む';
    
    // サイドバーの最初の子要素の前に挿入
    sidebar.insertBefore(link, sidebar.firstChild);
  }
  
  // DOM読み込み後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertNovelLink);
  } else {
    insertNovelLink();
  }
})();
