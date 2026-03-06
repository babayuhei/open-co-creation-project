# SPMファイル実物

このページは、プロジェクトで実際に使用した S（設計図）と P（プロット）の全ファイル一覧です。[④AI長編小説の創作モデル](03_practice.md)で説明したフレームワークの「実物」にあたります。

---

## S: Settings（設計図）

> **ライセンス:** このセクションのすべてのファイルは [MIT License](https://github.com/babayuhei/confession-of-a-loser/blob/main/LICENSE-MIT) で公開されています。自由に改変・再利用できます（帰属表示を維持してください）。

物語全体の「Single Source of Truth」。AIに世界観を理解させるための不変定義です。ここに書かれた設計が変わらない限り、何万字の原稿を生成しても一貫性が保たれます。ソフトウェア開発でいえば MVC の **Model（Schema/DB）** に相当します。

| ファイル | 内容 |
|:--------|:-----|
| [storyline.md](settings/storyline.md) | 作品コンセプト・核心メッセージ・全体構成・各部テーマ |
| [os_theory.md](settings/os_theory.md) | OS理論の体系（自分本位↔他者本位、思考型↔行動型の4象限）|
| [characters.md](settings/characters.md) | 登場人物のOS・形成背景・変容プロセス・口調設計 |
| [style_guide.md](settings/style_guide.md) | 文体ルール・NG表現・シーンタイプ別構成パターン |
| [app_design.md](settings/app_design.md) | PDCA・GROWモデルの埋め込み設計・[L]シーン8ステップ構造 |

**読み順:**
```
storyline.md → os_theory.md → characters.md → style_guide.md → app_design.md
```

---

## P: Plots（中間生成物）

> ネタバレが含まれます。小説本体を先に読むことをおすすめします。

Sという抽象的な設計図を、Mという具体的な描写に変換するための**中間言語**です。シーン単位で「何が起きるか」を定義することで、いきなり原稿を書かせるよりも論理的な破綻が激減します。ソフトウェア開発でいえば **Controller（Logic）** に相当します。

各シーンのサマリーには「ビート（転換点）」と「PDCA層（学習フレームワーク上の位置）」を必ず記載しています。この地図情報がないと、AIは毎シーン独立した起承転結を書いてしまいます。

| ファイル | 内容 |
|:--------|:-----|
| [全体構成概観](plots/cross_part_overview.md) | 全体の時系列・伏線マップ・部ごとのテーマ |
| [第1部サマリー](plots/scene_summaries_part1.md) | 第1部・全シーンのビート・PDCA層・伏線情報 |
| [第2部サマリー](plots/scene_summaries_part2.md) | 第2部・全シーンのビート・PDCA層・伏線情報 |
| [第3部サマリー](plots/scene_summaries_part3.md) | 第3部・全シーンのビート・PDCA層・伏線情報 |

---

## M: Manuscripts（原稿）

M層（小説本文）は小説本体として公開しています。MIT License の対象外です。

→ **[失敗者の告白（小説本体）](https://babayuhei.github.io/confession-of-a-loser/)**

---

## プロジェクトプリンシプルとは

SPMモデルに加えて、このプロジェクトには **プロジェクトプリンシプル** と呼ぶファイルが存在します。バージョンを通じて蓄積された「同じ失敗を繰り返さないための設計原則」をまとめたものです。

主な内容:

| 区分 | 内容 |
|:-----|:-----|
| **ファイル体系** | `vXX/00_project_principles.md` が恒久設計（バージョン不問の原則）、`00_vXX_plan.md` がバージョン固有の計画 |
| **分割生成の原則** | 1シーン=1生成、1ファイル=2,000〜3,000字。一気生成はしない |
| **生成パイプライン** | S（settings）→ P（scenario → chapters → scenes）→ M（manuscripts）の順に解像度を上げる |
| **アンチパターン** | 設定を変えずに原稿だけ直す、シーン番号がない状態で生成する、など蓄積された禁止事項 |
| **品質基準** | セリフの「誰が言っても同じ」問題、ナレーション過多、コーチングシーン8ステップの完結性 |

このプリンシプルはv18時点のもので、[GitHub リポジトリ](https://github.com/babayuhei/confession-of-a-loser) の `v18/00_project_principles.md` で参照できます（MIT License）。

---

- [①なぜ作ったか](00_intro.md) — プロジェクトの動機と経緯
- [②制作の舞台裏](01_behind.md) — MTGの記録と試行錯誤のプロセス
- [③AIを使った長編小説の現在地](02_current.md) — 「日本初」の根拠について
- [④AI長編小説の創作モデル](03_practice.md) — SPMモデルの設計と技術的な仕組み
- [⑤フォークして参加する](04_advanced.md) — GitHubでの参加方法
