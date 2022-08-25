/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from 'sanitize-html';


var _ = require("lodash");

const Editable = (props) => {
    const [sanitizeConf, ] = useState({
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
        allowedAttributes: { a: ["href"] }
    });

    const [html, setHtml] = useState(``);
    const [clickedOutside, setClickedOutside] = useState(true);
    const [italic, setItalic] = useState(false);
    const [bold, setBold] = useState(false);
    const inputRef = useRef();
    const bRef = useRef();
    const iRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    useEffect(() => {
        setHtml(props.value);
        // setEditable(true);
    }, []);


    const handleClickOutside = (e) => {
        if (
            _.isEmpty(inputRef.current.el.current) ||
            _.isEmpty(bRef.current) ||
            _.isEmpty(iRef.current)
        ) {
            return;
        }

        if (
            !inputRef.current.el.current.contains(e.target) &&
            !bRef.current.contains(e.target) &&
            !iRef.current.contains(e.target)
        ) {
            setClickedOutside(true);
        }
    };

    const sanitize = () => {
        setHtml(sanitizeHtml(html, sanitizeConf));
    };

    const EditButton = (props) => {
        let { cmd, arg, name } = props;

        let cn = "unselect";
        switch (name.toLowerCase()) {
            case "b": {
                cn = bold ? "select" : "unselect";
                break;
            }
            case "i": {
                cn = italic ? "select" : "unselect";
                break;
            }
            default:
                break;
        }

        return (
            <button
                ref={name.toLowerCase() === "b" ? bRef : iRef}
                disabled={clickedOutside}
                key={cmd}
                className={cn}
                onClick={(evt) => {
                    evt.preventDefault(); // Avoids loosing focus from the editable area
                    document.execCommand(cmd, false, arg); // Send the command to the browser

                    switch (name.toLowerCase()) {
                        case "b": {
                            setBold(!bold);
                            break;
                        }

                        case "i": {
                            setItalic(!italic);
                            break;
                        }

                        default:
                            break;
                    }
                }}
            >
                {name || cmd}
            </button>
        );
    };

    return (
        <div>
            <ContentEditable
                ref={inputRef}
                className="editable"
                tagName="pre"
                html={props.value} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={props.onChange} // handle innerHTML change
                onBlur={sanitize}
                onFocus={(evt) => {
                    setClickedOutside(false);
                }}
            />
            <div>
                <div>
                    <EditButton cmd="bold" name="B" />
                    <EditButton cmd="italic" name="i" />
                </div>
            </div>
        </div>
    );
};

export default Editable;
