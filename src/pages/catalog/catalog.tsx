import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import ProductData from "../../components/ProductCard/ProductData.tsx";

const Catalog = () => {
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
                                {ProductData.map((product) => (
                                    <ProductCard Card={product}/>
                                ))}
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