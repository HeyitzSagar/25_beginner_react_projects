//  creating a slider basically a image slider
import React, { useState } from "react";
import { useEffect } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Slider = ({ url, limit, page = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentslide, setCurrentslide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page={page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);

      setErrorMessage(error.message);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading !== null) {
    return <div>Loading data ! Please Wait</div>;
  }
  if (errorMessage !== null) {
    return <div>Error Occurred ! {errorMessage}</div>;
  }

  return (
  <div className="container">
    <BsArrowLeftCircleFill className="arrow arrow-left"/>
    {
        images && images.length ? images.map((imageitem) => {
            return(
                
                    <img
                    key={imageitem.id}
                    alt={imageitem.download_url}
                    src={imageitem.download_url}
                    className="current-image"
                    />
               
            )
        })  
        :
        <div>No images found</div>
    }
    <BsArrowRightCircleFill className="arrow arrow-right"/>
    <span className="circle-indicators">
        {
            images && images.length ?
            images.map((imageitem, index) => {
                return(
                    <button key={index} className="current-indicator"></button>
                )
            })
            : null
        }
    </span>
  </div>
  );
};

export default Slider;
