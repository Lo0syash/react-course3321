import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ProductData from "../../components/ProductCard/ProductData.tsx";
import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const CatalogItem = () => {
    const {id} = useParams<{id:string}>()
    const navigate = useNavigate();
    useEffect(()=>{
        if (!id) {
            navigate('/');
        }
    })

    const searchData = ProductData.filter(product => {
        return product.id.toString() === id;
    });

    return (
        <>
            <Header/>
            <main>
                <div className={'container'}>
                    <div className={'mt-[23px]'}>
                        <ul
                            className={'flex items-center gap-[11px]'}
                        >
                            <li><Link to="/" className={'text-xl text-black'}>Главная</Link></li>
                            <p className={'text-xl text-black'}>\</p>
                            <li><Link to="/catalog" className={'text-xl text-black'}>Каталог</Link></li>
                            <p className={'text-xl text-black'}>\</p>
                            <li><Link to="#" className={'text-xl text-black'}>{searchData[0].name}</Link></li>
                        </ul>
                    </div>
                    <div className={'my-[23px] flex justify-between'}>
                        <div
                            className={'flex flex-wrap justify-between max-w-[1053px]'}
                        >
                            <img src={searchData[0].image} alt="" className={'w-[508px]'}/>
                            <img src={searchData[0].image} alt="" className={'w-[508px]'}/>
                            <img src={searchData[0].image} alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                            <img src={searchData[0].image} alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                            <img src={searchData[0].image} alt=""
                                 className={'w-[340px] mt-[23px]'}/>
                        </div>
                        <div>
                            <div>
                                <h1
                                    className={'text-black text-4xl'}
                                >{searchData[0].name}</h1>
                                <p
                                    className={'mt-2 text-4xl text-[#735184]'}
                                >{searchData[0].price} ₽</p>
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
                                    <Link to="#"
                                       className={'px-[12px] py-[29px] bg-[#735184] text-white text-2xl uppercase'}
                                    >Добавить в корзину</Link>
                                    <Link to="#"
                                       className={'py-[16px] px-[19px] bg-[#735184]'}
                                    ><img src="/assets/icons/heart.svg" alt="heart"
                                          className={'w-[65px] h-[57px]'}/></Link>
                                </div>
                                <p
                                    className={'max-w-[445px] text-2xl text-black mt-[12px]'}
                                >
                                    {searchData[0].description}
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