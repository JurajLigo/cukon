import * as React from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { Image } from "../img/Image";
import { useCallback, useState } from "react"

import Pezinok from "../../images/pezinok/pezinok.jpg";
import Pezinok1 from "../../images/pezinok/pezinok1.jpg";
import Pezinok2 from "../../images/pezinok/pezinok2.jpg";
import Pezinok3 from "../../images/pezinok/pezinok3.jpg";
import Pezinok4 from "../../images/pezinok/pezinok4.jpg";
import Pezinok5 from "../../images/pezinok/pezinok5.jpg";

export const MasonryGallery = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log('ahoj');
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      file: "pezinok/pezinok.jpg",
      src: Pezinok,
      width: 3648,
      height: 2736
    },
    {
      file: "pezinok/pezinok1.jpg",
      src: Pezinok1,
      width: 2736,
      height: 3648
    },
    {
      file: "pezinok/pezinok2.jpg",
      src: Pezinok2,
      width: 2736,
      height: 3648
    },
    {
      file: "pezinok/pezinok3.jpg",
      src: Pezinok3,
      width: 2736,
      height: 3648
    },
    {
      file: "pezinok/pezinok4.jpg",
      src: Pezinok4,
      width: 2736,
      height: 3648
    },
    {
      file: "pezinok/pezinok5.jpg",
      src: Pezinok5,
      width: 2736,
      height: 3648
    }
  ];

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, onClick}) => (
      <div onClick={(e) => openLightbox(e, {photo, index})}
           style={{margin: '2px', height: photo.height, width: photo.width}}
      >
        <Image filename={photo.file}   classname={""}/>
      </div>
    ),
    []
  );

  return (
    <>
    <Gallery photos={photos} renderImage={imageRenderer}/>
        <ModalGateway>
        {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  caption: 'Ahoj'
                }))}
              />
            </Modal>
          ) : null}
    </ModalGateway>
      </>

  );
};
