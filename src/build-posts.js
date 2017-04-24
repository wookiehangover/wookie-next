#!/usr/bin/env node

'use strict'

const fs = require('mz/fs')
const pify = require('pify')
const reactHast = require('./react-hast')
const omit = require('lodash/omit')

const posts = [
  '2017-reading-list.md',
  'protect-your-history.md',
  'what-I-read-in-2016.md',
  'lessons-from-the-jerk.md',
  'picking-up-the-pieces.md',
  'making-things-for-fun.md',
  '2016-reading-list.md'
]

const postTemplate = (props, tree) => (`
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-from-hast'
import components from '../../src/components/md-components'

export default (props) => {
  const post = ${JSON.stringify(props, null, 2)}
  const body = ${JSON.stringify(tree)}
  return (
    <Post {...props}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}
`)

const buildPosts = () => {
  console.log('→ Building markdown from src/...\n')
  return Promise.all(posts.map(processPost))
}

async function preparePostData (filename) {
  const path = `src/posts/${filename}`
  const stats = await fs.stat(path)
  const body = await fs.readFile(path, 'utf8')
  const slug = filename.replace('.md', '')
  return {
    slug,
    path,
    body,
    permalink: `writing/${slug}.html`,
    title: (body.split('\n')[0] || 'Untitled 👻').replace('##', '').trim(),
    updatedAt: stats.mtime
  }
}

async function processPost (filename) {
  try {
    const postData = await preparePostData(filename)
    const postHast = await pify(reactHast.process)(postData.body)
    const component = postTemplate(omit(postData, 'body'), postHast.contents)
    await fs.writeFile(`pages/${postData.permalink}.js`, component)

    console.log(`  ✅  pages/writing/${filename}\t->\t${postData.permalink}`)
    return postData
  } catch (e) {
    console.error(`\n❌ Error processing ${filename}`)
    console.error(e)
  }
}

async function writePostsJson (postData) {
  if (!postData) return
  await fs.writeFile('static/posts.json', JSON.stringify(postData))
  console.log('\n→ Writing posts to static/posts.json...\n')
  console.log('\n💁  All done!')
}

buildPosts()
  .then(writePostsJson)
  .catch((e) => {
    console.error(`\n❌ Oh No!`)
    throw new Error(e)
  })
