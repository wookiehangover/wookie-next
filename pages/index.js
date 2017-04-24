import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from '../src/components/head'
import Footer from '../src/components/footer'
import cx from 'classnames'
import 'isomorphic-fetch'

export default class App extends Component {

  static async getInitialProps () {
    const posts = require('../static/posts.json')
    return {
      posts
    }
  }

  render() {
    const { props } = this
    return (
      <div className={cx(`sans-serif black bg-white`)}>

        <Head />

        <main className={cx(`mw7 pa3 pa4-ns center measure lh-copy`)}>
          <header>
            <h1 className={cx(`f1`)}>Samuel Breed</h1>
          </header>

          <p className={cx(`mv3`)}>Howdy! I'm <a href="https://twitter.com/sambreed">@sambreed</a>. I make things on the internet and more specifically this website.</p>

          <p className={cx(`mv3`)}>Here are some things I've been thinking about recently:</p>

          <section>
            <ol>
              {props.posts.map((post, i) =>
                <li className={cx(`mb1 pl1`)} key={i}>
                  <Link href={post.permalink}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              )}
            </ol>
          </section>

          <section className={cx(`mv2`)}>
            <p className={cx(`mv4`)}>If you dig any of that, then you may also enjoy:</p>
            <ul>
              <li className={cx(`mb1 pl1`)}>
                <a href="/cv.html">Perusing my C.V.</a>
              </li>
              <li className={cx(`mb1 pl1`)}>
                <a href="https://github.com/wookiehangover/wookiehangover.com">Looking at some code I wrote</a> (including the very website you're reading right now!)
              </li>
              <li className={cx(`mb1 pl1`)}>
                <a href="https://twitter.com/sambreed">Following me on Twitter!</a>
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    )
  }
}
