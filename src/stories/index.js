import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Talks from './Talks';

storiesOf('2017/01/28 Hachioji.pm', module)

  .add('フロントエンドはじめました', () => (
    <Talks.First />
  ))

  .add('About me', () => (
    <Talks.Second />
  ))

  .add('近況', () => (
    <Talks.Third />
  ))

  .add('話すこと', () => (
    <Talks.Fourth />
  ))

  .add('登場人物', () => (
    <Talks.Fifth />
  ))

  .add('やりたいこと', () => (
    <Talks.Sixth />
  ))

  .add('試してみた', () => (
    <Talks.Seventh />
  ))

  .add('起きた変化', () => (
    <Talks.Eighth />
  ))

  .add('結論', () => (
    <Talks.Ninth />
  ))

  .add('...', () => (
    <Talks.Tenth />
  ))

  .add('おしまい', () => (
    <Talks.Eleventh />
  ))





