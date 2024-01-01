import React from 'react'

export default function Menu() {
    return (
        <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    )
}
