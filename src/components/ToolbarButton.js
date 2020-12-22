import React from 'react'

export default ({
    onClick = () => {},
    action = "",
    icon = null
}) => {
    return (
        <button
            className="editor-toolbar-button"
            onClick={ () => onClick( action ) }>
            { icon }
        </button>
    )
}