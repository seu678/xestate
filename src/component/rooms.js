import React from "react";
import axios from "axios";
import Room from "./Room";


const RoomPage = (nav, object) => {
  nav.navigate({
     routeName: 'roomPage',
     params: {
         id: object,
     } ,
  });
}

class rooms extends React.Component{
  state = {
    isLoading: true,
    rooms: []
  };
  getRooms = async () => {
    const rooms = await axios.get("https://blog.nopublisher.dev/rooms");
    console.log(rooms);
    this.setState({ rooms , isLoading: false });
  };
  componentDidMount(){
    this.getRooms();
  }

  render() {
    const {isLoading, rooms, name, address, id, navigation} = this.state;
    return (
        <section className="container"> 
          {isLoading ? (
            <div className ="loader">
                <span className="loader__text">Loading...</span>
            </div> 
            ) : ( 
              <div className="rooms">
                {rooms && rooms.data.map(R => (
                  // <div onPress={()=>{roomPage(navigation, id);}} className="unstyled-button" >
                  <Room
                    name={R.name}
                    roomType={R.roomType}
                    address={R.address}
                    state={R.state}
                    monthlyPayment={R.monthlyPayment}
                  />
                  // </div>
                ))}
                
                {/* {rooms && rooms.data.map(R => (
                  <Room
                    name={R.name}
                    roomType={R.roomType}
                    deposit={R.deposit}
                    address={R.address}
                    progress={R.progress}
                  />
                ))} */}
              </div>
          )}
      </section>
    );
  }
}

export default rooms;
