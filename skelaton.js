$( document ).ready(function() {

    drawCurricula();

});


function drawCurricula(){
        $.getJSON( 'http://127.0.0.1:8888/api/curriculaList', function( data ) {

        function faceMapper(face){
            return _.pick(face, 'symbol', 'text');
        }

        function mapper(card){
            dispData={};
            dispData.name = _.pick(card, 'name');
            dispData.facess = _.map(card.facess, faceMapper);

            return dispData;
        }

        var displayData = _.map(data, mapper)


        var headers = [];
        var content = [];

        debugger;


        // Dynamic table display 

        $.each( dispData, function( key, val ) {
            if (key === "facess"){
                $.each( val, function( num, face ) { 
                    debugger;
                });
            }
            else
                items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });

}

function drawCards(){
    // http://127.0.0.1:8888/api/cardsList
}

function drawCategories(){ // server side bug in categories
    $.getJSON( 'http://127.0.0.1:8888/api/categoriesList', function( data ) {
        var items = [];

        var headers = [];
        var content = [];

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