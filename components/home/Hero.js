import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../src/styles/Home/Hero.module.css'

const [image1, image2, image3] = [ "/illustrations/2 (1).png","/illustrations/2 (5).png","/illustrations/2 (6).png"]
const [top1, top2, top3] = ["Empowering Minds","Unlock Your Potential","Where Curiosity Meets Excellence"]
const [middle1, middle2, middle3] = ["Ensuring equitable access","Believe in yourself.","Experience learning as a journey of fascinating discoveries"]
const [end1, end2, end3] = [" to education for all.","",""]
const [img1, img2, img3] = ["img1", "img2", "img3"]

const Hero = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3])
  const [imagean, setImagean] = useState([img1, img2, img3])
  const [atop, setAtop] = useState([top1, top2, top3])
  const [amiddle, setAmiddle] = useState([middle1, middle2, middle3])
  const [aend, setAend] = useState([end1, end2, end3])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
    }, 8000)
  }, [])


  return (
    <div className={styles.bcontainer}>
    <div className={styles.container}>
    <div className={styles.text}>
      <div className={`${styles.top} ${styles.text1}`}>{atop[selectedImage]}</div>
      <div className={`${styles.middle} ${styles.text2}`}>{amiddle[selectedImage]}</div>
      <div className={`${styles.bottom} ${styles.text3}`}>{aend[selectedImage]}</div>
      <button className={styles.btn}>Apply Now</button>
    </div>
    <div className={styles.imgcont}>
      <Image className={styles.img} width={2400} height={1600} src={allImages[selectedImage]} alt="image"/>
    </div>
    </div>
    </div>
  )
}

export default Hero;
