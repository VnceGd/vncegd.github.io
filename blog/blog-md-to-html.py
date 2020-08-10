# Markdown to html conversion copied from https://pythoninformer.com/python-projects/static-site-generator/converting-markdown/

import os
import yaml
import markdown
import pystache

# Put markdown files in current directory into blogs array
# Assume posts follow the naming format: yyyy-mm-dd-title.md
blogs = []
cwd = os.getcwd()
for files in os.listdir(cwd):
    if os.path.isfile(os.path.join(cwd, files)):
        if files.endswith('.md'):
            blogs.append(files)

# Store template html
with open('template.html') as infile:
    template = infile.read()
    infile.close()

# For each blog, parse the yaml header and rest of content, then write to an html file
for index, blog in enumerate(blogs):
    # Parse yaml header
    with open(blog) as infile:
        for s in infile:
            if s.startswith('---'):
                break

        yaml_lines = []
        for s in infile:
            if s.startswith('---'):
                break
            else:
                yaml_lines.append(s)

        ym = ''.join(yaml_lines)
        md = ''.join(infile)
        infile.close()

    info = yaml.safe_load(ym)

    # Parse content and convert to html
    content = markdown.markdown(md)
    info['content'] = content

    if index < len(blogs) - 1:
        info['next-post'] = 'blog/' + blogs[index + 1][:-3] + '.html'
    else:
        info['next-post'] = '#'
        info['next-disabled'] = 'disabled'
    if index > 0:
        info['prev-post'] = 'blog/' + blogs[index - 1][:-3] + '.html'
    else:
        info['prev-post'] = '#'
        info['prev-disabled'] = 'disabled'

    html = pystache.render(template, info)

    # Remove '.md' from blog filename
    blogName = blog[:-3]

    # Write to html
    f = open(blogName + '.html', 'w')
    f.write(html)
    f.close()