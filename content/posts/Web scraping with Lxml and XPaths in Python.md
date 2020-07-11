---
title: "Web scraping with Lxml and XPaths in Python"
date: 2020-07-11T12:38:44+05:30
draft: true
---
## Background
When choosing to scrape data online with Python, 
Most beginners tend to go with **BeautifulSoup**, 
a popular beginner friendly library for web scraping.
Although Beautifulsoup claims to be better at parsing HTML,
 I hit a roadblock using the soupparser and decided to switch
 to Lxml to scrape data instead. Lxml can work with 
BeautifulSoup’s parser and vice versa, but 
I found using **Lxml** and **Xpaths** to be far more simpler and faster than 
Beautifulsoup when finding specific elements deep inside the HTML code.

## Introduction to  XPaths

Xpaths work very much like a traditional file system.

![File System Tree](/tree1.svg)

{{< highlight python >}}

page = requests.get('https://bschool.careers360.com/colleges/ranking/2020?page=1').text
source_code = html.fromstring(page)

for x in range(1,103):
        college_name.append(source_code.xpath("/html/body/div[2]/section[1]/div[3]/div[2]/table/tbody/tr[" + str(x) + "]/td[2]/a/text()"))


{{< / highlight >}}