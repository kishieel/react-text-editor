import React, { useEffect, useState } from 'react'
import ToolbarButton from "./ToolbarButton";

export default ({
    onClick = () => {}
}) => {
    const [ visibility, setVisibility ] = useState( false )
    // const arr = []
    // ref={ ref => { arr[x] = { [y]: ref } } }

    useEffect( () => {
        function focusController() {
            setVisibility( false )
        }
        if ( visibility === true ) document.addEventListener( "click", focusController )

        return () => document.removeEventListener( "click", focusController )
    }, [ visibility ] )

    return (
        <React.Fragment>
            <ToolbarButton onClick={ () => {} } action="" icon={ <i className="fas fa-table"></i> }/>
            <div className="editor-toolbar-grid" style={{ ...( visibility === true ? { visibility: "visible", opacity: 1 } : null ) }}>
                <ul className="editor-toolbar-table-grid">
                    {
                        [ ...Array( 10 ).keys() ].map( x =>
                            [ ...Array( 10 ).keys() ].map( y =>
                                <li key={ x + " " + y }>
                                    <button onClick={ () => onClick( x + 1, y + 1 ) } style={{ background: "#fff", borderStyle: "dashed" }}></button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
