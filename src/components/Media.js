import React from "react";
// import ImageGallery from './Instagram.js'
// import JonDancing from '../assets/images/JonDancing.jpeg';
import SamiAndPhil from '../assets/images/SamiPhilwmanhattan.jpeg';
import Pam from '../assets/images/Pam.jpeg';
import GirlDancing from '../assets/weddingPhotos/Leibel-Band-10.jpg';
import OldGuy from '../assets/weddingPhotos/Liebel.oldguydancing.jpg';

export default function Media() {
  return (
    <>
      <h2 className="major">Media</h2>
      <span className="image main">
      </span>
      <h3>
        Clips
      </h3>
      <div>
      <div id="first_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/Kt-j9h9qatk"
        title="test"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay
        />
      </div>
      <br/>
      <div id="second_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/NtZLBObQ3PU"
        title="test"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay
        />
      </div>
      <br/>
      <div id="fourth_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/jw4zzH1DVM0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
        <br>
        </br>
        <br />
        <div id="second_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/jVUzk9YT06w"
        title="test"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay
        />
      </div>
      <div id="second_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/qQw_oftZmzI"
        title="test"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay
        />
      </div>
      <br/>
      <div id="third_column">
        <iframe
        width="100%"
        height='400px'
        src="https://www.youtube.com/embed/Kh6JXWRmLWE"
        title="test"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay
        />
      </div>
      <br/>
        <h3>
          Snaps from our shows
        </h3>
        <br/>
          <img src={GirlDancing} alt="Pam" width='100%'/>
        <br/>
        <br/>
          <img src={OldGuy} alt="Pam" width='100%'/>
        <br/>
        <br/>
          <img src={SamiAndPhil} alt="Sami Stevens and Phil Faconti" width='100%'/>
        <br/>
        <br/>
          <img src={Pam} alt="Pam" width='100%'/>
      </div>
    </div>
    </>
  )
}
