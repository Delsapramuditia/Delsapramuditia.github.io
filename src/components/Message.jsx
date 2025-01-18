import React from 'react'
import chat1 from '../assets/chat1.jpg'
import chat2 from '../assets/chat2.jpg'
import chat3 from '../assets/chat3.jpg'
import chat6 from '../assets/chat6.jpg'
import chat7 from '../assets/chat7.jpg'
import chat8 from '../assets/chat8.jpg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: chat1, title: 'November 11, 2023', description: "Ini pertama kali kamu dm aku haha lucu ya basa basinya malah nanyain ridzkal, tapi gapapa terimakasi ridzkal sudah menjadi topik untuk awal chat ini wkwkw"},   
    { Image: chat2, title: 'Desember, 2023', description: "Semenjak di dm sama kamu jadi sering buat ngajakin main valo bareng hahah karena aku gatau lagi mau chat apa selain ngajak main valo"},
    { Image: chat3, title: 'Desember 30, 2023', description: "Pas kita lagi sama-sama gabut terus nemu ini game buat dimainin. Nama gamenya Unsolved Case, dulu kita lagi begadang terus main ini seru bgt ya tau-tau sudah pagi wkwkw"},
    { Image: chat6, title: 'Desember, 2023', description: "Disini aku udah suka sih hehe makanya caper bgt mau ngajak pergi bareng pake alesan bawa-bawa adik haha maaf adik :D yaa walaupun kecewa sudah memberanikan buat ngajak tapi ditolak. Note : Taoi ujung-ujungnya jadi kok :p"},
    { Image: chat7, title: 'Januari, 2024', description: "Another part of caper, ya maklum lah cegil ini amat sangat try hard ngejar cowo yang satu ini"},
    { Image: chat8, title: 'Februari 14, 2024', description: "Yeaa, finally cegil ini bisa debut di sg doi as a him gf omggg wkwkwk senang sekalii, semoga bisa seterusnya sama-sama ya sayang <333"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Messages
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

export default Message