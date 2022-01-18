// A reuseable card that calls Nasa's Image API and populates with image and details

import React,{useEffect,useState} from "react";
import { LikeButton } from "./LikeButton"
import "./App.css";
import axios from "axios";


export const Nasa = () => {

    let [Data, setData] = useState([])

    var url = "https://api.nasa.gov/planetary/apod?api_key=JEHTtbHQlMckm1abOtz0htptW3FRtjTWP40yz8Mg&count=5"

    useEffect(()=>{
        axios.get(url).then(res => {
            let returnedData = res.data;
            
            for(let i = 0; i < res.data.length; i++){
                setData(
                    returnedData
                )
            }
            
        })
            
    },[])

    return(
    <div>
        {Data.map((space) => (
                <div class="flex space-x-4 p-4 text-center justify-center">
                    <div class="w-1/2 h-1/3 shadow-md bg-gray-100 rounded-lg h-24 justify-between items-center hover:shadow-xl">
                        <p class="font-mono text-2xl">{space.title}</p>
                        <p>{space.date}</p>
                        <img src={space.url} alt={space.title} class="p-5 w-full"/>
                        <p class="m-8">{space.explanation}</p>
                        <LikeButton />
                    </div>
                </div>  
                )
            )  
        }
    </div>)
}