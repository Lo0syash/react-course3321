import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import '@fontsource/montserrat-alternates';

export default function MainPage() {
    return (
        <>
            <Header/>
            <main
                className={'bg-black'}
            >
                <div
                    className={'w-full h-[709px]'}
                    style={{
                        backgroundImage: 'url(/assets/images/banner-image.jpg)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "right top"
                    }}
                >
                    <div className="container pt-[139px]">
                        <div
                            className={'flex flex-col gap-12 justify-center items-center'}
                        >
                            <img src="/logotype.svg" alt="logotype" className={'w-[687px]'}/>
                            <p className={'text-white text-[32px]'}>БРЕНД ОДЕЖДЫ</p>
                            <a href="#"
                               className={'w-[390px] h-24 flex justify-center items-center text-white text-2xl uppercase bg-[#735184] rounded-[20px]'}>Перейти
                                в категории</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={'my-20'}
                    >
                        <ul className={'flex items-center justify-center gap-20'}>
                            <li>
                                <img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>
                                <div
                                    className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                >
                                    <h2 className={'text-white text-3xl'}>Рубашка СВЭГ</h2>
                                    <div
                                        className={'flex items-center justify-between'}
                                    >
                                        <p className={'text-white text-3xl'}>9999 ₽</p>
                                        <div className={'flex items-center gap-[23px]'}>
                                            <a href=""><img src="/assets/icons/heart.svg" alt="heart"
                                                            className={'w-[56px]'}/></a>
                                            <a href="#" className={'relative'}>
                                                <img src="/assets/icons/basket.svg" alt="basket"
                                                     className={'w-[69px] h-[52px]'}/>
                                                <span
                                                    className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
                                                >
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.8125 6.79688V9.51562H0.21875V6.79688H15.8125ZM9.46875 0.15625V16.7188H6.57812V0.15625H9.46875Z"
                                                            fill="white"/>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/assets/images/products/black_shirt.jpg" alt="black shirt"/>
                                <div
                                    className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                >
                                    <h2 className={'text-white text-3xl'}>Рубашка СВЭГ</h2>
                                    <div
                                        className={'flex items-center justify-between'}
                                    >
                                        <p className={'text-white text-3xl'}>9999 ₽</p>
                                        <div className={'flex items-center gap-[23px]'}>
                                            <a href=""><img src="/assets/icons/heart.svg" alt="heart"
                                                            className={'w-[56px]'}/></a>
                                            <a href="#" className={'relative'}>
                                                <img src="/assets/icons/basket.svg" alt="basket"
                                                     className={'w-[69px] h-[52px]'}/>
                                                <span
                                                    className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
                                                >
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.8125 6.79688V9.51562H0.21875V6.79688H15.8125ZM9.46875 0.15625V16.7188H6.57812V0.15625H9.46875Z"
                                                            fill="white"/>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/assets/images/products/twhirt_sad.jpg" alt="twhirt sad"/>
                                <div
                                    className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                >
                                    <h2 className={'text-white text-3xl'}>Рубашка СВЭГ</h2>
                                    <div
                                        className={'flex items-center justify-between'}
                                    >
                                        <p className={'text-white text-3xl'}>9999 ₽</p>
                                        <div className={'flex items-center gap-[23px]'}>
                                            <a href=""><img src="/assets/icons/heart.svg" alt="heart"
                                                            className={'w-[56px]'}/></a>
                                            <a href="#" className={'relative'}>
                                                <img src="/assets/icons/basket.svg" alt="basket"
                                                     className={'w-[69px] h-[52px]'}/>
                                                <span
                                                    className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
                                                >
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.8125 6.79688V9.51562H0.21875V6.79688H15.8125ZM9.46875 0.15625V16.7188H6.57812V0.15625H9.46875Z"
                                                            fill="white"/>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <ul
                            className={'flex'}
                        >
                            <li
                                className={'w-[500px] h-[679px] relative'}
                                style={{
                                    backgroundImage: 'url(/assets/images/products/1f92c0ebf22f0063b4adfcd1b55db423.jpg)',
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "right top"
                                }}
                            >
                                <div
                                    className={'absolute bottom-0 w-[503px] h-[115px] bg-[rgba(0,0,0,.52)] flex justify-center items-center'}>
                                    <p
                                        className={'text-white text-3xl'}
                                    >Весна</p>
                                </div>
                            </li>
                            <li
                                className={'w-[458px] h-[679px] relative'}
                                style={{
                                    backgroundImage: 'url(/assets/images/products/fcaf2e1bac940c436e2a99f9fe90215b.jpg)',
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "right top"
                                }}
                            >
                                <div
                                    className={'absolute bottom-0 w-[503px] h-[115px] bg-[rgba(0,0,0,.52)] flex justify-center items-center'}>
                                    <p
                                        className={'text-white text-3xl'}
                                    >Мужчинам</p>
                                </div>
                            </li>
                            <li
                                className={'w-[458px] h-[679px] relative'}
                                style={{
                                    backgroundImage: 'url(/assets/images/products/MaliaObamaIsaNewMenswear.jpg)',
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "right top"
                                }}
                            >
                                <div
                                    className={'absolute bottom-0 w-[503px] h-[115px] bg-[rgba(0,0,0,.52)] flex justify-center items-center'}>
                                    <p
                                        className={'text-white text-3xl'}
                                    >Весна</p>
                                </div>
                            </li>
                            <li
                                className={'w-[500px] h-[679px] relative'}
                                style={{
                                    backgroundImage: 'url(/assets/images/products/a15d489f9d1da8ae543b03077d141b8e.jpg)',
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "right top"
                                }}
                            >
                                <div
                                    className={'absolute bottom-0 w-[503px] h-[115px] bg-[rgba(0,0,0,.52)] flex justify-center items-center'}>
                                    <p
                                        className={'text-white text-3xl'}
                                    >Обувь</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}