import React, { Component } from 'react';
import { withKnobs, number } from '@kadira/storybook-addon-knobs'
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Title, AboutMe, Panel, Ul } from '../components/Talks'
import { Bootstrap3ishPaginator } from 'react-paginators'

class Bootstrap3ishPaginatorStory extends Component {

  constructor(props) {
    super(props)
    this.state = { current: 3 }
  }

  handleClick(page) {
    this.setState({current: page})
  }

  render() {
    return (
      <div style={{padding: "30px"}}>
        <h2>Qiita に Tutorial 書いています</h2>
        <p><a href="http://qiita.com/okamuuu/items/cc9b86fbac20da27bcee" target="_blank">HTMLコーダー向けの Tutorial</a></p>
        <p><a href="http://qiita.com/okamuuu/items/1b94ab69d1bc3fb82d27" target="_blank">サーバーサイドエンジニア向けの Tutorial</a></p>
        <p>ハンズオンみたいなのを開催したい</p>

        <h2 style={{paddingTop: "20px"}}>pagination する web component を作りました</h2>
        <p><a target="_blank" href="https://www.npmjs.com/package/react-paginators">https://www.npmjs.com/package/react-paginators</a></p>
        <Bootstrap3ishPaginator
          current={number('current', this.state.current)}
          last={number('last', 20)}
          maxPageCount={number('max page count', 10)}
          onClick={this.handleClick.bind(this)}
        />
        <h2 style={{paddingTop: "20px"}}>あとそれから</h2>
        <p>Google の <a target="_blank" href="http://postd.cc/googles-quic-protocol-moving-web-tcp-udp/">Google の QUIC プロトコル</a>はサーバーサイドエンジニアは勉強したほうがいいですか？</p>
      </div>
    )
  }
}

export default () =>
  storiesOf('2017/03/25 Hachioji.pm', module)
    .addDecorator(withKnobs)
    .add('Single Page Application のはじめかた', () => (
      <Title>Single Page Application のはじめかた</Title>
    ))
    .add('About me', () => (
      <AboutMe />
    ))
    .add('話すこと', () => (
      <Panel title="話すこと">
        <Ul>
          <li>個人で SPA つくりたい、という話ではなくチームとして SPA したい場合の話</li>
          <li>SPA がフロントエンドエンジニアが少ない気がする</li>
          <li>単騎突入して SPA しちゃうとタスクが山積みになって詰む</li>
          <li>HTML コーダーに Web components の作成を依頼しよう</li>
          <li>生成された components を再利用すれば React.js の作業コストは思ったより少ない</li>
        </Ul>
      </Panel>
    ))

    .add('SPA をチームで', () => (
      <Panel title="SPA をチームで">
        <Ul>
          <li>個人で小規模な SPA つくれる人は多いと思う</li>
          <li>中規模な SPA つくれるチームは少ないと思う</li>
          <li>戦闘能力の高いフロントエンジニアが一人無双</li>
          <li>一人無双させないように他のエンジニアも努力する</li>
          <li>チーム力が試される</li>
        </Ul>
      </Panel>
    ))

    .add('SPA ができるフロントエンドが少ない', () => (
      <Panel title="SPA ができるフロントエンドが少ない">
        <Ul>
          <li>フロントエンドエンジニア自体は結構人口がいるはず</li>
          <li>SPA できるフロントエンジニアは人口が減る</li>
          <li>React.js, Angular.js, Vue.js</li>
          <li>redux, RxJS</li>
          <li>一人のエンジニアが SPA した場合、後継者が見つからない</li>
          <li>エンジニアが急に去ったらどうする?</li>
          <li>分業しておく</li>
        </Ul>
      </Panel>
    ))
    .add('HTML コーダーに Web components の作成を依頼しよう', () => (
      <Panel title="HTML コーダーに Web components の作成を依頼しよう">
        <Ul>
          <li>HTMLコーダーをフロントエンドエンジニアにジョブチェンジは厳しかった(Hachiojipm#63)</li>
          <li>components を追加する事だけをお願いすると割とうまくいった</li>
          <li>具体的には storybook に components を追加して PR してもらうまで</li>
          <li>コーディングとインタラクティブなモーション追加は任せることは可能だと思う</li>
          <li>とはいえ全体の設計はこららでハンドリングが必要。callback を渡す処理など</li>
          <li>これでかなりフロントエンドエンジニアの負担が軽くできる</li>
        </Ul>
      </Panel>
    ))
    .add('生成された components を再利用すれば React.js の作業コストは少ない', () => (
      <Panel title="生成された components を再利用すれば React.js の作業コストは少ない">
        <Ul>
          <li>web components を追加するだけでいい感じの画面が生成されていく</li>
          <li>components さえあればフロントエンドエンジニアでなくても画面の追加ぐらいはできる</li>
          <li>SPA できるフロントエンドエンジニアはレアキャラ</li>
          <li>サーバーサイドエンジニアはそこらへんにいる</li>
          <li>サーバーサイドエンジニアのみなさん。勇気をだして React.js を始めましょう</li>
          <li>redux を使わなくてもある程度は SPA できる</li>
        </Ul>
      </Panel>
    ))
    .add('まとめ', () => (
      <Panel title="まとめ">
        <Ul>
          <li>HTMLコーダーに web components を作成してもらいましょう</li>
          <li>サーバーサイドエンジニアのみなさんも少しだけ React.js をやりましょう</li>
          <li>redux を使わなければかなりシンプルに SPA できる</li>
          <li>React.js, Angular.js, Vue.js のどれを選択しても良いと思いますが分業するポイントの設定が大事</li>
       </Ul>
      </Panel>
    ))
    .add('ちなみに', () => (
      <Bootstrap3ishPaginatorStory />
    ))
    .add('おしまい', () => (
      <Title>ご静聴ありがとうございました</Title>
    ))

