// A reuseable Like button that allows users to like/unlike content

import React, { useState } from "react";
import "./App.css";

export const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [clicked, setClicked] = useState(false);

    function clickHandler() {
        setLiked(!liked);
        setClicked(!clicked);

    }

    return (
        <button
            onClick={ clickHandler
        }>
            <div class={liked ? 
                "relative bottom-5 bg-pink-500 text-white px-8 py-2.5 rounded-lg hover:bg-pink-600 transition-all ease-out duration-500" :
                "relative bottom-5 bg-purple-500 text-white px-8 py-2.5 rounded-lg hover:bg-purple-600 transition-all ease-out duration-500"}>
                <p>Like</p>
                
            </div>
        </button>
    )
}