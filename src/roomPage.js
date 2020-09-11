import axios from "axios";
import Room from "./Room";
import React from 'react';
// import React, {useEffect} from 'react';


const roomPage = ({route, navigation}) => {
    const {room, setRoom} = this.state;
    const {id} = route.params;

    // useEffect(() => {
    //     fetch(`https://blog.nopublisher.dev/room/${id}`)
    //     .then((response) => response.json())
    //     .then((json) => setRoom(json))
    //     .catch((error) => console.error(error));
    //     return () => {}
    // }, [room])

    return (
        <div className="rooms">
            {room && room.data.map(R => (
               <Room
                 name={R.name}
                 roomType={R.roomType}
                 deposit={R.deposit}
                 address={R.address}
                 progress={R.progress}
               />
             ))}
        </div>
    );
}

export default roomPage;