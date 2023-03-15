import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

import { Container } from './styles';
import { PackageIcon } from '../../assets/PackageIcon';
import { CCIcon } from '../../assets/CCIcon';
import { ShirtIcon } from '../../assets/ShirtIcon';

const slides = [
  {
    id: 1,
    title: "Frete Grátis para todo o Brasil.",
    icon: <PackageIcon />
  },
  {
    id: 2,
    title: "Compra segura. Seus dados estão a salvo.",
    icon: <CCIcon />
  },
  {
    id: 3,
    title: "Peças apartir de R$ 99,90. Veja mais.",
    icon: <ShirtIcon />
  },
]

export function PitchBar() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map(slide => (
          <SwiperSlide className='slide' key={slide.id}>{slide.icon}{slide.title}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}