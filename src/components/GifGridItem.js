import React from 'react'

const GifGridItem = ({title,url}) => {
    return (
        <div className = 'card'>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GifGridItem
