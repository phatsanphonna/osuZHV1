import React from 'react'

export default function Btn(props) {
    const { url, src, alt } = props

    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <button className='rounded-lg shadow-md bg-white bg-opacity-90 hover:bg-gray-300'>
                <img src={src} alt={alt} />
            </button>
        </a>
    )
}
