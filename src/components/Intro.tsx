import { IonButton, IonText } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import IntroSvg1 from '../assets/intro/1.svg';
import IntroSvg2 from '../assets/intro/2.svg';
import IntroSvg3 from '../assets/intro/3.svg';
import './Intro.css';

interface ContainerProps {
	onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
	const swiper = useSwiper();
	return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
	return (
		<Swiper>
			<SwiperSlide>
				<img src={IntroSvg1} alt="Intro 1" />
				<IonText>
					<h3>Build awesome apps with Ionic UI components!</h3>
				</IonText>
				<SwiperButtonNext>Next</SwiperButtonNext>
			</SwiperSlide>

			<SwiperSlide>
				<img src={IntroSvg2} alt="Intro 2" />
				<IonText>
					<h3>Create powerful native apps with Capacitor.</h3>
				</IonText>
				<SwiperButtonNext>Next</SwiperButtonNext>
			</SwiperSlide>

			<SwiperSlide>
				<img src={IntroSvg3} alt="Intro 3" />
				<IonText>
					<h3>Enjoy learning to code!</h3>
				</IonText>
				<IonButton onClick={() => onFinish()}>Finish</IonButton>
			</SwiperSlide>
		</Swiper>
	);
};

export default Intro;