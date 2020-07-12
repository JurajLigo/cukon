import * as React from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { Image } from '../img/Image'
import { useCallback, useState } from 'react'

import './gallery.scss'

import Pezinok from '../../images/pezinok/pezinok.jpg'
import Pezinok1 from '../../images/pezinok/pezinok1.jpg'
import Pezinok2 from '../../images/pezinok/pezinok2.jpg'
import Pezinok3 from '../../images/pezinok/pezinok3.jpg'
import Pezinok4 from '../../images/pezinok/pezinok4.jpg'
import Pezinok5 from '../../images/pezinok/pezinok5.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const MasonryGallery = (props: any) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const {image} = props;
  console.log('image as props', image);


  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photosReal = [
    {
      file: image.node.childImageSharp.fluid,
      src: image.node.childImageSharp.fluid.src,
      width: image.node.childImageSharp.fluid.presentationWidth,
      height: image.node.childImageSharp.fluid.presentationHeight,
    },
    {
      file: image.node.childImageSharp.fluid,
      src: image.node.childImageSharp.fluid.src,
      width: image.node.childImageSharp.fluid.presentationWidth,
      height: image.node.childImageSharp.fluid.presentationHeight,
    },
    {
      file: image.node.childImageSharp.fluid,
      src: image.node.childImageSharp.fluid.src,
      width: image.node.childImageSharp.fluid.presentationWidth,
      height: image.node.childImageSharp.fluid.presentationHeight,
    }
  ]

  const photos = [
    {
      file: 'pezinok/pezinok.jpg',
      src: Pezinok,
      width: 4,
      height: 3
    },
    {
      file: 'pezinok/pezinok1.jpg',
      src: Pezinok1,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok2.jpg',
      src: Pezinok2,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok3.jpg',
      src: Pezinok3,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok4.jpg',
      src: Pezinok4,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok5.jpg',
      src: Pezinok5,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok2.jpg',
      src: Pezinok2,
      width: 3,
      height: 4
    },
    {
      file: 'pezinok/pezinok3.jpg',
      src: Pezinok3,
      width: 3,
      height: 4
    },
  ]

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
        <Img fluid={image.node.childImageSharp.fluid}/>
      </div>
    ),
    []
  )

  return (
    <div className="second-container gallery__container">
      <div className="gallery base-container">
        <h2 className="title title--article gallery__title">Fotogaleria</h2>
        <Gallery photos={photosReal} renderImage={imageRenderer} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                components={{ FooterCount: CustomFooterCount }}
                currentIndex={currentImage}
                showImageCount={false}
                views={photosReal.map(photo => ({
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
