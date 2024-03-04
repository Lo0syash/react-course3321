export default function Header() {
    return (
        <header className={'py-[15px] bg-black'}>
            <div className="container">
                <div
                    className={'flex justify-between items-center'}
                >
                    <div className={'flex items-center gap-5'}>
                        <a href="#" className="logotype"><img src="/logotype.svg" alt="logotype"/></a>
                        <nav>
                            <ul
                                className={'flex items-center gap-2.5'}
                            >
                            <span className={'flex items-center gap-[25px]'}>
                                <hr className={'w-[3px] h-[43px] bg-[#D9D9D9] opacity-40'}/>
                                <li><a href="/" className={'text-white text-[16px] uppercase'}>главная</a></li>
                                <li><a href="/catalog" className={'text-white text-[16px] uppercase'}>каталог</a></li>
                                <hr className={'w-[3px] h-[43px] bg-[#D9D9D9] opacity-40'}/>
                            </span>
                                <li><a href="#" className={'text-white text-[16px] uppercase'}>информация</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div
                        className={'flex items-center gap-[25px]'}
                    >
                        <a href="#"><img src="/assets/icons/search.svg" alt="search"/></a>
                        <a href="#" className={'relative'}>
                            <img src="/assets/icons/basket.svg" alt="basket"/>
                            <span
                                className={'absolute right-[-10px] bg-[#735184] text-white text-[13px] px-[5.5px] rounded-full top-[5px]'}
                            >0</span>
                        </a>
                        <a href="#"><img src="/assets/icons/heart.svg" alt="heart"/></a>
                    </div>
                </div>
            </div>
        </header>
    )
}