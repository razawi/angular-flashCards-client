$( document ).ready(function() {

    drawCategories();

});


function drawCategories(){
    $.getJSON( 'https://fierce-taiga-41516.herokuapp.com/api/listallcategorys', function( data ) {
        var items = [];
        debugger;

        // var array = [1];
        // var other = _.concat(array, 2, [3], [[4]]); 
        // console.log(other);
        // var odata =_.omit(data[0], ["_id", "__v"])

        // deep parse
        $.each( data, function( key, val ) {
            items.push( "<li id='" + JSON.stringify(key) + "'>" + JSON.stringify(_.omit(val, ["_id", "__v"] )) + "</li>" );
        });
        
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });
}

function drawCurricula(){
    
}

function drawCards(){

}