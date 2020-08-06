---
author: Vincent Nguyen
title: Styling and Social Cards
date: 2020-01-08
---

These past few days I've been making some style changes to my website mostly affecting the background images, and have also been looking into social card previews that are created when people share my website.

I found out about `linear-gradient()` recently, specifically using it alongside an image url, and have been messing around with applying it to a bunch of elements on my website.
It can create some cool-looking effects and also helps to increase contrast between the foreground and background in a subtle way.
I wasn't a huge fan of gradients before, but it looks like their effectiveness depends on the use case.

I also recently came across `filter: drop-shadow()` which I applied to the logos on project and blog cards.
It makes the logos pop even more when used in addition to the soft background gradient.
It's basically used instead of `box-shadow` for non-rectangular shapes.

I've also been experimenting with `og` and `twitter` meta properties to make the website display as a card when shared on social networks such as LinkedIn, Facebook, and Twitter.
I don't expect anyone to be sharing this since I don't have share buttons, but the `meta` tags in the header can act as a template which anyone may use.

One thing I might need to look into is a way for me to only need to change the title of a blog post in a single place (or set up a better template).
Currently, I've been needing to adjust `title`, `description`, `url`, and the name of the html file itself as well as any links to it, which has been time consuming since I'm constantly thinking of ways to reword the title of the post.
I also haven't been integrating images into my blog posts yet, and it might be useful to research a modular way to position images such that it could allow for a variable number of images on one line or aligned in a certain way, regardless of width or height, while also being responsive.

Anyways, I'm writing this at 1am after a long day and would be better off getting some rest.
It's possible that I will edit or delete posts from my published site, but if for some reason you want to dig into my GitHub commits to see previous versions, feel free.
Even if no one reads my blog, it'll still exist somewhere on the Internet.

---

Previous post: [Hello, 2020](blog/hello-2020.html)

Next post: [Drexel Winter 2020 Week 1](blog/drexel-winter-2020-week-1.html)