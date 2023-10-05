import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
      <div className='text-center m-4 rounded-md bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <br /><br />  Github following: {data.following}
    <img className="rounded-2xl my-5" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mohdamaan069')
    return response.json()
}