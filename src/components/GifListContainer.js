import React, {useState, useEffect } from 'react'
import GifList from './GifList'

function GifListContainer(){

    const [gifList, setGifList] = useState([])
  

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=kzLvC7ErZLHViSMAmFRYtjtgRifdSYhZ&rating=g")
        .then(res => res.json())
        .then(data=>{console.log(data.data)
            //show just 3 gifs
            const gifArray = data.data.slice(0,3)
            setGifList(gifArray)
        }
        )
    }, [])

    return(
        <div>
            <GifList gifs={gifList}/>
        </div>
    )

}

export default GifListContainer