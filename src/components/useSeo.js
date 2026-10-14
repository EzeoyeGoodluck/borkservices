import { useEffect } from 'react'
import { CONFIG } from '../config'

export default function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title
    const set = (sel, attr, val) => {
      let el = document.head.querySelector(sel)
      if (!el) { el = document.createElement(sel.startsWith('link') ? 'link' : 'meta'); document.head.appendChild(el) }
      if (sel.includes('name=')) el.setAttribute('name', sel.match(/name="([^"]+)"/)[1])
      if (sel.includes('property=')) el.setAttribute('property', sel.match(/property="([^"]+)"/)[1])
      if (sel.includes('rel=')) el.setAttribute('rel', 'canonical')
      el.setAttribute(attr, val)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('link[rel="canonical"]', 'href', CONFIG.domain + path)
    window.scrollTo(0, 0)
  }, [title, description, path])
}
