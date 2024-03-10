import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
// import ProductData from "../../components/ProductCard/ProductData.tsx";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    images: string
}

const Catalog = () => {

    const [search, setSearch] = useState('')
    const [dateProduct, setDateProduct] = useState<Product[]>([])
    const [stateSearch, setStateSearch] = useState(false)

    const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        if (e.target.value.length > 3) {
            setStateSearch(true)
        } else {
            setStateSearch(false)
        }
    }

    useEffect(() => {
        const dateFunction = async () => {
            try {
                const response = await axios.post('http://localhost:5051/dateProduct')
                setDateProduct(response.data.message)
            } catch (error) {
                console.log('Error: ' + error)
            }
        }
        dateFunction()
    }, [])


    return (
        <>
        <Header/>
        <main>
            <div className={'container'}>
                <div className={'mt-[23px]'}>
                    <ul
                        className={'flex items-center gap-[11px]'}
                    >
                        <li><Link to={'/'} className={'text-xl text-black'}>Главная</Link></li>
                        <p className={'text-xl text-black'}>\</p>
                        <li><Link to={'/catalog'} className={'text-xl text-black'}>Каталог</Link></li>
                    </ul>
                </div>
                <div className={'flex justify-center items-center mb-[44px]'}>
                    <ul
                        className={'flex items-center gap-5'}
                    >
                        <li><Link to="#" className={'catalog_filter active'}>Всё</Link></li>
                        <li><Link to="#" className={'catalog_filter'}>Топ</Link></li>
                        <li><Link to="#" className={'catalog_filter'}>Низ</Link></li>
                        <li><Link to="#" className={'catalog_filter'}>Обувь</Link></li>
                    </ul>
                </div>
                <div>
                    <div
                        className={'my-20'}
                    >
                        <div className={'my-10'}>
                            <input
                                onChange={handleSearchInput}
                                className={'border-2 border-[#735184] rounded w-full h-12 pl-3 outline-none'}
                                type="text"
                                placeholder={'Поиск товара'}
                                value={search}
                            />
                        </div>
                        <ul className={'catalog-list'}>
                            {
                                dateProduct.length === 0 ? (
                                    <div>Loading...</div>
                                ) : (
                                    stateSearch ?
                                    (
                                        dateProduct.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length > 0 ?
                                        dateProduct.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
                                            <ProductCard product={product} key={product.id} />
                                        )) : `По запросу ${search} ничего не найдено`
                                    ) :
                                        dateProduct.map((product) => (<ProductCard product={product} key={product.id} />))
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    <Footer/>
</>
)
    ;
};

export default Catalog;