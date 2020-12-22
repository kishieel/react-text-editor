import React, { useEffect, useState } from 'react'
import ToolbarButton from "./ToolbarButton";

export default ({
    onClick = () => {}
}) => {
    const [ visibility, setVisibility ] = useState( false )

    useEffect( () => {
        function focusController() {
            setVisibility( false )
        }
        if ( visibility === true ) document.addEventListener( "click", focusController )

        return () => document.removeEventListener( "click", focusController )
    }, [ visibility ] )

    const colors = [
        '#fff', '#bfbfbf', '#7f7f7f', '#495057',
        '#3f3f3f', '#000', '#9BE564', '#D7F75B',
        '#d19c1d', '#7d451b', '#472c1b', '#ff101f',
        '#4cb5ae', '#279af1', '#4E5283', '#19323c',
        '#40531b', '#d84a05', '#1a9576', '#0b7960',
        '#34bc82', '#ffdd50', '#f96969', '#9641a1'
    ]

    return (
        <React.Fragment>
            <ToolbarButton onClick={ () => setVisibility( !visibility ) } icon={ <i className="fas fa-font"></i> }/>
            <div className="editor-toolbar-grid" style={{ ...( visibility === true ? { visibility: "visible", opacity: 1 } : null ) }}>
                <ul className="editor-toolbar-palette-grid">
                    {
                        colors.map( color => <li key={ color }>
                            <button onClick={ () => onClick( "foreColor", color) } style={{ background: color }}></button>
                        </li> )
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
