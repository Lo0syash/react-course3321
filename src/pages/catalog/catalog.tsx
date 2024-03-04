import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const Catalog = () => {
    return (
        <>
            <Header />
            <main>
                <div className={'container'}>
                    <div className={'mt-[23px]'}>
                        <ul
                            className={'flex items-center gap-[11px]'}
                        >
                            <li><a href="/" className={'text-xl text-black'}>Главная</a></li>
                            <p className={'text-xl text-black'}>\</p>
                            <li><a href="/catalog" className={'text-xl text-black'}>Каталог</a></li>
                        </ul>
                    </div>
                    <div className={'flex justify-center items-center mb-[44px]'}>
                        <ul
                            className={'flex items-center gap-5'}
                        >
                            <li><a href="#" className={'catalog_filter active'}>Всё</a></li>
                            <li><a href="#" className={'catalog_filter'}>Топ</a></li>
                            <li><a href="#" className={'catalog_filter'}>Низ</a></li>
                            <li><a href="#" className={'catalog_filter'}>Обувь</a></li>
                        </ul>
                    </div>
                    <div>
                        <div
                            className={'my-20'}
                        >
                            <ul className={'catalog-list'}>
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/black_shirt.jpg" alt="black shirt"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/twhirt_sad.jpg" alt="twhirt sad"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/black_shirt.jpg" alt="black shirt"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/twhirt_sad.jpg" alt="twhirt sad"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/black_shirt.jpg" alt="black shirt"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                                <li className={'max-w-[384px]'}>
                                    <img src="/assets/images/products/twhirt_sad.jpg" alt="twhirt sad"/>
                                    <div
                                        className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                                    >
                                        <h2 className={'text-black text-3xl'}>Рубашка СВЭГ</h2>
                                        <div
                                            className={'flex items-center justify-between'}
                                        >
                                            <p className={'text-black text-3xl'}>9999 ₽</p>
                                            <div className={'flex items-center gap-[23px]'}>
                                                <a href=""><img src="/assets/icons/heart-black.svg" alt="heart-black"
                                                                className={'w-[56px]'}/></a>
                                                <a href="#" className={'relative'}>
                                                    <img src="/assets/icons/basket-black.svg" alt="basket-black"
                                                         className={'w-[69px] h-[52px]'}/>
                                                    <span
                                                        className={'absolute right-[-10px] bg-[#735184] text-black text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
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
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Catalog;