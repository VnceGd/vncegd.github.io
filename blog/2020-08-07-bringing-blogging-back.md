---
author: Vincent Nguyen
title: Bringing Blogging Back
date: 2020-08-07
---

At the start of this year, I gave up on blogging after four posts since I didn't have a proper workflow and took more time than necessary writing out html files for each post.
I also removed the blog posts from the main page because they didn't seem important for what is intended to be a personal portfolio site.

Recently, however, I found a way to convert Markdown to HTML using some Python code and a template (see [blog/blog-md-to-html.py](blog/blog-md-to-html.py)).
Whenever I need to make changes which should affect all blog posts, I can simply modify the template instead of going through each post's HTML file.
It's also easier to write in Markdown than it is to insert tags for things such as paragraphs, lists, and code snippets.

There is still room for improvement; maybe automating the generation of the blog HTML through a GitHub Action so I don't need to manually run the Python script and perhaps a way to automate links to previous and next posts based on date posted.

I definitely could have switched to posting on a platform like WordPress or Medium, but it feels more personal and rewarding to have a blog on my own site and have complete control over it's design.

2020 hasn't been the best year, but there are plenty of positive things happening which might be overshadowed by the negatives. I hope I can at least continue this project for long enough to have something to look back on and measure my progress as a developer, and maybe someone else will find this useful as well.

---