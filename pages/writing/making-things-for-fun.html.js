
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-from-hast'
import components from '../../src/components/md-components'

export default (props) => {
  const post = {
  "slug": "making-things-for-fun",
  "path": "src/posts/making-things-for-fun.md",
  "permalink": "writing/making-things-for-fun.html",
  "title": "Making things for fun",
  "updatedAt": "2016-09-17T03:59:07.000Z"
}
  const body = {"type":"div","props":{},"children":[{"type":"h2","props":{},"children":["Making things for fun"]},"\n",{"type":"p","props":{},"children":["This isn’t a blog. It's a fun side-project done over a couple weekends. There’s a big difference."]},"\n",{"type":"p","props":{},"children":["It's not a blog because it's not using any blogging software, per-se, just some elbow grease and ",{"type":"a","props":{"href":"https://github.com/wookiehangover/wookiehangover.com/tree/master/build"},"children":["a few scripts"]}," that I've to cobbled together into a mostly-working, glue–and–popsicle-sticks publishing platform."]},"\n",{"type":"p","props":{},"children":["Simple products are fashionable these days, especially when it comes to media consumption. Even I've been known to write a Medium post upon occasion, but I didn't set out to build this as a monument to simplicity. This isn't that type of place and I'm not that type of fella; things are always a bit messier than that in real life."]},"\n",{"type":"p","props":{},"children":["So as it stands, this is just a barely functioning, loosely coherent website with weird cursor effects",{"type":"sup","props":{},"children":[{"type":"a","props":{"href":"#making-things-for-fun_footnote-01"},"children":["1"]}]}," (unless I've gotten bored and removed them) and superfluous footnotes",{"type":"sup","props":{},"children":[{"type":"a","props":{"href":"#making-things-for-fun_footnote-02"},"children":["2"]}]}," (I probably haven't removed these.)"]},"\n",{"type":"blockquote","props":{},"children":["\n",{"type":"p","props":{},"children":["So why go through all the trouble to build this in the first place? Why not just use Medium?"]},"\n"]},"\n",{"type":"p","props":{},"children":["Isn't this what all developers inevitably do anyway? Build some crappy knock-off of good software because they're ego is too big to use anything that's not been graced to have sprung unbidden from their god-like cheeto-covered fingertips? Yes, let's all create something second rate instead of using something off-the-shelf in order to scratch the proverbial itch? Why, yes. Yes, it's probably something like that then."]},"\n",{"type":"p","props":{},"children":["The question might as well then become, \"why build anything at all?\""]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["I made this because it was fun."]}]},"\n",{"type":"p","props":{},"children":["It was more fun figuring out how to ",{"type":"a","props":{"href":"https://github.com/remy/inliner"},"children":["easily inline all the assets"]}," and ",{"type":"a","props":{"href":"https://github.com/giakki/uncss"},"children":["strip out unused css"]}," on this page than it would have been to set up Wordpress again. The first time I ever set up Wordpress in 2008 was a magical and transformative experience, so why am I so quick to shun it now? Am I really that self-important? Wordpress is great software and I can't make anything that comes close to it in a weekend."]},"\n",{"type":"blockquote","props":{},"children":["\n",{"type":"p","props":{},"children":["Doing something from scratch, even if it's not polished, doesn't deny or invalidate what you've done in the past."]},"\n"]},"\n",{"type":"p","props":{},"children":["For a long time I refused to do any writing on my website because I felt like I didn't have the time. I was afraid that anything I wrote would be bad and then I'd be committed to it forever, comma splices and all. Paranoia that I would look back on it later with utter embarrassment kept me from committing to much writing since I killed my ",{"type":"a","props":{"href":"http://samuelbreed.blogspot.com/"},"children":["first blog"]}," in 2008. What I guess I means is I'm over that now? ",{"type":"a","props":{"href":"https://www.jwz.org/doc/worse-is-better.html"},"children":["Worse is better"]}," after all, so why not let the tap start flowing!"]},"\n",{"type":"p","props":{},"children":["In keeping with that spirit, I've shoddily rebuild an ode to Jekyll so that I can have reasonable writing experience for myself, which means markdown and not much else to fuss over. I'm unburdened by the need for SEO or any other unspeakable non-sense, but I care about mobile web and I care about pagespeed so I've gone and done the aforementioned asset inlining, which I think has come out quite nicely."]},"\n",{"type":"p","props":{},"children":[{"type":"strong","props":{},"children":["Go out and make something, even if it's a shoddy facsimile of something else."]}]},"\n",{"type":"p","props":{},"children":["What are you going to make for yourself?"]},"\n",{"type":"p","props":{},"children":["p.s. And, yes, I do plan on building an HTML guest book some day. But for now a link to twitter will have to suffice ✍️"]},"\n",{"type":"aside","props":{},"children":["\n  ",{"type":"ol","props":{},"children":["\n    ",{"type":"li","props":{"id":"making-things-for-fun_footnote-01"},"children":["\n      The custom cursors (provided they're still here, if not, I'll include a gif) were a fun idea I gleaned from [@kwuchu][6] tweeting about redesigning his portfolio site, which featured a similarly cropped picture of him. Since I already had the avatar of my face cropped out, I threw it on the header to see how it would look. It was static and unmoving and no fun whatsoever. I don't know how I stumbled into the custom cursor CSS, but I definitely used [David Walsh's blog post][7] to see it in action and grok how it should work. Then [@ohhoe][8] asked my to make sparkle trails and I couldn't say \"no\" to that.\n    "]},"\n    ",{"type":"li","props":{"id":"making-things-for-fun_footnote-02"},"children":["\n      Who doesn't love a good footnote? If you know someone, submit their names to me in writing and I'll add them to my list.\n    "]},"\n  "]},"\n"]}]}
  return (
    <Post {...props}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}