import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData() 
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/realadityakumar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-centter m-4 bg-gray-600 text-white text-3xl flex ">GitHub Followers:{data.followers}
        <img src={data.avatar_url} alt="" />
        </div>
    )
}
export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/realadityakumar')
    return response.json()
}