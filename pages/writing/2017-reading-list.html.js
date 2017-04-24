
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-from-hast'
import components from '../../src/components/md-components'

export default (props) => {
  const post = {
  "slug": "2017-reading-list",
  "path": "src/posts/2017-reading-list.md",
  "permalink": "writing/2017-reading-list.html",
  "title": "2017 Reading List",
  "updatedAt": "2017-04-22T06:07:36.000Z"
}
  const body = {"type":"div","props":{},"children":[{"type":"h2","props":{},"children":["2017 Reading List"]},"\n",{"type":"ol","props":{},"children":["\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["Digital Gold — Nathaniel Popper"]}]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["Bed of Procrustes — Nassim Nicholas Taleb"]}]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["Machine Learning — Ethem Alpaydin"]}]},"\n",{"type":"li","props":{},"children":["Mathematics and the Imagination — Edward Kasner & James Newman"]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["Snow Crash — Neil Stephenson"]}]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["Capitalist Realism — Mark Fisher"]}]},"\n",{"type":"li","props":{},"children":["Being a Beast — Charles Foster"]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["On the Move — Oliver Sacks"]}]},"\n",{"type":"li","props":{},"children":["The Open Society & Its Enemies — Karl Popper"]},"\n",{"type":"li","props":{},"children":["Neuroplasticity — Moheb Costand"]},"\n",{"type":"li","props":{},"children":["Universe of Consciousness — Gerald M Edelman & Giulio Tononi"]},"\n",{"type":"li","props":{},"children":[{"type":"del","props":{},"children":["On Trails — Robert Moor"]}]},"\n",{"type":"li","props":{},"children":["Lawrence in Arabia — Scott Anderson"]},"\n",{"type":"li","props":{},"children":["Americanah — Chimamanda Ngozi Adichie"]},"\n",{"type":"li","props":{},"children":["Time Travel — James Gleick"]},"\n",{"type":"li","props":{},"children":["Hallucinations — Oliver Sacks"]},"\n",{"type":"li","props":{},"children":["The Handmaid’s Tale — Margaret Atwood"]},"\n"]}]}
  return (
    <Post {...props}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}
