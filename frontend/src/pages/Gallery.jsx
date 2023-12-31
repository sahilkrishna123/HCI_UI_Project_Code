
import React from 'react';
import "../styles/gallery_css.css";
import img1 from "../assets/images/eiffeltower.jpeg";
import img2 from "../assets/images/hunza.avif";
import img3 from "../assets/images/swat.jpg";
import img4 from "../assets/images/burjkhalifa.avif";
import img5 from "../assets/images/maldives.jpeg";
import img6 from "../assets/images/bangkok.jpg";
import img7 from "../assets/images/phuket.avif";
import img8 from "../assets/images/sydney.webp";
import img9 from "../assets/images/barcelona.avif";
import img10 from "../assets/images/bali.avif";
import eiffelImg from '../assets/images/eiffel.jpeg'
import galleryImg01 from '../assets/images/gallery-01.jpg'
import galleryImg02 from '../assets/images/gallery-02.jpg'
import galleryImg03 from '../assets/images/gallery-03.jpg'
import galleryImg04 from '../assets/images/gallery-04.jpg'
import galleryImg05 from '../assets/images/gallery-05.jpg'
import galleryImg06 from '../assets/images/gallery-06.jpg'
import galleryImg07 from '../assets/images/gallery-07.jpg'
import galleryImg08 from '../assets/images/gallery-02.jpg'
import Newsletter from '../shared/Newsletter'
import Subtitle from "./../shared/subtitle";

export default function Gallery() {
 

  const handleNextClick = () => {
    const lists = document.querySelectorAll(".item1");
    document.getElementById("slide1").appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    const lists = document.querySelectorAll(".item1");
    const slide1 = document.getElementById("slide1");
    slide1.prepend(lists[lists.length - 1]);
  };
  return (
    <>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      
      <div className="container1">
        <div id="slide1">
          <div className="item1" style={{ backgroundImage: `url(${img6})` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img2})` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img4})` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
          <div className="item1" style={{ backgroundImage: `${img5}` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img5})` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img8})` }}>
            {/* <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div> */}
          </div>
        </div>
        <div className="buttons">
          {/* <button id="prev"> */}
          <button id="prev" onClick={handlePrevClick}>
            <i className="fa-solid fa-angle-left" />
          </button>
          {/* <button id="next"> */}
          <button id="next" onClick={handleNextClick}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
      {/* <div className="parallax" ></div>
  <div style={{ height: 1000, backgroundColor: "red", filter: "blur(0.5px)", fontSize: 36, backgroundImage: `url(${img1})` , backgroundAttachment: "fixed",backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
    Scroll Up and Down this page to see the parallax scrolling effect. This div
    is just here to enable scrolling. Tip: Try to remove the
    background-attachment property to remove the scrolling effect.


    <div classNamme="responsive">
  <div classNamme="gallery">
    <a target="_blank" href="img_5terre.jpg">
      <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400" />
    </a>
    <div classNamme="desc">Add a description of the image here</div>
  </div>
</div>



  </div>

  <div className="parallax" > </div>


    <div style={{ height: 1000, backgroundColor: "red", fontSize: 36, backgroundImage: `url(${img2})` , backgroundAttachment: "fixed",backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
    Scroll Up and Down this page to see the parallax scrolling effect. This div
    is just here to enable scrolling. Tip: Try to remove the
    background-attachment property to remove the scrolling effect.
  </div>


  <div style={{ height: 1000, backgroundColor: "red", fontSize: 36, backgroundImage: `url(${img1})` , backgroundAttachment: "fixed",backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
    Scroll Up and Down this page to see the parallax scrolling effect. This div
    is just here to enable scrolling. Tip: Try to remove the
    background-attachment property to remove the scrolling effect.
  </div> */}




{/* <div style={{ margin:"10px",marginLeft:"100px"}}> */}
<div style={{marginTop: "-150px"}}>
<center>
<h1 className="gallery-heading-text" style={{color:"white" ,backgroundColor:"#1A5891"}}>Gallery</h1>
</center>
       <div className="container-gallery " style={{marginTop:"150"}}>
        <div className="grid-item1">
          <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Eiffel Tower</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img2} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hunza</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img3} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Swat</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img4} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Burj Khalifa</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img5} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Maldives</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img6} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Bangkok</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img7} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Phuket</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img8} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Sydney</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img9} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Barcelona</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img10} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Bali</p>
            </div>
          </div>
        </div>
      </div> 
      <Newsletter/>
      </div>
    </>
  );
}
