<a href="/blog" style="margin-left:-30px; margin-top: 16px;"><h3 style="border-bottom: #A3A095 solid 1px; padding-bottom: 10px">Other Blog Posts</h3></a>

{% for post in site.posts limit: 10 %}
    <a href="{{post.url}}" style="margin-left: -30px;"><span>&bull; {{ post.title }} </span></a>
{% endfor %}

<li style="margin-left:-30px"><a href="/blog"><span>All Previous Posts >></span></a></li>
