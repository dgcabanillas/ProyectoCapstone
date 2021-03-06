'use strict'

function generarMenu( object, nodo, item, page = 'any' ) {
    if( typeof(object) == "object" ) {
        var parent = document.querySelector( nodo );
        var child = document.createElement( item );
        switch( item ) {
            case 'ul':
                let i;
                if( object[0].class ) {
                    child.className = object[0].class;
                    i = 1;
                } else {
                    i = 0;
                }
                parent.append( child );
                for( ; i < object.length; i++ ) {
                    generarMenu( object[i], nodo + ' ul', 'li');
                }
                break;
        }
        if( object.id ) {
            child.id = object.id;
            item += ( '#' + child.id );
        }
        if( object.class ) child.className = object.class;
        if( object.content ) child.innerHTML = object.content;
        if( object.link ) child.href = object.link;
        parent.append( child );

        if( object.a )  generarMenu( object.a, nodo + ' ' + item, 'a');
        if( object.ul ) generarMenu( object.ul, nodo + ' ' + item, 'ul');
    }
}

function ocultarImg() {
    document.querySelector( "#img-pop-up" ).className = "hide";
}

document.addEventListener('click', function(e) {
    var el = e.target.getAttribute("can-clicked");
    if( el ) {
        console.log( e.target.getAttribute("src") );
        document.querySelector( "#img-pop-up img" ).src =  e.target.getAttribute("src");
        document.querySelector( "#img-pop-up img" ).alt =  e.target.getAttribute("alt");
        document.querySelector( "#img-pop-up" ).className = "activo"
    }
}, false);