import React from 'react'
import has from 'lodash/has'
import map from 'lodash/map'

function ComponentTree({ type, props, children, components={} }) {
  let component

  if (has(components, type)) {
    component = components[type]
  } else {
    component = type
  }

  let subtree = map(children, (child, i) => {
    if (typeof child === 'string') {
      return child
    } else if (has(child, 'type')) {
      return <ComponentTree {...child} components={components} key={i}/>
    } else {
      return null
    }
  })

  if (type === 'img') {
    subtree = null
  }

  return React.createElement(component, props, subtree)
}

export default ComponentTree
