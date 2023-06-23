import React, { useEffect, useState } from 'react'
const Home = () => {
  const [data,setData] = useState([])
  const [query,setQuery] = useState('')
  useEffect(()=>{
    const fetchData = async ()=>{
      let response = await fetch("https://reqres.in/api/users?page=2")
      response =  await response.json()
      // console.log(response.data);
      setData(response.data)
    }
    fetchData();
  },[])
  return (
    <div className='home'>
      <h1>GreendZine Internship Assesment</h1>
      <form>
      <label htmlFor="search" className='label'>
      <input type="text" name='search' id='search' placeholder='Search Here.....' value={query} onChange={(e)=>setQuery(e.target.value)} />
      </label>
      </form>
      {data?.filter((item)=>item.first_name.toLowerCase().includes(query)).map((item)=>{
        return(
          <div className='view' key={item.id}>
        <div className='card'>
            <div className='idNumber'>{item.id}</div>
            <img src={item.avatar} alt="avatar" className='avatar' />
        </div>
        <h2>{item.first_name}</h2>
    </div>
        )
      })}
    </div>
  )
}

export default Home