import React, { useContext } from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';
import {useQuery} from '@tanstack/react-query';
export default function ChannelInfo({id, name}) {
  const {youtube} = useYoutubeApi();
  const {data: url}= 
    useQuery(['channel', id], () => youtube.channelImageURL(id));

  return (
    <div>
      {url && <img src={url} alt={name}/>}
      <p>{name}</p>
    </div>
  );
}
