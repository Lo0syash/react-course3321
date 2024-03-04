interface Produсt {
    Card: {
        id: number;
        image: string;
        name: string;
        price: string;
    }
}

const ProductCard = ({Card}: Produсt) => {
    return (
        <>
            <li
                className={'max-w-[384px]'}
            >
                {/*<img src="/assets/images/products/tshirt_smile.jpg" alt="twhisrt smile"/>*/}
                <img src={Card.image} alt="twhisrt smile"/>
                <div
                    className={'flex flex-col gap-[13px] px-6 pt-[31px] pb-[35px]'}
                >
                    <h2 className={'text-black text-3xl'}>{Card.name}</h2>
                    <div
                        className={'flex items-center justify-between'}
                    >
                        <p className={'text-black text-3xl'}>{Card.price} ₽</p>
                        <div className={'flex items-center gap-[23px]'}>
                            <a href=""><img src="/assets/icons/heart-black.svg" alt="heart"
                                            className={'w-[56px]'}/></a>
                            <a href="#" className={'relative'}>
                                <img src="/assets/icons/basket-black.svg" alt="basket"
                                     className={'w-[69px] h-[52px]'}/>
                                <span
                                    className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] rounded-full w-[45px] h-[40px] top-[5px] flex items-center justify-center'}
                                ><svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.8125 6.79688V9.51562H0.21875V6.79688H15.8125ZM9.46875 0.15625V16.7188H6.57812V0.15625H9.46875Z"
                                        fill="white"/>
                                </svg></span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default ProductCard;