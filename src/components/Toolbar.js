import React from 'react'
import ToolbarButton from "./ToolbarButton";
import ColorsPalette from "./ColorsPalette";
import InsertImage from "./InsertImage";
import InsertLink from "./InsertLink";
import InsertTable from "./InsertTable";
import InsertSurvey from "./InsertSurvey";

export default ({
    fontSize = 3,
    formatBlock = "div",
    pff = () => {},
    toggleHTML = () => {},
    insertTable = () => {}
}) => {
    return (
        <div className="editor-toolbar">
            <select
                className="editor-toolbar-group editor-toolbar-select"
                onChange={ e => pff( "formatBlock", e.target.value ) }
                value={ formatBlock }>
                <option value="div">Tekst</option>
                <option value="p">Paragraf</option>
                <option value="h1">Nagłowek 1</option>
                <option value="h2">Nagłowek 2</option>
                <option value="h3">Nagłowek 3</option>
                <option value="h4">Nagłowek 4</option>
                <option value="h5">Nagłowek 5</option>
                <option value="h6">Nagłowek 6</option>
            </select>
            <select
                className="editor-toolbar-group editor-toolbar-select"
                onChange={ e => pff( "fontSize", e.target.value ) }
                value={ fontSize }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
            </select>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ pff } action="bold" icon={ <i className="fas fa-bold"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="italic" icon={ <i className="fas fa-italic"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="underline" icon={ <i className="fas fa-underline"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="strikethrough" icon={ <i className="fas fa-strikethrough"></i> }/>
                </li>
                <li>
                    <ColorsPalette onClick={ pff }/>
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ pff } action="justifyLeft" icon={ <i className="fas fa-align-left"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="justifyCenter" icon={ <i className="fas fa-align-center"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="justifyRight" icon={ <i className="fas fa-align-right"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="justifyFull" icon={ <i className="fas fa-align-justify"></i> }/>
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ pff } action="insertUnorderedList" icon={ <i className="fas fa-list-ul"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="insertOrderedList" icon={ <i className="fas fa-list-ol"></i> }/>
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ pff } action="superscript" icon={ <i className="fas fa-superscript"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="subscript" icon={ <i className="fas fa-subscript"></i> }/>
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ pff } action="indent" icon={ <i className="fas fa-indent"></i> }/>
                </li>
                <li>
                    <ToolbarButton onClick={ pff } action="outdent" icon={ <i className="fas fa-outdent"></i> }/>
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <InsertLink />
                </li>
                <li>
                    <InsertImage />
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li style={{ color: "#ccc" }}>
                    <InsertTable onClick={ insertTable }/>
                </li>
                <li style={{ color: "#ccc" }}>
                    <InsertSurvey />
                </li>
            </ul>
            <ul className="editor-toolbar-group">
                <li>
                    <ToolbarButton onClick={ toggleHTML } action="indent" icon={ <i className="fas fa-code"></i> }/>
                </li>
            </ul>
        </div>
    )
}
