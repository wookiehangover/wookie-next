'use strict'


const fs = require('mz/fs')
// const pify = require('pify')
const unified      = require('unified')
const markdown     = require('remark-parse')
const rehypeRaw    = require('rehype-raw')
const rehypeReact  = require('rehype-react')
const remarkRehype = require('remark-rehype')

module.exports = unified()
  .use(markdown, { footnotes: true })
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .use(rehypeReact, {
    createElement: (type, props, children) => ({ type, props, children })
  })
