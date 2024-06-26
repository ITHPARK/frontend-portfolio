import React, {useState} from 'react'
import Modal from './Modal';
import {Link} from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {projectData} from '../lib/data'
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";


const Project = () => {

  //
  const [modalStatus, setModalStatus] = useState(false);

  //프로젝트 리스트 객체
  const [info, setInfo] = useState([
    {
      id: "netflix-clone-coding",
      title: "리액트 넷플릭스 클론코딩",
      text: {
        skill: ['REACT', 'SASS'],
        word: [
                "The Movie DB Api를 받아 axios를 활용하여 비동기 통신으로 데이터를 받아 각종 영화 정보를 나타내었습니다.", 
                "SASS를 활용하여 레이아웃 디자인과 각 디바이스를 지원하는 반응형 작업을 진행하였습니다.",
                "Swiper플러그인을 이용하여 한 화면에 일정개수의 영화정보를 나타내고 스크롤을 할수있도록 구현했습니다.",
                "api로 받은 데이터를 활용하여 각 영화 클릭시 상세정보와 평점, 플레이 클릭 시 영화 예고편 확인 가능합니다.", 
                "쿼리스트링 검색어를 활용하여 다시 비동기 요청을 보낸 후 검색어 관련 영화를 제공하는 검색기능을 구현했습니다.", 
              ] 
      },
      url: "https://react-netflix-65fce.web.app/",
      img: "images/netflix.JPG",
      img2: "images/icons/ico_netflix.png",
      git: "https://github.com/ITHPARK/Nexflix-App"
    },
    {
      id: "react-recoil-app",
      title: "Recoil을 활용한 카페 관리자 페이지",
      text: {   
        skill: ['REACT', 'RECOIL'],
        word: [
                "jsonplaceholder post api를 활용한 비동기 요청으로 데이터를 받아 카페 글 리스트를 만들었습니다.", 
                "데이터로 내려받은 전체 글 개수에 따라 페이징을 한 페이지에 10개의 글을 노출하도록 구현하였습니다.",
                "FACEBOOK에서 출시한 전역 상태관리 라이브러리 RECOIL을 활용하여 관리자 페이지에서 글의 비공개 제목 수정이 가능합니다.",
              ] 
      },
      url: "https://ithpark.github.io/react-recoil-app/",
      img: "images/Recoil.JPG",
      img2: "images/icons/ico_recoil.png",
      git: "https://github.com/ITHPARK/react-recoil-app"
    },
    {
      id: "react-redux-app",
      title: "Redux을 활용한 장바구니 페이지",
      text: {
        skill: ['REACT', 'REDUX'],
        word: [
                "전역상태관리 라이브러리 redux를 이용하여 장바구니 상품 리스트를 만들었습니다.", 
                "reducer 함수를 생성하여 상품을 담고 장바구니로 이동하여 상품의 수량과 삭제를 설정하고 총 결제금액까지 나타내도록 구현하였습니다.",
              ] 
      },
      url: "https://ithpark.github.io/react-redux-app/",
      img: "images/Redux.JPG",
      img2: "images/icons/ico_redux.png",
      git: "https://github.com/ITHPARK/react-redux-app"
    },
  ]);

  //클릭한 프로젝트 객체를 모달에 전달하기 위한 state
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  //모달창 열기
  const handleModalOpen = (item) => {
    setModalStatus(true);

    //모달에 전달할 객체 정보를 할당
    setSelectedProjectId(item);
  }

  //모달창 닫기
  const handleModalClose = () => {
    setModalStatus(false);
  }



  return (
    <div className="article project">
        <div className='article_inner'>
          <h2 className='white'>
            PROJECT
          </h2>

          <div className='content'>
            <Swiper
              className='project_swiper'
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={                
                { 
                  el : '.project-pagination',
                  clickable: true
                 }
              }
              
            > 

              {
                projectData.map((item, idx) => {
                  return(
                    <SwiperSlide className='project_wrapper' key={idx}>
                      <div className='project_box'>
                        <h3>{item.title}</h3>
                        <div className='img_box'>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                              prevEl: '.inner-swiper-button-prev',
                              nextEl: '.inner-swiper-button-next',
                            }}
                            pagination={                
                              { 
                                el : '.img-pagination',
                                clickable: true
                               }
                            }
                          > 
                            {item.img.map((img, idx) => {
                              return(
                                <SwiperSlide>
                                  <img src={img} alt={`이미지${idx}`}/>
                                </SwiperSlide>
                              )
                            })}
                            <div className='swiper-navigation img-navigation'>
                              <button className='inner-swiper-button-prev'>
                                <IoIosArrowBack size={40} fill='#007aff'/>
                              </button>
                              
                              <button className='inner-swiper-button-next'>
                                <IoIosArrowForward  size={40} fill='#007aff'/>
                              </button>
                            </div>
                            <div className='swiper-pagination img-pagination'>

                            </div>
                          </Swiper>
                        </div>
                        <div className='use_skills'>
                            {
                              item.useSkill.map((sk) => {
                                return (
                                  <div className='skill_box'>
                                    <span>{sk[0]}</span>
                                    <span>{sk[1]}</span>
                                  </div>
                                )
                              })
                            }
                        </div>
                        <ul className='info'>
                            {
                              item.info.map((text, idx) => {
                                return(
                                  <li key={idx}>
                                    <p>{text}</p>
                                  </li>
                                )
                              })
                            }
                        </ul>
                        <div className='url'>
                            <p>URL : <Link to={item.url} target="_blank">{item.url}</Link></p>
                            <p>GIT : <Link to={item.git} target="_blank">{item.git}</Link></p>
                        </div>
                        
                      </div>
                    </SwiperSlide>
                  )
                })
              }

              <div className='swiper-navigation project-navigation'>
                <button className='swiper-button-prev'>
                   <FaArrowLeft size="100%" />
                </button>
                
                <button className='swiper-button-next'>
                   <FaArrowRight size="100%" />
                </button>
              </div>   

              <div className='swiper-pagination project-pagination'></div>        
            </Swiper>
          </div>  
        </div>
        
      </div>
  )
}

export default Project