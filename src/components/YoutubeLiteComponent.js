import React, { useState, useContext } from 'react';
import { globalContext } from '../context/context';

export default function LightYouTubeEmbed({ id }) {
    const [videoPlayed, setVideoPlayed] = useState(false);

    const videoSrc = `https://www.youtube.com/embed/${id}?autoplay=1`;

    const { stopPlay, setStopPlay } = useContext(globalContext);
    setStopPlay(false)

    const handleClick = () => {
        setVideoPlayed(true);
        setStopPlay(!stopPlay)
    };

    return (
        <div onClick={handleClick} style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}>
            {!videoPlayed &&
                <img src={`https://img.youtube.com/vi/${id}/sddefault.jpg`} alt="thumbnail" 
                     style={{ width: '100%', height: '100%' }}
                />
            }

            {videoPlayed && !stopPlay ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={videoSrc}
                    title="Video"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                />
            ) : (
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <img src="your-youtube-play-icon" alt="Play button" /> */}
                </div>
            )}
        </div>
    );
};