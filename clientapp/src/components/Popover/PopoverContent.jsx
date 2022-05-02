

export function PopoverContent({title, elements, width, icon}) {
    return (
        <div style={{display: "flex", flexDirection: "column", width: width}}>
            <div style={{borderBottom: "1px solid #bbb", height: "35px", display: "flex", alignItems: "center",  backgroundColor: "#eee"}}>
                <span style={{marginLeft: "10px"}}>{title}</span>
                <span style={{marginLeft: "auto", marginRight: "10px", marginTop: "8px"}}>{icon}</span>
            </div>
            {elements.map((el) => el)}
        </div>
    )
}

export function PopoverContentElement({Component}) {
    return (
        <div>
            {Component}
        </div>
    )
}