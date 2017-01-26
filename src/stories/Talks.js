import React from 'react';
import '../index.css';
import styles from './styles'
import App from '../App';

const First = () => (
  <div style={styles.main}>
    <h1 style={styles.center}>フロントエンドはじめました</h1>
  </div>
)

const Second = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>About me</h1>
    <ul style={styles.list}>
      <li>GitHub: <a href="http://github.com/okamuuu" target="_blank">http://github.com/okamuuu/</a></li>
      <li>Blog: <a href="http://okamuuu.hatenablog.com/" target="_blank">http://okamuuu.hatenablog.com/</a></li>
      <li>得意な言語: JavaScript, Node.js, Perl, Python, Go</li>
      <li>人生の目的: 外国でのんびりしながらだらだらプログラミングして過ごしたい</li>
    </ul>
  </div>
)

const Third = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>近況</h1>
    <ul style={styles.list}>
      <li>最近 Go と React.js デビューしました</li>
      <li>小規模なWEBサービス構築依頼がきて</li>
      <li>好きな言語使っていいと言われたので</li>
      <li>Go と React.js で Single Page Application しました</li>
    </ul>
  </div>
)

const Fourth = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>話すこと</h1>
    <ul style={styles.list}>
      <li>一人でフルスタックエンジニアすることになった</li>
      <li>とはいえ誰か人を雇っておかないと後で困る</li>
      <li>フロントエンドエンジニアを雇いたい</li>
      <li>コーダー雇うからフロントエンジニアに育てろ言われる</li>
      <li>やってみた</li>
    </ul>
  </div>
)

const Fifth = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>登場人物</h1>
    <h2>サーバーサイドエンジニア</h2>
    <p>API のインターフェースやデータ構造を考えたりインフラを意識してコードを書く人</p>
    <h2>HTMLコーダー</h2>
    <p>Zeplin などのデザインの指示書やスタイルガイドから HTML, CSS を書き出す人</p>
    <h2>フロントエンドエンジニア</h2>
    <p>
      書き出された HTML, CSS 元に、npm, webpack を使ってライブラリを使って簡素な HTML と minify された Javascript を用意する人。
      <span style={styles.textRed}>ここではフロントエンドエンジニアに Flash のようなインタラクティブデザインは求めないとします。</span>
    </p>
  </div>
)

const Sixth = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>やりたいこと</h1>
    <ul style={styles.list}>
      <li>React を使ってサービス作った</li>
      <li>なんだけど全ての修正対応を自分がしたくない</li>
      <li>というわけで React.js を使える人材を雇いたい</li>
      <li>雇えないから育てるしかなかった</li>
      <li style={styles.textBlue}>HTMLコーダに React.js を伝授しよう</li>
    </ul>
  </div>
)

const Seventh = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>試して見た</h1>
    <ul style={styles.list}>
      <li>webpack の設定方法がわからない</li>
      <li>設定方法をドキュメント化してみる</li>
      <li>どこにファイルを作っていいかわからない</li>
      <li>react-router の記述は全部こちらでやっておこう</li>
      <li>DatePicker など外部ライブラリはどうやれば...</li>
      <li style={styles.textRed}>やはりコーダーさんには React.js は荷が重いようだ...</li>
    </ul>
  </div>
)

const Eighth = () => (
  <div style={styles.main}>
    <h1 style={styles.head}>起きた変化</h1>
    <p>frontend の何たるかが少しわかった気がする</p>
    <ul style={styles.list}>
      <li>プランナーの資料を見ながら画面遷移をイメージする必要があるので</li>
      <li>噛み合わない内容があれば早い段階で気づく</li>
      <li>WEB API の interface に密接に関わるので</li>
      <li>API が不適切だったりすると早い段階で気づく</li>
      <li>デザイン指示書の要素が欠落していたりすると早い段階で気づく</li>
    </ul>
    <p style={styles.textBlue}>デザイナー、プランナー、エンジニアがそれぞれ思い描いている歯車が噛み合わない事に早い段階で気づく</p>
  </div>
)

const Ninth = () => (
  <div style={styles.main}>
    <h1 style={styles.center}>結論</h1>
  </div>
)

const Tenth = () => (
  <div style={styles.main}>
    <h1 style={styles.center}>フロントエンドが<br />強いチームは勝てる</h1>
  </div>
)

const Eleventh = () => (
  <div style={styles.main}>
    <h1 style={styles.center}>ご静聴ありがとうございました</h1>
  </div>
)


export default {
  First, Second, Third, Fourth, Fifth,
  Sixth, Seventh, Eighth, Ninth, Tenth, Eleventh,
}
