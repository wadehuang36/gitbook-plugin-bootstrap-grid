# Gitbook Bootstrap Grid Plugin
---

Enable using Bootstrap Grid in your books

## Install
open book.json, add `bootstrap-grid` in "plugins"
```
{
    "plugins": [ "other-plugin", "bootstrap-grid" ]
}
```

## Usage
Use it like using bootstrap, add row blocks then col blocks.
```
{% row %}
    {% col %}
        col body 

    {% col %}
        col body 

{% endrow %}
```

col blocks has one argument which is bootstrap col variants like `col-size-n`. The the `size-n` as the argument. If the argument is undefined then the class is `col`

```
{% row %}
    {% col "lg-6" %}
        col body 

    {% col "lg-6" %}
        col body 
{% endrow %}
```

The arguments of blocks have to add `""`, otherwise the value will be `NaN`


