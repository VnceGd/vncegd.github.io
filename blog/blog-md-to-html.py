# Markdown to html conversion copied from https://pythoninformer.com/python-projects/static-site-generator/converting-markdown/

import os
import yaml
import markdown
import pystache

blogs = [] # blog filenames
blogInfo = [] # yaml header information

# Return the html for the blog section
def generateBlogSection():
    # Reverse arrays so blogs are sorted by most recent first
    reversedBlogs = blogs[::-1]
    reversedInfo = blogInfo[::-1]
    section = ''

    # Render and concatenate cards into one string
    for index, blog in enumerate(reversedBlogs):
        with open('template-card.html') as templateCardFile:
            templateCard = templateCardFile.read()
            postInfo = reversedInfo[index]
            postInfo['link'] = 'blog/' + blog[:-3] + '.html'
            section += pystache.render(templateCard, postInfo)

    return section

def getBlogs():
    # Put markdown files in current directory into blogs array
    # Assume posts follow the naming format: yyyy-mm-dd-title.md
    cwd = os.getcwd()
    for files in os.listdir(cwd):
        if os.path.isfile(os.path.join(cwd, files)):
            if files.endswith('.md'):
                blogs.append(files)

def parseHeaders():
    for index, blog in enumerate(blogs):
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
            content = markdown.markdown(md)

            # Parse content
            info['content'] = content

            # Create link to next post if it exists
            if index < len(blogs) - 1:
                info['next-post'] = 'blog/' + blogs[index + 1][:-3] + '.html'
            else:
                info['next-post'] = '#'
                info['next-disabled'] = 'disabled'

            # Create link to previous post if it exists
            if index > 0:
                info['prev-post'] = 'blog/' + blogs[index - 1][:-3] + '.html'
            else:
                info['prev-post'] = '#'
                info['prev-disabled'] = 'disabled'

            # Store yaml header info for later and render html
            blogInfo.append(info)

# Convert markdown files to html in current directory
def convertMarkdown():
    getBlogs()
    parseHeaders()

    # Store template html
    with open('template.html') as infile:
        template = infile.read()
        infile.close()

    # For each blog, parse the yaml header and rest of content, then write to an html file
    for index, blog in enumerate(blogs):
        html = pystache.render(template, blogInfo[index])

        # Remove '.md' from blog filename
        blogName = blog[:-3]

        # Write to html
        f = open(blogName + '.html', 'w')
        f.write(html)
        f.close()

def main():
    convertMarkdown()

    # Read index html into string, inserting blog post cards where indicated
    with open('../index.html', 'r') as indexFile:
        newline = []
        blogSection = generateBlogSection()
        for line in indexFile:
            newline.append(line.replace("<!--posts-->", blogSection))

    # Replace current index html with the string containing the blog post cards
    with open('../index.html', 'w') as indexFile:
        for line in newline:
            indexFile.writelines(line)

if __name__ == '__main__':
    main()