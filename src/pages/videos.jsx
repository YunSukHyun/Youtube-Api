import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './videoCard';
import MockYoutube from '../api/mockYoutubeClient';
import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/youtubeApiContext';

export default function Videos() {
  const {keyword} = useParams();
  const {youtube} = useYoutubeApi();
  const {isLoading, err, data: videos} = useQuery(
    ['videos', keyword], () => youtube.search(keyword));
  console.log(isLoading, err, videos)
  return(
    <>
      {isLoading && <p>Loading...</p>}
      {err && <p>Something is wrong</p>}
      {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 gap-y-3'>
        {videos.map(video => <VideoCard key={video.id} video={video}/>)}
        </ul>}
    </>
  );
}

