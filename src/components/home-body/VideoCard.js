import React, {forwardRef} from 'react';
import './VideoCard.css';
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef (({movie},ref) => {
    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>

            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.tittle || movie.original_title}</h2>
            <p className='videoCard_stats'>
                {/*{movie.media_type && `${movie.media_type}`}*/}
                {movie.release_date || movie.first_air_date}
                <br/>
                <ThumbUpIcon/>{" "}
                {movie.vote_count}
            </p>
        </div>
    );
});

export default VideoCard;