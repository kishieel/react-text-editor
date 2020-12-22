import React, { useState, useRef, useEffect } from 'react'
import Toolbar from "./components/Toolbar";
import './styles.scss'

export const Editor = ({
    classNamePrefix = "editor"
}) => {
    const [ toggleHTML, setToggleHTML ] = useState( null )
    const [ fontSize, setFontSize ] = useState( 3 )
    const [ formatBlock, setFormatBlock ] = useState( "div" )
    const editor = useRef()

    useEffect( () => {
        editor.current.focus()
        if ( toggleHTML === true ) {
            editor.current.textContent = editor.current.innerHTML
        } else if ( toggleHTML === false ) {
            editor.current.innerHTML = editor.current.textContent
        }
    }, [ toggleHTML ] )

    const ksii = () => {
        editor.current.focus()
        if ( toggleHTML === null || toggleHTML === false ) {
            setFontSize( parseInt( document.queryCommandValue( "fontSize" ) ) )
            setFormatBlock( document.queryCommandValue( "formatBlock" ) )
        }
    }

    const pff = ( action, value = null ) => {
        editor.current.focus()
        if ( toggleHTML === null || toggleHTML === false ) {
            document.execCommand( action, false, value )

            if ( action === "fontSize" ) {
                setFontSize( parseInt( value ) )

                document.execCommand( "formatBlock", false, "div" )
                setFormatBlock( "div" )
            } else if ( action === "formatBlock" ) {
                setFormatBlock( value )
            }
        }
    }

    const handleToggleHTML = () => {
        setToggleHTML( !toggleHTML )
    }

    return (
        <div className="editor">
            <Toolbar fontSize={ fontSize } formatBlock={ formatBlock } pff={ pff } toggleHTML={ handleToggleHTML }/>
            <div
                className="editor-area"
                ref={ editor }
                onClick={ ksii }
                onKeyPress={ ksii }
                contentEditable={ true }
                suppressContentEditableWarning={true} >
                My <font color="#0b7960">name</font> is Robert Smith. I live in <b><font color="#0b7960">Barcelona</font></b> and I'm 32 years old. <font color="#9641a1">Yeah</font>.. I'm very.. very old. I don't know <font color="#ff101f">what</font> to do <font color="#279af1">with</font> my life so I'm <font color="#4cb5ae">trying</font> to <font color="#4e5283"><b>create</b></font> rich <font color="#ffdd50"><b>text</b></font> editor in <font color="#ff101f">react.</font>
            </div>
        </div>
    );
}
