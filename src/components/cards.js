import React from 'react';

/*const playMusic=()=>{
    isPlaying= true;
    music.play();
    play.classList.replace("fa-play, fa-pause");
};
const pauseMusic=()=>{
    isPlaying= false;
    music.pause();
    play.classList.replace("fa-pause, fa-play");
};
play.addEventListener("click", ()=>{
    isPlaying ? pauseMusic() : playMusic();
});*/

function Cards(props){
    return(
        <>
        <div className='card col-lg-2 col-md-4'>
        <div className='card_pos col-12' >
        <img src={props.poster} alt={props.name} className='card_img'></img>
        </div>
        <div className='card_info col-12'>
        <h3 className='card_title'> {props.name} </h3>
        <div className='card_aud col-12'>
        <audio controls>
        <source src={props.audio} type="audio/mp3"></source>
        </audio>
        </div>
        </div>
        </div>
        </>
    );
}

export default Cards;