import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const x = StyleSheet.create({

  main: {
    margin: 100,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  center: {
    marginTop: "280px",
    width: "100%",
    textAlign: "center",
    fontSize: "280%"
  },

  textCenter: {
    textAlign: "center"
  },

  head: {
    margin: "3em 0 0.8em",
    fontSize: "200%"
  },

  list: {
    margin: "3em 0 0.8em",
    lineHeight: "2.0",
    fontSize: "130%"
  }
})

export const Title = ({children}) => (
  <div className={css([x.main])}>
    <h1 className={css([x.center])}>{children}</h1>
  </div>
)

export const AboutMe = () => (
  <div className={css([x.main])}>
    <h1 className={css([x.head])}>About me</h1>
    <ul className={css([x.list])}>
      <li>GitHub: <a href="http://github.com/okamuuu" target="_blank">http://github.com/okamuuu/</a></li>
      <li>Blog: <a href="http://okamuuu.hatenablog.com/" target="_blank">http://okamuuu.hatenablog.com/</a></li>
      <li>Blog2: <a href="http://www.okamuuu.com/" target="_blank">http://www.okamuuu.com/</a></li>
      <li>得意な言語: JavaScript, Node.js, Perl, Python, Go</li>
      <li>人生の目的: 外国でのんびりしながらだらだらプログラミングして過ごしたい</li>
    </ul>
  </div>
)

export const Panel = ({title, children}) => (
  <div className={css([x.main])}>
    <h1 className={css([x.head])}>{title}</h1>
    {children}
  </div>
)

export const Ul = ({children}) => (
  <ul className={css([x.list])}>
    {children}
  </ul>
)

