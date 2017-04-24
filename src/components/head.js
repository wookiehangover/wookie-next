import Head from 'next/head'

export default ({ title=`∴` }) =>
  <Head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title} Samuel Breed wookiehangover.com</title>
    <meta name="author" content="TODO" />
    <meta name="description" content="TODO" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/static/t.min.css" />
  </Head>
