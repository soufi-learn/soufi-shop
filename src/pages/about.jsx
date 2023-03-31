import ShopWomen from '../assets/shopping-women.png';
import '../styles/about.css';

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='mb-4 font-bold text-center text-slate-700'>About Us</h2>
            <div className='block lg:flex'>
                <section className='w-full lg:mt-10 about-section lg:w-1/2'>
                    <p className='mb-6'>Soufi Shop is an online store that focuses on selling digital products, household items, personal accessories, and fashion. This online store aims to provide an easy and convenient shopping experience for its customers with a simple and understandable website layout.
                    </p>

                    <p className='mb-6'>
                        Soufi Shop offers its products at competitive and reasonable prices and covers a wide range of products according to different customer needs. These include electronic products such as TVs, mobile phones, and accessories, digital cameras, household appliances such as refrigerators, washing machines, dishwashers, and daily tools.
                    </p>

                    <p className='mb-6'>
                        One of Soufi Shop's prominent features is providing high-quality products and well-known brand names. This store is in constant contact with reputable and credible brands and offers products that are of high quality and reasonable prices to its customers.
                    </p>

                    <p className='mb-6'>
                        Furthermore, Soufi Shop offers strong after-sales services to its customers and resolves any problems with purchasing and using products in the shortest possible time.
                    </p>

                </section>

                <section className='hidden w-1/2 about-section about-section-img lg:block'>
                    <img src={ShopWomen} alt='shopping women' />
                </section>
            </div>
        </div>
    );
}

export default About;