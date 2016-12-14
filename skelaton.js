$( document ).ready(function() {
    console.log( "ready!" );

    $.getJSON( 'https://fierce-taiga-41516.herokuapp.com/api/listallcategorys', function( data ) {
    var items = [];


    $.each( data, function( key, val ) {
        debugger;
        items.push( "<li id='" + JSON.stringify(key) + "'>" + JSON.stringify(val) + "</li>" );
    });
    
    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
        }).appendTo( "body" );
      });
});