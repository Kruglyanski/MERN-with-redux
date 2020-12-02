import React from 'react'
import {useSelector} from 'react-redux'

export const LinkCard = () => {
    const link = useSelector(state => state.link.link)
    return (
        <>
            <h2>Link</h2>
            <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            {/*rel... чтобы реакт корректнее работал с ссылкой*/}
            <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Number of clicks: <span>{link.clicks}</span></p>
            <p>Date of creation: <span>{new Date(link.date).toLocaleDateString()}</span></p>
        </>
    )
}