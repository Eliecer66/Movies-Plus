import React from 'react';
import { posterUrlRegular } from '../../../utils/apiUrls';

export default function ImagePoster({poster}) {
    return (
        <img className="poster--media effect--front" src={`${posterUrlRegular}${poster}`} crossOrigin=''/>
    );
}