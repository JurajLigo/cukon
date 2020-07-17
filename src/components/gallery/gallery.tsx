import * as React from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Image } from '../img/Image'
import { useCallback, useState } from 'react'

import './gallery.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export interface MasonryGalleryProps {
  name: string
}

export const MasonryGallery = (props: MasonryGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const {images, name} = props;

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const CustomFooterCount = ({ currentIndex, views }) => (
    <div>
      {currentIndex + 1} z {views.length}
    </div>
  )

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, onClick }) => (
      <div
        onClick={e => openLightbox(e, { photo, index })}
        style={{ margin: '2px', height: photo.height, width: photo.width }}
      >
        <Img fluid={photo.file}/>
      </div>
    ),
    []
  )

  return (
    <div className="second-container gallery__container">
      <div className="gallery base-container">
        <h2 className="title title--article gallery__title">{name}</h2>
        <Gallery photos={images} renderImage={imageRenderer} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                components={{ FooterCount: CustomFooterCount }}
                currentIndex={currentImage}
                showImageCount={false}
                views={images.map(photo => ({
                  ...photo,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  )
}
