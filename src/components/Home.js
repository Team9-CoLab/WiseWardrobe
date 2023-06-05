import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import  Rectangle from './Rectangle';
import Footer from './Footer';
import Search from './Search';
import New from './New';
function Home() {
  return (
    <div className='home'>
        
     {/* searchbox */}
    <section className='searchbox searchsection'> 
    <FontAwesomeIcon icon= {faSearch} />
    <input type="text" placeholder='search colset'  className="no-border"/>

    </section>
   
    {/* add items to your closet */}
<section>

<br />

<p className='text-lg'>add items to your closet</p>
<button className='btnaddanitem'>add an item</button>
</section>
    <section className='createoutfits'>
  <p className='text-lg'> create outfits from your closet</p> 

    <button className='createoutfitbtn'>
    create an outfit   
    </button>
    </section>
    <section><p className='text-lg'>browse items in your closet</p>
    <Rectangle/>    
   <section className='flex'>
    
    <p className="w-28 ">pink sparkle tank top</p>
    <p className="w-28 " >black jeans</p>
    <p className="w-28">light jeans with rips</p>
   </section>
    

    </section>
    <section><p className='text-lg'>browse outfits in your closet</p>
    <Rectangle/>
    <section className='flex'>
    
    <p className="w-28">pink sparkle tank top</p>
    <p className="w-28 " >black jeans</p>
    <p className="w-28">light jeans with rips</p>
   </section>
    </section>
    <Footer/>
    <Search/>
    <New/>
    </div>
  )
}

export default Home
