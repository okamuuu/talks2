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
        <Bootstrap3ishPaginator
          current={number('current', this.state.current)}
          last={number('last', 20)}
          maxPageCount={number('max page count', 10)}
          onClick={this.handleClick.bind(this)}
        />
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
          <li>SPA したいけどフロントエンドエンジニアが少ない気がする</li>
          <li>HTML コーダーに Web components の作成を依頼しよう</li>
          <li>生成された components を再利用すれば React.js の作業コストは少ない</li>
        </Ul>
      </Panel>
    ))
    .add('フロントエンドが少ない気がする', () => (
      <Panel title="フロントエンドが少ない気がする">
        <Ul>
          <li>フロントエンドエンジニアは結構人口がいるはず</li>
          <li>問題は SPA したい場面でいきなり人口が減る</li>
          <li>React.js, Angular.js, Vue.js</li>
          <li>redux, RxJS...</li>
          <li>分業しましょう</li>
        </Ul>
      </Panel>
    ))
    .add('HTML コーダーに Web components の作成を依頼しよう', () => (
      <Panel title="HTML コーダーに Web components の作成を依頼しよう">
        <Ul>
          <li>HTMLコーダーをフロントエンドエンジニアにジョブチェンジは厳しかった(Hachiojipm#63)</li>
          <li>なんだけど storybook に web components を追加する事だけお願いすると割とうまくいった</li>
          <li><a href="" target="_blank">http://qiita.com/okamuuu/items/cc9b86fbac20da27bcee</a></li>
          <li>局所的な作業、コーディングとインタラクティブなモーション追加は任せることは可能だと思う</li>
          <li>全体の設計はこららでハンドリングが必要。callback を渡す処理など</li>
          <li>残りの作業をサーバーサイドで巻き取れば行ける気がする</li>
        </Ul>
      </Panel>
    ))
    .add('生成された components を再利用すれば React.js の作業コストは少ない', () => (
      <Panel title="生成された components を再利用すれば React.js の作業コストは少ない">
        <Ul>
          <li>web components を追加するだけでいい感じの画面が生成されていく</li>
          <li>フロントエンドエンジニアはレアキャラだけどサーバーサイドエンジニアはそこらへんにいる</li>
          <li>サーバーサイドエンジニアのみなさん。勇気をだして React.js を始めましょう</li>
          <li>redux を使わなくてもある程度は SPA できる</li>
          <li><a href="" target="_blank">http://qiita.com/okamuuu/items/1b94ab69d1bc3fb82d27</a></li>
        </Ul>
      </Panel>
    ))
    .add('まとめ', () => (
      <Panel title="まとめ">
        <Ul>
          <li>HTMLコーダーに web components を作成してもらいましょう</li>
          <li>サーバーサイドエンジニアのみなさんが全体をハンドリングしましょう</li>
          <li>redux を使わなければかなりシンプルに SPA できる</li>
          <li>React.js, Angular.js, Vue.js のどれを選択しても良いと思いますが分業するポイントの設定が大事</li>
        </Ul>
      </Panel>
    ))
    .add('付録: react-paginarots', () => (
      <Bootstrap3ishPaginatorStory />
    ))
