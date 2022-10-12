import React from 'react'
import { AiOutlineClockCircle, AiOutlineTag ,AiOutlineComment,AiOutlineShareAlt} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { blog } from '../../assets/data/data'
import './blog.css'

const Card = () => {
  return (
    <>
    <section className="blog">
        <div className="container grid3">
            {blog.map((item)=>(
                <div className="box boxItems" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="img" />
                    </div>
                 <div className="details">
                    <div className="tag">
                        <AiOutlineTag className='icon'/>
                        <a href="/">#{item.category}</a>
                    </div>
                    <Link to={`/details/${item.id}`} className='link'>
                        <h3>{item.title}</h3>
                    </Link>
                    <p>{item.desc.slice(0,180)}...</p>
                <div className="date">
                <AiOutlineClockCircle className='icon'/> <label htmlFor="">{item.date}</label>
                <AiOutlineComment className='icon'/> <label htmlFor="">382</label>
                <AiOutlineShareAlt className='icon'/> <label htmlFor="">Share</label>
                </div>
                </div>  
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Card