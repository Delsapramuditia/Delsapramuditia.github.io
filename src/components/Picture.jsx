import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: img2, title: 'April 14, 2024', description: "Ini pertama kali ke warpat dapet pemandangan yang cantik bgt sambil ditemani oleh mas mas jawa idaman akuuu eheheh :p"},   
    { Image: img3, title: 'April 27, 2024', description: "Bingung mau jalan kemana akhirnya berangkat lah ke cafe Kedai Kopi Semangat, lumayan jauh sih dari rumahku fyi pegel pantat saya bangg wkwkwk"},
    { Image: img4, title: 'Mei 1, 2024', description: "Pertama kali kita ke Blok M bareng. Seruu!!! aku jadi tau tempat-tempat yang belum pernah aku datengin"},
    { Image: img5, title: 'Mei 18, 2024', description: "Kali kedua ps bareng di warung garasi, kali ini sudah tidak canggung buat foto bareng ya dibanding pertama kali kesini XD"},
    { Image: img6, title: 'Mei 26, 2024', description: "Konser date ceritanya. Konser pertama yang kita tonton bareng itu Pesta Semalam Minggu di Meikarta. Tentu nya gs nya ada guyonwaton dan ndx karena aku sangat pengen sekali nonton itu haha"},
    { Image: img7, title: 'Juni 23, 2024', description: "Pertama kali aku naik LRT karena diajakin sm kamu XD, biasanya kita naik MRT atau KRL kan haha. Ini kita baru balik kuliah langsung cabut~~"},
    { Image: img8, title: 'Oktober 19, 2024', description: "That's My Birthday yuhuu~~ pas itu aku pengen naik bianglala aeon, yaa tetap kamu turutin walupun ini mahal ges udah gitu perjalanannya jauh sekali :'' tapi aku tetep seneng bgt hari itu :3"},
    { Image: img9, title: 'November 27, 2024', description: "Aku pengen bgt ke Bandung terus foto bedua di jalan Braga bareng kamu dan yaa terimakasi sayangkuu karena sudah selalu menuruti permintaan tuan putri mu ini"},
    { Image: img10, title: 'Desember 31, 2024', description: "'mas aku mau liat hanabi' gassss berangkat ke Bundaran HI, dan siapa sangka disana seperti lautan manusia sampe susah gerak haha terus kita baliknya jalan kaki. Maaf ya selalu merepotkan, sekali lagi terimakasi ya sayang<3"},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture