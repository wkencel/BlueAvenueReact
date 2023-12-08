import React from "react";
import SamiAndPhil from '../optimized-images/SamiPhilwmanhattan.webp';
import Pam from '../optimized-images/Pam.webp';
import GirlDancing from '../optimized-images/Leibel-Band-10.webp';
import OldGuy from '../optimized-images/Liebel.oldguydancing.webp';
import loadable from '@loadable/component';

// const ImageGallery = loadable(() => import('./Instagram.js')); // If you decide to use it in the future just uncomment this line.
const LightYouTubeEmbed = loadable(() => import('../components/YoutubeLiteComponent'));

export default function Media() {
  return (
    <>
      <h1 className="major">Media</h1>
      <span className="image main">
      </span>
      <h2>
        Check out our sound
      </h2>
      <br/>
      <div>
        <div id="first_video">
          <h3>Blue Avenue Groove Promo 2023</h3>
          < LightYouTubeEmbed id="Kt-j9h9qatk" />
        </div>
        <br/>
        <br/>
        <div id="second_video">
          <h3>Move on Up - Curtis Mayfield -- live</h3>
          < LightYouTubeEmbed id="NtZLBObQ3PU" />
        </div>
        <br/>
        <br/>
        <div id="third_video">
          <h3>Use me - Bill Withers -- live</h3>
          < LightYouTubeEmbed id="jw4zzH1DVM0" />
        </div>
        <br/>
        <br/>
        <div id="fourth_video">
          <h3>As It Was/Take On Me -Harry Styles/A-Ha</h3>
          <LightYouTubeEmbed id="jVUzk9YT06w" />
        </div>
        <br/>
        <br/>
        <div id="fifth_video">
          <h3>About Damn Time -Lizzo</h3>
          < LightYouTubeEmbed id="qQw_oftZmzI" />
        </div>
        <br/>
        <br/>
        <div id="sixth_video">
          <h3>Promo Vid</h3>
          < LightYouTubeEmbed id="Kh6JXWRmLWE" />
        </div>
        <br/>
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
    </>
  )
}
