import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const CatalogItem = () => {
    return (
        <>
            <Header/>
            <main>
                <div className={'container'}>
                    <div className={'mt-[23px]'}>
                        <ul
                            className={'flex items-center gap-[11px]'}
                        >
                            <li><a href="/" className={'text-xl text-black'}>Главная</a></li>
                            <p className={'text-xl text-black'}>\</p>
                            <li><a href="/catalog" className={'text-xl text-black'}>Каталог</a></li>
                            <p className={'text-xl text-black'}>\</p>
                            <li><a href="#" className={'text-xl text-black'}>Рубашка СВЭГ</a></li>
                        </ul>
                    </div>
                    <div className={'my-[23px] flex justify-between'}>
                        <div
                            className={'flex flex-wrap justify-between max-w-[1053px]'}
                        >
                            <img src="/assets/images/products/black_shirt.jpg" alt="" className={'w-[508px]'}/>
                            <img src="/assets/images/products/black_shirt.jpg" alt="" className={'w-[508px]'}/>
                            <img src="/assets/images/products/black_shirt.jpg" alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                            <img src="/assets/images/products/black_shirt.jpg" alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                            <img src="/assets/images/products/black_shirt.jpg" alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                        </div>
                        <div>
                            <div>
                                <h1
                                    className={'text-black text-4xl'}
                                >Рубашка СВЭГ</h1>
                                <p
                                    className={'mt-2 text-4xl text-[#735184]'}
                                >9999 ₽</p>
                            </div>
                            <div
                                className={'flex flex-col gap-[31px] mt-[53px]'}
                            >
                                <select name="" id=""
                                    className={'w-[445px] h-[75px] bg-black text-white text-4xl text-center'}
                                >
                                    <option value="" selected>Черный</option>
                                    <option value="">Белый</option>
                                    <option value="">Красный</option>
                                </select>
                                <select name="" id=""
                                        className={'w-[445px] h-[75px] bg-black text-white text-4xl text-center'}
                                >
                                    <option value="" selected>XL</option>
                                    <option value="">L</option>
                                    <option value="">M</option>
                                </select>
                                <div
                                    className={'mt-[12px] flex items-center gap-[13px]'}
                                >
                                    <a href=""
                                       className={'px-[12px] py-[29px] bg-[#735184] text-white text-2xl uppercase'}
                                    >Добавить в корзину</a>
                                    <a href="#"
                                       className={'py-[16px] px-[19px] bg-[#735184]'}
                                    ><img src="/assets/icons/heart.svg" alt="heart"
                                          className={'w-[65px] h-[57px]'}/></a>
                                </div>
                                <p
                                    className={'max-w-[445px] text-2xl text-black mt-[12px]'}
                                >
                                    В большинстве случаев мужчины для деловой и повседневной жизни выбирают рубашки
                                    спокойных оттенков и носят их по всем классическим правилам, где рубашка гораздо
                                    светлее пиджака и брюк. При таком подходе выбор цвета сорочки останавливается на
                                    белом, цвета шампань или голубом.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default CatalogItem;