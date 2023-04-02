import React, { useCallback, useMemo, useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Mapview({searchResults2}) {

    const [selectedPost, setSelectedPost] = useState({});


      // Transform the searchResults2 object into other object
/*       const coordinates = searchResults2.map((result) => ({
        longitude: result.long,
        latitude: result.lat
      })) */


      const coordinates = useMemo(() => (
        searchResults2.map((result) => ({
            longitude: result.long,
            latitude: result.lat
        })
        )
      ), [searchResults2]);

    // Center of locations lat & lng
    const center = getCenter(coordinates);

    const initialViewState = {
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 15,
      }
    const [viewState, setViewState] = useState( initialViewState );

/*     const markers = useMemo(() => searchResults2.map(post => (
        <Marker key={post.id}
          longitude={post.long}
          latitude={post.lat}
          offsetLeft={-20}
          offsetRight={-10}
          >
            <p onClick={() => setSelectedPost(result)}
                className='cursor-pointer text-2xl animate-bounce'
            >📌Marker</p>
        </Marker>)
      ), [searchResults2]);

      console.log(selectedPost) */

  return (
    <div className='relative'>
  <Map
    reuseMaps
    {...viewState}
    onMove={evt => setViewState(evt.viewState)}
    mapStyle="mapbox://styles/alex182/clfxh2wdc002d01t70f5fjkr3"
    mapboxAccessToken={process.env.mapbox_key}
  >
{/*     {markers} */}

{searchResults2.map((post) => (
    <div key={post.id}>
        <Marker key={post.id}
        longitude={post.long}
        latitude={post.lat}
        offsetLeft={-20}
        offsetRight={-10}
        >
            <p
            role='img'
            onClick={() => setSelectedPost(post)}
            className='cursor-pointer text-2xl animate-bounce'
            aria-label='push-pin'
            >📌Marker</p>
        </Marker>

        {selectedPost.long === post.long ? (
            <Popup
            onClose={()=> setSelectedPost({})}
            closeOnClick={true}
            latitude={post.lat}
            longitude={post.long}
            >{post.title}</Popup>
        ):(false)}
    </div>
))}
  </Map>      
    </div>

    
  )
}

export default Mapview
