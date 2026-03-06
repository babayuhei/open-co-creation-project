# AI小説スターターキット

「失敗者の告白」プロジェクトのSPMファイル（S層・P層）一式です。このリポジトリをフォークして、AIを使った長編小説の生成を試せます。

## ディレクトリ構成

```
starter/
├── 01_settings/    ← S層: キャラクター設定・OS理論・文体ガイドなど（MIT License）
└── 02_plots/       ← P層: プロットサマリー（全体構成・各部シーン一覧）（MIT License）
```

## 使い方

### 1. このリポジトリをフォーク・クローン

```bash
git clone https://github.com/<your-username>/open-co-creation-project.git
cd open-co-creation-project
```

### 2. 原稿ファイル（M層）を取得する（任意）

原稿は別リポジトリで管理されています。文体の参考にしたい場合は以下でクローンしてください。

```bash
git clone https://github.com/babayuhei/confession-of-a-loser.git 03_manuscripts
```

> 原稿ファイルは CC BY-NC-ND 4.0（改変禁止・非商用のみ）です。参照のみ可、改変・再配布不可。

### 3. 設定ファイルを自分向けに書き換える

`01_settings/` の各ファイルを自分の小説の設定に合わせて編集します。

| ファイル | 内容 |
|:--------|:-----|
| `characters.md` | 登場人物の詳細設定（背景・性格・関係性） |
| `os_theory.md` | 物語の中心となるOS理論の体系 |
| `storyline.md` | ストーリーライン設計書（全体の流れ） |
| `style_guide.md` | 執筆・文体ガイドライン |
| `app_design.md` | アプリ設計書（作中に登場するアプリの仕様） |

### 4. AIへの投入順序（SPMモデル）

```
S（settings）→ P（scenario → chapters → scenes）→ M（manuscripts）
```

1. `01_settings/` の全ファイルをコンテクストに読み込む
2. `02_plots/cross_part_overview.md` でシナリオ全体を把握させる
3. 生成したい章の `02_plots/scene_summaries_partN.md` を指定
4. 1シーンずつ生成・確認・修正のループを回す

詳しいプロセスは「[AI長編小説の創作モデル](https://babayuhei.github.io/open-co-creation-project/03_practice.html)」を参照してください。

## ライセンス

| 対象 | ライセンス |
|:-----|:---------|
| `01_settings/`（設定ファイル） | MIT License — 改変・再利用自由（帰属表示要） |
| `02_plots/`（プロットサマリー） | MIT License — 同上 |
