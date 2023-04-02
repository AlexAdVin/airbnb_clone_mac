import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home(/* { exploreData } */) {

  const exploreData2 = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=1380&t=st=1680031387~exp=1680031987~hmac=9efe2226262b333f4f2e43f6a8d5d35d7ed58c804f402d9a597ddb7ff535bbe7',
      location: 'Copenhagen',
      distance: '4-hour drive'
    },
    {
      id: 2,
      img: '/../public/AirBnBbanner.webp',
      location: 'London',
      distance: '1.5-hour flight'
    },
    {
      id: 3,
      img: '/../public/AirBnBbanner.webp',
      location: 'San Fancisco',
      distance: '16-hour flight'
    },
    {
      id: 4,
      img: '/../public/AirBnBbanner.webp',
      location: 'Bucuresti',
      distance: '4-hour flight'
    },
    {
      id: 5,
      img: '/../public/AirBnBbanner.webp',
      location: 'Budapest',
      distance: '2-hour flight'
    },
    {
      id: 6,
      img: '/../public/AirBnBbanner.webp',
      location: 'Manchester',
      distance: '1-hour flight'
    },
    {
      id: 7,
      img: '/../public/AirBnBbanner.webp',
      location: 'Aalborg',
      distance: '1-hour drive'
    },
    {
      id: 8,
      img: '/../public/AirBnBbanner.webp',
      location: 'Berlin',
      distance: '2-hour flight'
    },
  ]

  const cardsData = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=1380&t=st=1680031387~exp=1680031987~hmac=9efe2226262b333f4f2e43f6a8d5d35d7ed58c804f402d9a597ddb7ff535bbe7',
      title: 'Mountain',
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/big-ben-clock-tower-london-sunset-special-photographic-processing_268835-1109.jpg?w=740&t=st=1680031953~exp=1680032553~hmac=239df47f164699e263985d71b172d517836a88764c1e05f91f2c75c546418b4a',
      title: 'London',
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg?w=1380&t=st=1680031673~exp=1680032273~hmac=1b57767a360fef3f3813e03880d7c25536d615b06e0cafac8cd18a341de31a80',
      title: 'Paris',
    },
    {
      id: 4,
      img: 'https://img.freepik.com/free-photo/buildings-old-city-bucharest_1268-14726.jpg?w=996&t=st=1680032066~exp=1680032666~hmac=b9674a8e9588fc38553ac973ad4fb4576d1ea1e5bc4bb62c1a724a60933f7e48',
      title: 'Bucuresti',
    },
    {
      id: 5,
      img: 'https://img.freepik.com/free-photo/beautiful-sunset-beach-resort-tropics_158538-1749.jpg?w=740&t=st=1680032230~exp=1680032830~hmac=cb8949722f6c8ef1c640b492ff8d9bc6f42e0d4f37efa7ec71e334c67f038bb1',
      title: 'Miami',
    },
    {
      id: 6,
      img: 'https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg?w=1380&t=st=1680031673~exp=1680032273~hmac=1b57767a360fef3f3813e03880d7c25536d615b06e0cafac8cd18a341de31a80',
      title: 'Paris',
    },
    {
      id: 7,
      img: 'https://img.freepik.com/free-photo/colorful-building-facades-along-nyhavn-canal-copenhagen-denmark_181624-23190.jpg?w=1060&t=st=1680031913~exp=1680032513~hmac=bcac0274020138980619e770ba7faf8681078bcc0751af311e2fc61cc9d23e47',
      title: 'Copenhagen',
    },

  ]
  
  return (
    <div className=''>
      <Head>
        <title>AirBnB clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header />
<Banner />

<main className='max-w-7xl mx-auto px-8 sm:px-16'>
  <section className='pt-6'>
    <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>

    {/* Pull data from server - API points*/}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {exploreData2?.map(
        ({ img, location, distance}) => (
          <SmallCard key={img} img={img} location={location} distance={distance} />
        )
      )}
    </div>

  </section>

  <section className='pt-6'>
    <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>

    {/* Pull data from server - API points*/}
    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
      {cardsData.map(
        ({id, img, title}) => (
          <MediumCard key={id} img={img} title={title} />
        )
      )}
    </div>

  </section>


    <LargeCard 
    img={'https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'} 
    title='The greatest outdoors'
    description='Whishlists curated by Airbnb' 
    buttonText='Get inspired'/>

</main>

<Footer />

    </div>
  )
}


/* export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
} */