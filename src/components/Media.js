import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiKey, domainName } from '../utils/apiUrls';
import { posterUrlBig } from '../utils/apiUrls';
import MediaPage from './media_page/MediaPage';
import averageColor from '../utils/averageColor';
import Loading from './Loading';
const setStyle = document.documentElement.style;

export default function Movie() {
    // Requiring information about the media
    const location = useLocation();
    const data = location.state;
    const { mediaType, id} = data;

    // Constructing the media link to fetch its information from the Api
    const path = `${domainName}${mediaType}/${id}?api_key=${apiKey}&language=en-US`;
    const [info, setInfo] = useState(0);

    // Fetching the media info from the api.
    const fetchData = () => {
        fetch(path)
        .then(response => response.json())
        .then(data => setInfo(data));
    }
    // It only allows fetching the info from the Api once.
    useEffect(() => fetchData(),[]);

    // Hook that allows to store the image-element's main color. That is going to be used to set the overlay color
    const [rgb, setRgb] = useState(0);

    // Setting the rgb color to use in the overlay background color.
    useEffect(() => {
       const imageElement = document.getElementsByClassName("poster--media")[0];
        if (imageElement) {
            imageElement.onload = () => {
                setRgb(averageColor(imageElement));
            }
        }
    }, [info]);

    // Getting the variables from the CSS file to set.
    setStyle.setProperty("--background-image", `url(${posterUrlBig}${info.backdrop_path}`);
    setStyle.setProperty("--background-overlay", `linear-gradient(90deg, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 20%, rgba(${rgb.r},${rgb.g},${rgb.b}, 0.84) 50%, rgba(${rgb.r},${rgb.g},${rgb.b}, 0.84) 100%)`);

    return (
        <div className='media--container'>
            { info ?
            <MediaPage
                info={info}
                mediaType={mediaType}
                id={id}
            />:
            <Loading />
            }
        </div>
    )
}