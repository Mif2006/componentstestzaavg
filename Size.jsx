import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import IMG1 from '../assets/IMG_4804.jpg';
import IMG2 from '../assets/IMG_4806.jpg';

gsap.registerPlugin(ScrollTrigger);

const Size = () => {
  const sizeTrigger = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sizeTrigger.current,
        start: "top top",
        end: "+=100%", // Adjust based on how much scroll space you want
        scrub: true,
        pin: true,
      },
    });

    // First animation: move the layer horizontally into position
    tl.to(".layer", {
      x: 0,
      onComplete: () => {
        gsap.to(".maintext", {
          scale: 0,
          opacity: 0,
        });
        gsap.to(".paragraphs", {
          scale: 0,
          opacity: 0,
        });
        gsap.to('.columns', {
            opacity: 1,
            delay: 1,
            y: -120
        })
      },
      onReverseComplete: () => {
        gsap.to(".maintext", {
          scale: 1,
          opacity: 1,
        });
        gsap.to(".paragraphs", {
          scale: 1,
          opacity: 1,
        });
        gsap.to('.columns', {
            opacity: 0,
            y: 0
        })
      },
    })
    // .to(".layer2", {
    //   x: 0
    // })
    .to(".layer", {
      // Second animation: scale the layer after it reaches position
      scale: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sizeTrigger}
      className="relative bg-zinc flex flex-col gap-12 py-12 items-center min-h-screen bg-slate min-w-screen w-full"
    >
      <h1 className="text-8xl font-semibold z-[4] text-indigo-500 white">Как Узнать Размер?</h1>

      <p className="maintext text-white w-[62vw] pt-6 text-center z-[4] text-[20px]">
        Перед приобретением кольца необходимо знать его точный размер. Это маленькое украшение способно доставить массу хлопот, если окажется мало. А когда изделие немножко велико, оно может незаметно ускользнуть от своего владельца. Поэтому кольцо - такой аксессуар, с размером которого нельзя экспериментировать.
      </p>

      {/* Additional content */}
      <p className="paragraphs text-white w-[65vw] pt-6 text-center z-[4] text-[20px]">
        Самый надежный и верный способ - прийти в любой ювелирный магазин и попросить специалиста измерить ваш палец и подобрать подходящий размер кольца. Как правило, шаг градации в размерах составляет 0,5 – в ювелирных магазинах вы увидите размеры 16, затем 16,5, затем 17 и так далее. Теперь, когда вы будете знать свой размер, вы можете смело отправлять нам заявку на колечко вашей мечты.
        <br/><br/>
        Также существует несколько способов, которыми можно измерить размер пальца для кольца, не покидая пределов квартиры.
        <br/><br/>
        !!! Но важно отметить, что самостоятельное измерение в домашних условиях не дают гарантии в том, что украшение подойдет идеально по размеру. Так как следует учитывать следующие нюансы:
        <ul className="list-disc list-inside">
          <li>не стоит замерять пальцы в жаркие дни</li>
          <li>и также после активных занятий спортом</li>
        </ul>
      </p>

      
        
      {/* Two columns for small paragraphs */}
      <div className="columns opacity-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-8 text-white w-full z-5"> {/* Increased z-index here */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl ">Итак, измеряем размер пальчика. Как это сделать? Мы предлагаем вам два более надежных способа. Выбирайте любой из них:</p>
          <p>
          Если у вас есть уже кольцо, возьмите украшение и обведите карандашом по внутренней стороне. А затем замерьте диаметр получившегося круга.
          </p>
      
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold">Измерение пальца дома</h2>
          <p>
            Измеряйте палец в конце дня, когда он немного расширен. Не рекомендуется проводить замеры после активных физических нагрузок или в холодное время суток.
          </p>
          <p>
            Если у вас есть кольцо, которое хорошо сидит, вы можете измерить его диаметр и обратиться в ювелирный магазин, чтобы узнать точный размер по диаметру.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold">Определение размера кольца</h2>
          <p>
            Чтобы узнать размер кольца, можно воспользоваться специальными кольцемерами, которые доступны в ювелирных магазинах. Каждый ювелир поможет вам подобрать правильный размер.
          </p>
          <p>
            В домашних условиях можно обернуть нитку вокруг пальца, отметив точку пересечения, и измерить длину нитки, чтобы определить диаметр пальца.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold">Измерение пальца дома</h2>
          <p>
            Измеряйте палец в конце дня, когда он немного расширен. Не рекомендуется проводить замеры после активных физических нагрузок или в холодное время суток.
          </p>
          <p>
            Если у вас есть кольцо, которое хорошо сидит, вы можете измерить его диаметр и обратиться в ювелирный магазин, чтобы узнать точный размер по диаметру.
          </p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${IMG1})` }}
        className="border-l-[2px] z-[8] layer absolute left-0 top-0 translate-x-[100%] w-screen h-screen"
      >
        <div className="absolute w-full h-full inset-0 bg-black opacity-20" />
      </div>

      {/* <div
        style={{ backgroundImage: `url(${IMG1})` }}
        className="layer2 z-[10] grayscale absolute left-0 top-0 translate-x-[100%] w-screen h-screen"
      >
        <div className="absolute w-full h-full inset-0 bg-black opacity-20" />
      </div> */}
    </section>
  );
};

export default Size;
