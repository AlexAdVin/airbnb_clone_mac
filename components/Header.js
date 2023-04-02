import Image from 'next/image'
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { MagnifyingGlassIcon, UsersIcon, UserCircleIcon, GlobeAltIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';

function Header({placeHolder}) {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nrOfGuests, setNrOfGuests] = useState(1);

    const router = useRouter();

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function resetInput() {
        setSearchInput('');
    }

    function search(){
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                nrOfGuests,
            }
        })
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* Left */}
            <div 
            onClick={() => router.push('/')} 
            className='relative flex items-center h-10 cursor-pointer my-auto'
            >
                <Image
                    src="/../public/Airbnb_Logo.svg.png"
                    alt='HeaderImg'
                    fill
                    className="object-contain object-left"

                />
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder={ placeHolder || 'Start your search'} />
                <MagnifyingGlassIcon className='hidden  md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-400'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && <div className='flex flex-col col-span-3 mx-auto mt-5'>
                <DateRangePicker
                    ranges={[selectionRange]}
                    minData={new Date()}
                    rangeColors={['#c50']}
                    onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Nr of guests</h2>
                    <UserIcon className='h-5' />
                    <input value={nrOfGuests} onChange={(e) => setNrOfGuests(e.target.value)} min={1} type='number' className='w-12 pl-2 text-lg outline-none text-red-400' />
                </div>
                <div className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button onClick={search} className='flex-grow text-orange-500'>Search</button>
                </div>
            </div>

            }

        </header>

    )
}

export default Header;