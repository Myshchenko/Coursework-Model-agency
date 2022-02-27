import { observer } from "mobx-react";
import React from "react";

export default observer(function PhotoArea() {
    return (
        <div className={`bottomleft`}>
            <img src={`pictures/home.png`} width={"355"} height={"600"} />
        </div>
    )
}
)