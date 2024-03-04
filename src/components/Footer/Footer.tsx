
const Footer = () => {
    return (
        <footer className={'py-[15px] bg-black'}>
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
                        className={'flex items-center gap-[6px] flex-col'}
                    >
                        <p className={'text-white text-[16px] uppercase'}>г. Казань, ул. бари галеева 3а </p>
                        <a href="tel:+7 (927) 482-09-82" className={'text-white text-[16px] uppercase'}>+7 (927) 482-09-82</a>
                        <a href="mailto:Kuzmakolom@gMAIL.RU" className={'text-white text-[16px] uppercase'}>Kuzmakolom@gMAIL.RU</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;