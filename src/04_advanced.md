# フォークして参加する

馬場祐平です。

このページでは、このプロジェクトにどうやって参加できるかを説明しています。

オープンソースの小説プロジェクトとして、GitHub上で公開しています。コードを書かなくても参加できます。読んでいて「ここが気になった」と思うことがあれば、ぜひIssueで教えてください。設定ファイルを自由に使って何か作ってみたいなら、MIT Licenseで自由です。誤字を見つけたら、PRを送ってもらえると助かります。

「参加してほしい」というよりは、「もし気が向いたら乗ってきてもらえると面白いことになりそう」というスタンスです。

---

## リポジトリ構造

```
confession-of-a-loser/
├── public/               ← mdBook（小説本文）
│   └── src/
│       ├── settings/     ← S層の実体（MIT License）
│       └── [章ファイル群] ← M層の実体（CC BY-NC-ND 4.0）
├── public/project/       ← mdBook（このドキュメント）
│   └── src/
│       ├── settings/     ← S層（閲覧用コピー）
│       └── plots/        ← P層（閲覧用コピー・MIT License）
├── starter/              ← フォーク用スターターキット
│   ├── README.md         ← 使い方・ライセンス説明
│   ├── 01_settings/      → symlink: public/project/src/settings/
│   ├── 02_plots/         → symlink: public/project/src/plots/
│   └── 03_manuscripts/   → symlink: public/src/
├── v23/                  ← 制作作業ディレクトリ（個人情報含む・非公開）
└── OLD/                  ← v1〜v22のアーカイブ
```

`starter/` 以下の symlink 経由でアクセスできるファイルは MIT License（設定・プロット）または CC BY-NC-ND 4.0（本文原稿）でライセンスされています。

---

## Issueで感想や指摘を伝える

GitHubアカウントがあれば、Issueを使って参加できます。

[Issues](https://github.com/babayuhei/confession-of-a-loser/issues/new/choose) を開くと、4つのテンプレートを選べます。

| テンプレート | こんな時に |
|:-----------|:--------|
| 🔖 **Book Review / Reading Note** | 読書感想・全体的な意見 |
| 🐛 **Bug Report（誤字脱字・矛盾）** | 誤字脱字、設定との矛盾、前後の不整合 |
| 💡 **Feature Request（展開提案）** | このシーンをこう変えたら、という提案 |
| 📖 **Chapter Feedback** | 特定の章・シーンへのフィードバック |

### Issueの読み方：ある読者のケース

3月2日、知人の女性（20代・人材紹介業勤務）が本作の初めての部外者読者として読んでくれました。フィードバックの一部はこんな内容でした。

> 「翼の成長が急すぎる気がする。第2部でもう少し躓きを見せてほしい。あと、第3部の解決が著者本人のエピソードをやや美化している可能性がある。」

このフィードバックは議事録に自動記録され、翌日の改稿に反映されてv23になりました。

「面白い」「つまらない」だけでなく、「この部分のリアリティが足りない」「この論理展開が飛躍に感じる」という観察が、改稿の材料になります。

---

## Pull Requestで設定ファイルを改善する

設定ファイル（MIT License）を直接編集して改善を提案することもできます。

```bash
# 1. リポジトリをフォーク（GitHubのUIで）

# 2. クローン
git clone https://github.com/<your-username>/confession-of-a-loser.git

# 3. ブランチを切る
git checkout -b improve/characters-yui-backstory

# 4. 設定ファイルを編集する
# （例: starter/01_settings/characters.md）

# 5. コミット・プッシュ・PR作成
git add .
git commit -m "settings: 結衣の形成背景に大学時代のエピソードを追加"
git push origin improve/characters-yui-backstory
```

Pull Requestをマージする前に、貢献者ライセンス合意（CLA）へのコメント確認が必要です。詳細は [CONTRIBUTING.md](https://github.com/babayuhei/confession-of-a-loser/blob/main/CONTRIBUTING.md) を参照してください。

本文（原稿）へのPRは現時点では受け付けていません。本文はCC BY-NC-ND 4.0（改変禁止）のため、改稿は僕が行います。

---

## ライセンスの境界線

| 対象 | ライセンス | どんな使い方ができるか |
|:-----|:---------|:-----|
| 小説本文（原稿）| CC BY-NC-ND 4.0 | 改変禁止・非商用のみ再配布可 |
| 設定ファイル（settings/）| MIT | 自由に改変・再利用可（帰属表示要） |
| 制作ドキュメント（docs/）| MIT | 同上 |

設定ファイルを使って自分の小説を書く、OS理論をプロンプトに組み込む、文体ガイドラインを参考にする——そういった使い方はMITの範囲内で自由です。

---

## 役割と連絡先

| 役割 | 誰 | できること |
|:-----|:--|:---------|
| Author | 馬場祐平 | マージ権限、本文改稿、ライセンス管理 |
| Co-Creator | K氏 | 設計フィードバック、MTG議事録のレビュー |
| Contributors | あなた | Issue報告、設定ファイルへのPR |

馬場への直接連絡: babayuhei@gmail.com

---

## 公開修正期間

**2026年3月31日まで**、積極的に改稿を続けています。この期間中に届いたIssueは優先的に検討します。

ぜひ、何か気になることがあれば気軽にIssueを送ってみてください。

**→ [Issueを作成する](https://github.com/babayuhei/confession-of-a-loser/issues/new/choose)**

---

- [①なぜ作ったか](00_intro.md) — プロジェクトの動機と経緯
- [②制作の舞台裏](01_behind.md) — MTGの記録と試行錯誤のプロセス
- [③AIを使った長編小説の現在地](02_current.md) — 「日本初」の根拠について
- [④AI長編小説の創作モデル](03_practice.md) — SPMモデルの設計と技術的な仕組み
