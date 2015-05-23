<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Meta Block -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="{{ description }}">
    <meta name="keyword" content="{{ keyword }}">

    <!-- Window Title -->
    <title>{{ title }}</title>

    <!-- Application Icon -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{ iconpath }}/app-icon.144.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="{{ iconpath }}/app-icon.114.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="{{ iconpath }}/app-icon.72.png"/>
    <link rel="apple-touch-icon-precomposed" href="{{ iconpath }}/app-icon.57.png"/>
    <link rel="shortcut icon" href="{{ iconpath }}/favicon.ico" type="image/vnd.microsoft.icon"/>

    <!-- Stylesheets -->
    {% for css in styles -%}
        <link rel="stylesheet" href="{{ css }}"/>
    {%- endfor %}

    {% if settings.env == 'development' -%}
        <!-- Livereload -->
        <script type="text/javascript" src="http://localhost:2838/livereload.js"></script>
    {%- endif %}
</head>
    <body class="application">
    <!-- Header Block -->
    {% block header -%}{%- endblock %}

    <!-- Content Block -->
    {% block content -%}{%- endblock %}

    <!-- Footer Block -->
    {% block footer -%}{%- endblock %}

    <!-- Scripts -->
    {% for js in script -%}
        <script type="text/javascript" src="{{ js }}"></script>
    {%- endfor %}
    </body>
</html>