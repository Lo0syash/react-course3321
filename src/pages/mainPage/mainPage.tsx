import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import '@fontsource/montserrat-alternates';

export default function MainPage() {
    return (
        <>
            <Header/>
            <main>
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
                    <div>
                        <ul className={'flex items-center gap-20'}>
                            <li>
                                <img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>
                                <h2>Рубашка СВЭГ</h2>
                                <div className={'flex items-center'}>
                                    <a href=""><img src="/assets/icons/heart.svg" alt="heart"/></a>
                                    <a href="#" className={'relative'}>
                                        <img src="/assets/icons/basket.svg" alt="basket"/>
                                        <span
                                            className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] rounded-full top-[5px]'}
                                        >+</span>
                                    </a>
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