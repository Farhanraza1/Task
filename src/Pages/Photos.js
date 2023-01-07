import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import { getClass } from "../utils"

const Photos = () => {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} />
    ))
    
    return (
        <main className="photos d-flex flex-wrap ">
            {imageElements}
        </main>
    )
}

export default Photos
