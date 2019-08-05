---
date: "2019-08-03"
title: "Getting Started With Gatsby"
template: "post"
thumbnail: "../images/gatsby.png"
slug: "getting-started-with-gatsby"
categories: [tools]
tags: [tools, gatsby]
---

This is a test!!

## Topics Covered

1. Creating a blog in gatsby
2. Dynamic Rendering

## Initial Setup

This is going to be a fully JavaScript app, which means everything will be handled through JavaScript, and the HTML will only consist of a single root element in the body.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Todo App</title>

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div id="root"></div>

    <script src="script.js"></script>
  </body>
</html>
```

>here is an example of a blockquote [with a link](https://www.google.com)

`inline code example`