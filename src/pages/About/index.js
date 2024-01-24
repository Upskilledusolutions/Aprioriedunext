import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { TiMessages } from "react-icons/ti";


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/16.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
          <div className={styles.heading1}>About Us</div>
          <div className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className={styles.middle5}>
        <div className={styles.left5}>
          <div className={styles.heading5}>OUR PHILOSOPHY</div>
          <div className={styles.text6}>Planning, Consistency, and focus<br/>
          outshine talent... Everytime</div>
        </div>
        <div className={styles.right5}>
          <Image className={styles.img5} src={'/content/14.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
      <div className={styles.middle6}>
        <div className={styles.left6}>
          <div className={styles.heading5}>OUR IDEOLOGY</div>
          <div className={styles.text6}>To educate curious minds <br/>
          about limitless possibilities</div>
        </div>
        <div className={styles.right5}>
          <Image className={styles.img5} src={'/content/23.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
      <div className={styles.middle5}>
        <div className={styles.left5}>
          <div className={styles.heading5}>OUR GOAL</div>
          <div className={styles.text6}>Provide high-quality learning <br/>
          opportunities for students</div>
        </div>
        <div className={styles.right5}>
          <Image className={styles.img5} src={'/content/15.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
      <div className={styles.new}>
      <div className={styles.title}>WHY CHOOSE US</div>
      <div className={styles.flex10}>
      <div className={styles.point}>
            <div className={styles.iconcontainer}><IoMdCheckmarkCircleOutline className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Quick Results</div>
              <div className={styles.btm}>Get quick and guaranteed results with the best teachers.</div>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.iconcontainer1}><MdAttachMoney className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Save Money</div>
              <div className={styles.btm}>You can save a lot of money on our lessons & resources.</div>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.iconcontainer2}><TiMessages className={styles.icon}/></div>
            <div className={styles.textcontainer1}>
              <div className={styles.top}>Get Support</div>
              <div className={styles.btm}>Our staff and teachers are always ready to help you.</div>
            </div>
          </div>
      </div>

      </div>

    </div>
  )
}