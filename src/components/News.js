import React,{useState,useEffect} from 'react'
import Newscard from './Newscard'
import PropTypes from 'prop-types';


export default function News(props) {


  const[articles,setarticles]=useState([])
  const UpdateNews=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=c5821203840041189a93fc0be3ea27a6`;
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
      {/* populate NewsItems */}
      {articles.map((element)=>{
            return <div className="col-md-4 my-5" key={element.url}>
                <Newscard title={element.title} img={element.urlToImage}/>
                </div>
      })}
      </div>
      
    </div>
  )
}

News.defaultProps = {
  country:'in',
};

News.propTypes = {
  country: PropTypes.string,
};
