---
layout: page
title : "Tag: release"
---

<div class="container">
  <div class="row">
    {% for post in site.posts %}
    {% if post.tags contains "release" %}
    {% include post-preview.html %}
    {% endif %}
    {% endfor %}
  </div>
</div>
