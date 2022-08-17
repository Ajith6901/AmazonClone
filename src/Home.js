import React from 'react'

// importing Home.css
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img className='home__image'
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000" 
            alt=""

            // https://images-eu.ss-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg
//  we need to fix this url , this is not working
 
            />
{/* 
            so for each row , we will be creating different divs */}

            <div className='home__row'>

{/* for adding different different products we used props in Product.js - {title,image,price,rating} , line 4 */}


              {/* PRODUCT */}
              {/* PRODUCT */}

              <Product title='The lean startup' price={290} 
              image ='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
              rating={3}
              />
              <Product
              title='watch' price={5000} 
              image ='https://www.apple.com/newsroom/images/product/watch/standard/watch_series_3_incoming_two-wrap_big.gif.large.gif'
              rating={5}
              
              />
            </div>
            <div className='home__row'>
              {/* PRODUCT */}
              {/* PRODUCT */}
            {/* PRODUCT */}
            <Product
            title='watch' price={5000} 
            image ='https://www.apple.com/newsroom/images/product/watch/standard/watch_series_3_incoming_two-wrap_big.gif.large.gif'
            rating={5}

            />
            <Product
            title='watch' price={5000} 
            image ='https://www.apple.com/newsroom/images/product/watch/standard/watch_series_3_incoming_two-wrap_big.gif.large.gif'
            rating={5}
            />
            <Product
            title='watch' price={5000} 
            image ='https://www.apple.com/newsroom/images/product/watch/standard/watch_series_3_incoming_two-wrap_big.gif.large.gif'
            rating={5}
            />
            </div>

            <div className='home__row'>
              {/* PRODUCT */}
              <Product
              title='SMART TV' price={900000} 
              image ='https://static.toiimg.com/thumb/msid-81429075,width-1200,height-900,resizemode-4/.jpg'
              rating={5}
              />

            </div>

            




        </div>

      
    </div>
  );
}

export default Home;
