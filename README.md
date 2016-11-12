# Introduction

This plugin allows you to embed klipse: https://github.com/viebel/klipse
in gitbook projects.

To enable this plugin add `klipse` to your `book.json` plugins.

Now you can embed runnable ClojureScript in your gitbooks like:

```html
<pre>
  <code class="language-klipse">
    (map inc [1 2 3])
  </code>
</pre>
```
