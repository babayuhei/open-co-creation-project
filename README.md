# 失敗者の告白 — AI小説オープン共創プロジェクト

> AIが100%執筆した20万字の長編ビジネス小説「失敗者の告白」の設計ファイル・制作ドキュメントを公開するプロジェクトです。

📖 **[プロジェクトサイト（mdBook）](https://babayuhei.github.io/open-co-creation-project/)**　|　📕 **[小説本体](https://babayuhei.github.io/confession-of-a-loser/)**　|　📂 **[小説リポジトリ](https://github.com/babayuhei/confession-of-a-loser)**

---

## これは何か

「失敗者の告白」は、著者・馬場祐平がAIと共同で4週間かけて制作した長編ビジネス小説です。本文は1文字も人間が書いていませんが、キャラクター設計・ストーリー構造・文体ルール・フィードバックループのすべてを人間が設計しています。

このリポジトリは、その制作プロセスで使った**設計ファイル（S層・P層）**と、制作の方法論を解説する**ドキュメント**をオープンに公開するものです。

---

## SPMモデル

本プロジェクトは **SPMモデル（Settings → Plots → Manuscripts）** というデータ駆動型パイプラインで構築されています。

| 層 | 役割 | 対応ディレクトリ |
|:--|:-----|:--------------|
| **S: Settings** | キャラクター設定・OS理論・文体ガイド等（物語の憲法） | `src/starter/01_settings/` |
| **P: Plots** | シーンサマリー・伏線マップ（中間言語） | `src/starter/02_plots/` |
| **M: Manuscripts** | 小説本文（最終アウトプット） | [別リポジトリ](https://github.com/babayuhei/confession-of-a-loser) |

上の層が変わると下の層を再生成し、推敲フェーズでは逆方向にも伝播させます。

---

## ドキュメント構成

| ページ | 内容 |
|:------|:-----|
| [①なぜ作ったか](src/00_intro.md) | プロジェクトの経緯と動機 |
| [②制作の舞台裏](src/01_behind.md) | MTG記録と試行錯誤のプロセス |
| [③AIを使った長編小説の現在地](src/02_current.md) | 「日本初」の根拠 |
| [④AI長編小説の創作モデル](src/03_practice.md) | SPMモデルの設計と技術的な仕組み |
| [⑤フォークして参加する](src/04_advanced.md) | IssueやPRでの参加方法 |
| [⑥SPMファイル実物](src/05_spm_files.md) | S層・P層の全ファイル一覧 |

---

## 参加する

オープンソースの小説プロジェクトとして、GitHub上で公開しています。コードを書かなくても参加できます。

- **読んだ感想・指摘** → [Issue](https://github.com/babayuhei/open-co-creation-project/issues) を立ててください
- **誤字脱字の修正** → Pull Request を送ってください
- **設計ファイルを使って自分の小説を書く** → フォークして自由に使えます（MIT License）

> 2026年3月31日まで公開修正期間として改稿を続けています。4月以降に正式版リリース予定（現在はベータ版）。

---

## スターターキットとして使う

`src/starter/` 以下の設定ファイル・プロットファイルをフォークし、自分の小説に書き換えて使えます。

```bash
# このリポジトリをフォーク・クローン
git clone https://github.com/<your-username>/open-co-creation-project.git
cd open-co-creation-project

# 設定ファイルを編集してAIに読み込ませる
# 詳しい手順は src/starter/README.md を参照
```

AIへの投入順序:
```
S（settings）→ P（scenario → chapters → scenes）→ M（manuscripts）
```

---

## ディレクトリ構成

```
open-co-creation-project/
├── book.toml              ← mdBook設定
├── src/                   ← mdBookソース（Markdown）
│   ├── 00_intro.md        ← ①なぜ作ったか
│   ├── 01_behind.md       ← ②制作の舞台裏
│   ├── 02_current.md      ← ③AIを使った長編小説の現在地
│   ├── 03_practice.md     ← ④AI長編小説の創作モデル
│   ├── 04_advanced.md     ← ⑤フォークして参加する
│   ├── 05_spm_files.md    ← ⑥SPMファイル実物
│   ├── SUMMARY.md         ← 目次定義
│   └── starter/           ← スターターキット
│       ├── 01_settings/   ← S層: キャラクター設定・OS理論・文体ガイド等
│       └── 02_plots/      ← P層: プロットサマリー・シーン一覧
├── book/                  ← mdBookビルド済みHTML
└── .github/workflows/     ← GitHub Actions（自動デプロイ）
```

---

## ライセンス

| 対象 | ライセンス |
|:-----|:---------|
| S層: `src/starter/01_settings/` | MIT License — 改変・再利用自由（帰属表示要） |
| P層: `src/starter/02_plots/` | MIT License — 同上 |
| ドキュメント（`src/*.md`） | CC BY 4.0 |
| 小説本文（M層・別リポジトリ） | CC BY-NC-ND 4.0 — 参照のみ可、改変・再配布不可 |

---

## 著者

**馬場祐平**　[@babayuhei](https://github.com/babayuhei)
