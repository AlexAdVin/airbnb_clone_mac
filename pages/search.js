import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Mapview from '../components/Mapview';

function Search(/* { searchResults } */) {

    const router = useRouter();

    const { location, startDate, endDate, nrOfGuests } = router.query;

    const fstartDate = startDate ? (format(new Date(startDate), 'dd MMM yy')):(format(new Date(), 'dd MMM yy'));
    const fendDate = endDate ? (format(new Date(endDate), 'dd MMM yy')) : (format(new Date(), 'dd MMM yy'));
    const range = `${fstartDate} - ${fendDate}`

    const searchResults2 = [
        {
            id:1,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "Stay at this spacious Edwardian House",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.73,
            "price": "£30 / night",
            "total": "£117 total",
            "long": -0.0022275,
            "lat": 51.5421655
        },
        {
            id:2,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "Independant luxury studio apartment",
            "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
            "star": 4.3,
            "price": "£40 / night",
            "total": "£157 total",
            "long": -0.095091,
            "lat": 51.48695
        },
        {
            id:3,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "London Studio Apartments",
            "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
            "star": 3.8,
            "price": "£35 / night",
            "total": "£207 total",
            "long": -0.135638,
            "lat": 51.521916
        },
        {
            id:4,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "30 mins to Oxford Street, Excel London",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.1,
            "price": "£55 / night",
            "total": "£320 total",
            "long": -0.069961,
            "lat": 51.472618
        },
        {
            id:5,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "Spacious Peaceful Modern Bedroom",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
            "star": 5.0,
            "price": "£60 / night",
            "total": "£450 total",
            "long": -0.08472,
            "lat": 51.510794
        },
        {
            id:6,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "The Blue Room In London",
            "description": "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
            "star": 4.23,
            "price": "£65 / night",
            "total": "£480 total",
            "long": -0.094116,
            "lat": 51.51401
        },
        {
            id:7,
            "img": "https://img.freepik.com/free-photo/modern-living-room-style_53876-144814.jpg?w=1380&t=st=1680265942~exp=1680266542~hmac=afed044faed7dbc8de2fe72405d8cc839d094d0e6860b77bef5099155e3458aa",
            "location": "Private room in center of London",
            "title": "5 Star Luxury Apartment",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 3.85,
            "price": "£90 / night",
            "total": "£650 total",
            "long": -0.109889,
            "lat": 51.521245
        }
    ]

  return (
    <div className=' bg-white' >
        <Header placeHolder={`${location} | ${range} | ${nrOfGuests}`} />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range} - for {nrOfGuests} number of guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More filters</p>
                </div>

            <div className='flex flex-col'>
                {searchResults2?.map(({id, img, location, title, description, star, price, total}) => (
                    <InfoCard 
                        key={id}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                    />
                ))}                
            </div>

            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Mapview searchResults2={searchResults2} />
            </section>

        </main>
        <Footer />
    </div>
  )
}

export default Search

/* export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
    return { props: {searchResults} }
} */