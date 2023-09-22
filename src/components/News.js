import React,{useState,useEffect} from 'react'
import Newscard from './Newscard'


export default function News() {


  const[articles,setarticles]=useState([])
  const UpdateNews=async()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=c5821203840041189a93fc0be3ea27a6';
    let data=await fetch(url);
    let parsdata=await data.json();
    setarticles(parsdata.articles)
  }
  useEffect(()=>{
    UpdateNews();
  })


  return (
    <div className='container'>
      <div className="row">
      {articles.map((element)=>{
            return <div className="col-md-4 my-5" key={element.url}>
                <Newscard title={element.title} img={element.urlToImage}/>
                </div>
      })}
      </div>
      
    </div>
  )
}
