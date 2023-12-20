
import React from 'react';
import "../styles/gallery_css.css";
import img1 from "../assets/images/slider-1.jpg";
import img2 from "../assets/images/slider-2.jpg";
import img3 from "../assets/images/slider-3.jpg";
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
          <div className="item1" style={{ backgroundImage: `url(${img1})` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img2})` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img3})` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="item1" style={{ backgroundImage: `${img1}` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img2})` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div className="item1" style={{ backgroundImage: `url(${img3})` }}>
            <div className="content1">
              <div className="name1">Travel Blend</div>
              <div className="des1">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
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
<h1 className="gallery-heading-text">Gallery</h1>
</center>
       <div className="container-gallery">
        <div className="grid-item1">
          <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div><div className="grid-item1">
        <div className="image-container">
            <img src={img1} alt="Your Image" />
            <div className="image-overlay">
              <p className="overlay-text">Hover to Zoom</p>
            </div>
          </div>
        </div>
      </div> 
      </div>
    </>
  );
}
