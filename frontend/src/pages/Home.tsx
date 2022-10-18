import React from 'react';
import NavBar from "./../components/NavBar";
import reactLogo from './assets/react.svg';
import { RiAuctionLine } from "react-icons/ri";
import { MdPointOfSale } from "react-icons/md";
import { BsSearch ,BsFacebook, BsWhatsapp, BsTwitter, BsInstagram} from "react-icons/bs"

function Home() {
  return (
    <>
       <section className="banner">
            <div className="text-container">
            <h3>Something goes here</h3>
            <div className="buttons">
                <a className="btn"><RiAuctionLine /> Auctions</a>
                <a className="btn"><MdPointOfSale /> Sale Or Purchase</a>
            </div>
            </div>
        </section> 
        <section className='search'>
              <div className="search-box">
                <input type="text" className='search-input' placeholder='CATEGORY' style={{width:'30%'}}/>
                <input type="text" className='search-input' placeholder='KEYWORDS'/>
              </div>
              <div className="social-media">

                <a><BsFacebook /></a>
                <a><BsWhatsapp /></a>
                <a><BsTwitter /></a>
                <a><BsInstagram /></a>
              </div>
        </section>
    </>
  )
}
export default Home;