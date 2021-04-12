import React, {FC, ReactElement} from "react";

export type CollectionProps = {
    name: string,
    tags: [object]
}

export const Collection : FC<CollectionProps>  = ({name="Untitled", tags=[]}) =>{
    return (
        <div>
            <button>{name}</button>
        </div>
    )
}
