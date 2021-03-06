jquery.tao.js - Form AJAXizer
=============================

## About

__Tao__ is your new best friend. With his zen attitude and his grand master skills, he will help you turn old-fashioned forms to AJAX beauties in a second.

Consider the following form :

```html
<form class="boring" method="POST" action="/target/url">
    <input type="text" name="textfield" value="my value" />
    <input type="checkbox" name="tick" value="1" checked />
    <button type="submit">Go</button>
</form>
```

When your user presses the button, his browser will hit `/target/url` with the `POST` method, sending along the value of all the fields in the form (here, a textfield and a checkbox), which triggers a page reload.

What if we could just skip that last part to handle the view update by ourselves in a modern, SPA-way ?

```javascript
var $form = $('form.boring');

$form.tao({
    data: {
        // add extra data : useful if you have no way
        // to tell an AJAX request apart, server-side
        ajax: 1
    },

    submit: function() {
        // need an extra callback on form's submit event ?
        console.log('I am called when you submit the form');
    },

    success: function(data) {
        console.log('I love this plugin');
        form.removeClass('boring').addClass('awesome');
    }
});
```

Tao takes an object as a parameter, which members are the same as for a classic `$.ajax` call (which means you will essentially put your success/error callbacks here, in a way you already know). __So you can specify _any_ option for `$.ajax` right there__.

Tao will use your form's method attribute as the request method (`type` in jQuery terminology), and its action attribute as the target URL... unless you specified some yourself in the options as explained right above.

Tao is fast, lightweight, straightforward. What are you waiting for ?

## Build

Tao is built using [Grunt](http://gruntjs.com/). Simply run `grunt` at the project root to run the source through JSHint and uglify it into the `dist` folder.