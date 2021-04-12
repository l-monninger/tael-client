import React, {FC, ReactElement} from 'react';
import tailwind from 'tailwindcss';

export type HeaderProps = {}

export const Header : FC<HeaderProps>  = () =>{

    return (

        <div className="fixed top-0 left-0 bg-white grid-cols-3 border-b-2 border-salmon-600 drop-shadow-lg">
            <div>
                {/*TODO: This will hold the menu dropdown.*/}
            </div>
            <div className="content-center">
                tael
                {/*TODO: This will hold the logo.*/}
            </div>
            <div>
                {/*TODO: This will hold the Account Widget*/}
            </div>
        </div>

    )

}