YUI().use('node', function (Y) {
    // YUI will call this function and pass in the YUI instance (Y) once all
    // modules have finished loading and are ready to use.

    // We can now use Y.Node to get references to DOM elements using CSS
    // selectors.
    var demo = Y.one('#demo');

    // And we can listen for DOM events.
    demo.on('click', function (e) {
        demo.set('text', 'You clicked me!');
    });
});
