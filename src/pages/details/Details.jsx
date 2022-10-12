import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { blog } from '../../assets/data/data'
import './details.css'
const Details = () => {


    const {id} = useParams()
    const [blogs,setBlogs] = useState(null)
  
   useEffect(()=>{
    let blogs = blog.find((blogs)=>blogs.id === parseInt(id))

    if(blogs){
        setBlogs(blogs)
    }
   },[])
    return (
    <>
    {blogs ? (
    <section className="singlepost">
        <div className="container">
            <div className="left">
                <img src={blogs.cover} alt="img" />
            </div>
            <div className="right">
                <div className="buttons">
                    <div className="button">
                        <BsPencilSquare />
                    </div>
                    <button className="button">
                        <AiOutlineDelete />
                    </button>
                </div>
                <h1>{blogs.title}</h1>
                <p>{blogs.desc}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem in placeat, quisquam quaerat natus deserunt dolor, nostrum ipsam debitis, id vel ipsum consequatur suscipit assumenda pariatur! In nobis assumenda aspernatur! Iste doloremque itaque consequatur, iusto, illum ut facere cumque natus dolore reiciendis earum? Aliquid ducimus et est officiis iure, repellat ad voluptates, pariatur vitae fugit voluptate nihil nemo iste provident numquam, hic autem tenetur. Architecto dolores optio, aliquam dolorem culpa dicta? Inventore officiis harum provident suscipit dolores, reprehenderit, a, recusandae non maiores aperiam ex corrupti sint quia labore hic sunt numquam ipsa expedita eius ratione! Sunt labore magnam fuga enim veniam veritatis sed aliquam, ad, quam quia temporibus dolore molestias cumque repellat vero accusantium assumenda aliquid ipsum voluptatum itaque? In praesentium doloremque corrupti corporis explicabo aut perspiciatis? Accusantium suscipit blanditiis, molestiae id vitae, qui aliquid, architecto exercitationem necessitatibus aut dolores unde neque consequuntur eveniet! Nulla voluptate nostrum debitis dolorum nesciunt illum laboriosam corrupti maiores, eum sed voluptates totam aut quis! Ratione deleniti explicabo totam quos blanditiis officiis nostrum nisi omnis obcaecati qui? Voluptates, veritatis! Incidunt perspiciatis nostrum ut voluptatum, quibusdam adipisci excepturi facilis ipsum impedit distinctio ex iste sit labore numquam enim eos corporis! Molestias quos doloribus dolorem alias.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci pariatur consequuntur minus nesciunt iure magni vitae facere perferendis? Cumque porro in molestiae amet similique repellendus qui voluptatum, saepe voluptatibus quidem eaque corrupti maiores neque sunt hic architecto nam repellat tempore soluta. Eius doloremque a ipsa corrupti, nobis ullam vero cupiditate obcaecati laborum! Et excepturi perferendis ducimus aliquid voluptatem omnis cum nihil. Dolorum eveniet aut repellendus laborum sed repudiandae! Maxime est in rem dolor ex. Tenetur, sint explicabo id commodi voluptatem culpa facilis neque quae vero? Autem ad soluta commodi facilis eligendi, esse culpa inventore. Perferendis tenetur quaerat cupiditate ullam exercitationem cum nobis commodi nesciunt impedit ea maiores earum eveniet inventore sequi placeat possimus sapiente dolores, eos nulla. Corrupti eaque nobis, odio deserunt fuga adipisci veniam, cumque dolore voluptates quidem velit, nesciunt reprehenderit hic accusantium! Itaque incidunt ex cumque, quos eveniet impedit doloribus recusandae totam modi fuga? Ducimus ab porro ratione, est eos et aspernatur placeat expedita fugit libero qui modi magnam suscipit. Quasi dolor odit optio consectetur dolorem ducimus labore, non voluptas eius accusamus laboriosam nemo quas aliquam numquam deleniti sed soluta similique adipisci nostrum. Tempore pariatur eos adipisci at, autem laudantium? Expedita, qui praesentium. Ipsa, similique fuga beatae suscipit voluptate quia impedit aperiam voluptas fugiat alias quibusdam incidunt possimus deleniti distinctio temporibus molestias nesciunt asperiores aspernatur soluta ea. Dolorem qui cum, nobis iure quibusdam adipisci inventore suscipit iusto animi expedita cumque doloribus explicabo incidunt aperiam ea, rem, velit tempore tenetur accusantium. Quod minima animi quis non corrupti reiciendis eos tenetur quo? Officia, suscipit! Ea esse, sunt voluptatem mollitia omnis minus necessitatibus delectus! Laborum porro, quia quasi ipsam odit, cumque debitis ea saepe sapiente rerum facilis ut soluta officiis incidunt! Doloremque maxime enim accusamus velit facilis consequatur ullam ab officiis ratione nam sapiente dolores nihil quisquam eos, modi voluptatibus.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates atque quisquam ab eius sapiente pariatur ducimus numquam enim minima inventore ea dolorum iste, consectetur mollitia ipsam quas laboriosam deleniti quo asperiores alias nisi ut vero! Facere nesciunt, harum alias esse ad officia dolores minus optio aliquam non quibusdam qui eum tempora, libero exercitationem vel maxime voluptates cum sunt assumenda animi error. Quo vero placeat commodi sed et neque qui dolore harum dicta fuga tempora inventore atque aliquam, dolorum ipsum praesentium quaerat voluptatem. Consequatur quibusdam in nihil, officiis a vel asperiores voluptatibus porro quos maiores tempora dicta, quisquam quis beatae officia. Sed dolore quasi velit eius est quod dignissimos iusto nulla ratione molestiae voluptas blanditiis laboriosam consequuntur placeat delectus sequi dolores illo nemo, reiciendis possimus? Nemo reiciendis perferendis praesentium aut hic enim maiores quas. Voluptates laboriosam aperiam minima magni dolor consequatur officia pariatur, unde vitae reiciendis modi explicabo praesentium? Alias.</p>                
            </div>
        </div>
    </section>
     ):null}
    </>
  )
}

export default Details