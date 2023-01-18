import image from "../../All_image/studies/prayer-image.png";
export const Prayerdata=[
    {
        head:<><h1 className="my-3 mt-5">Islamic Prayers</h1></>,
        p: <p>Islamic prayers, or Salah, are one of the Five Pillars of Islam and are considered an obligatory practice for all adult Muslims. The prayers are performed five times a day, at specific times throughout the day. There are five prayers in a day and Jummah prayer every Friday. It is called namaz & second pillar of Islam.</p>
    },
    {
        head:"",
        p:<>
        <h4 className="my-3 mt-5 text-success" id="curriculum">The five daily prayers are:</h4>
        <div className="row row-cols-2">
            <p>
           <li style={{listStyle:"auto"}}> Fajr: performed at dawn before sunrise</li>
<li style={{listStyle:"auto"}}> Dhuhr: performed at noon </li>
<li style={{listStyle:"auto"}}> Asr: performed in the afternoon</li>
 <li style={{listStyle:"auto"}}> Maghrib: performed just after sunset</li>
<li style={{listStyle:"auto"}}> Isha: performed at night </li>
<p className="my-3">Each prayer consists of a specific number of units, known as rakahs, which are performed while facing the Kaaba in Mecca. The prayers also include recitation of verses from the Quran, and specific movements such as standing, bowing, and prostrating.</p>
<p>Prayers are an important part of a Muslim's life and are seen as an opportunity to connect with God and seek His guidance and forgiveness. Muslims are encouraged to perform their prayers with humility, concentration, and devotion.</p>
<p>In addition to the five daily prayers, Muslims also perform additional prayers on Friday, during the month of Ramadan, and on various other occasions.</p>
            </p>
            <div className="text-center"><img src={image} alt="prayer" /></div>
        </div>
        </>
    }
]