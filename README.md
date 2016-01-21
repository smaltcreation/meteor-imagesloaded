# meteor-imagesloaded
ImagesLoaded 4.1.0 Meteor package
*@See [desandro/imagesloaded](http://imagesloaded.desandro.com/) jQuery plugin.*
``` console
meteor add smaltcreation:imagesloaded
```

## Example of usage
You can use imagesLoaded as a jQuery Plugin.

``` js
$('#container').imagesLoaded(function () {
  // images have loaded
});

// options
$('#container').imagesLoaded({
  // options...
  },
  function () {
    // images have loaded
  }
);
```

`.imagesLoaded()` returns a [jQuery Deferred object](http://api.jquery.com/category/deferred-object/). This allows you to use `.always()`, `.done()`, `.fail()` and `.progress()`.

``` js
$('#container').imagesLoaded()
  .always(function (instance) {
    console.log('all images loaded');
  })
  .done(function (instance) {
    console.log('all images successfully loaded');
  })
  .fail(function () {
    console.log('all images loaded, at least one is broken');
  })
  .progress(function (instance, image) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
```

**More documentation on [desandro/imagesloaded GitHub repository](https://github.com/desandro/imagesloaded/blob/master/README.md).**