import React , {useState, Component, onClick} from 'react';
import './RegisterRoom.css';
import { Form, Col, Button} from "react-bootstrap";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class RegisterRoom extends Component{
    state = {
        isLoading: true,
        name: '',
        roomType: '',
        address: '',
        state: '',
        monthlyPayment: '',
        image_url : img,
      }
      isSelectedImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        //빈파일이 아닌 경우 함수 진행
         if (event.target.files !== null) {
           //FormData 생성
           const fd = new FormData();
           //FormData에 key, value 추가하기
           fd.append('filename', event.target.files[0]);
           // axios 사용해서 백엔드에게 파일 보내기
           axios
             .post(`${URL}/user/profile-upload`, fd)
             .then(res => {
          //응답으로 받은 url 저장하기 (응답 내용의 표시나 방법은 백엔드와 결정해야한다.)
               setImgUpload(res.data.image_url);
             // 최종적으로 DB에 저장될 url을 보내는 과정이 부모 컴포넌트에 있기 때문에 부모 컴포넌트에 url을 보내는 과정
               props.imgStore(res.data.image_url);
             })
           //에러가 날 경우 처리
             .catch(error => {
               console.log(error.response);
             });
         }
       };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            roomType: '',
            address: '',
            state: '',
            monthlyPayment: '',
            image_url : img,
        })
    }
    //   getRooms = async () => {
    //     const rooms = await axios.get("/room/create");
    //     console.log(rooms);
    //     this.setState({ rooms , isLoading: false });
    //   };
    //   componentDidMount(){
    //     this.getRooms();
    //   }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>이름</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "name"
                                placeholder = "이름을 입력하세요"
                                value ={this.state.name}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>주소</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "address"
                                placeholder = "주소를 입력하세요"
                                value ={this.state.address}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="roomType" sm="5">
                        <Form.Label>방 종류</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "roomType"
                                placeholder = "방 종류를 입력하세요"
                                value ={this.state.roomType}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="state" sm="5">
                        <Form.Label>상태</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "state"
                                placeholder = "상태를 입력하세요"
                                value ={this.state.state}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>

                    <Form.Group as={Col} controlId="monthlyPayment" sm="5">
                        <Form.Label>월세</Form.Label>
                        <Form.Control 
                                type="text"
                                name = "monthlyPayment"
                                placeholder = "월세를 입력하세요"
                                value ={this.state.monthlyPayment}
                                onChange={
                                    this.handleChange
                                }
                            />
                    </Form.Group>
                    
                    <ImgInput
                        type="file"
                        accept="image/jpeg, image/jpg"  //업로드 가능한 파일 종류. 
                        onChange={isSelectedImg} />

                    <Grid container spacing={1} justify="center">
                                 <Grid item>
                                 <Button type = "submit" background-color="#6610f2" onClick={
                                         () => {
                                            console.log(this.state);
                                            axios({
                                                method: 'POST',
                                                url: 'https://blog.nopublisher.dev/room/create',
                                                data: {
                                                    name: this.state.name,
                                                    roomType: this.state.roomType,
                                                    address : this.state.address,
                                                    state : this.state.state,
                                                    monthlyPayment: this.state.monthlyPayment,
                                                },
                                            })
                                         }
                                     }>등록</Button>         
                                 </Grid>
                    </Grid>
                        
            </div>
            </form>
                               
        );
    }
}
// // const RegisterRoom = () => {

// //     const [name, setName] = useState("");
// //     const [roomType, setRoomType] = useState(0);
// //     const [address, setAddress] = useState("");
// //     const [state, setProgress] = useState(0);
// //     const [deposit, setDeposit] = useState(0);
// //     const [monthlyPayment, setMonthlyPayment] = useState(0);

// //     const onChange = async() => {
// //         let body = {
// //                 name: name,
// //                 roomType : roomType,
// //                 address : address,
// //                 state : state,
// //                 deposit: deposit,
// //                 monthlyPayment: monthlyPayment,
// //         }
// //         let body_json = JSON.stringify(body);
// //         axios({
// //             method: 'POST',
// //             url: 'https://blog.nopublisher.dev/room/create',
// //             body: body_json,
// //         })
// //         // .then(function (response) {console.log(response);})
// //         // .catch(error => {console.log('error : ',error.response)});
// //         console.log(body_json);
// //     }

//     // useEffect(() => {
        
//     // }, [name, roomType, address, progress]);

//     // pressed = function() {
//     //     fetch("https://blog.nopublisher.dev/room/create", {
//     //         method: 'POST',
//     //         headers: {
//     //             Accept: 'application/json',
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify({
//     //             name: name,
//     //             roomType: roomType,
//     //             address: address,
//     //             progress: progress,
//     //         }),
//     //     });
//     // }

//         return(
//             <Form>
//                     <br/><br/>
//                         <Form.Group as={Col} controlId="name" sm="5">
//                         <Form.Label>이름</Form.Label>
//                         <Form.Control 
//                             type="string"
//                             placeholder="이름을 입력하시오"
//                             value = {this.state.RegisterRoom.name}
//                             onChange={
//                                 (e) => {
//                                     this.setState({
//                                         name: e.target.value
//                                     })
//                                 }
//                             }
//                         />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="state" sm="5">
//                         <Form.Label>roomType</Form.Label>
//                         <Form.Control type="number" placeholder="0 또는 1 입력" /> 
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="address" sm="5">
//                         <Form.Label>Address</Form.Label>
//                         <Form.Control type="string" placeholder="주소를 입력하시오" />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="state" sm="5">
//                         <Form.Label>state</Form.Label>
//                         <Form.Control type="number" placeholder="0 또는 1 입력"  />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="deposit" sm="5">
//                         <Form.Label>보증금</Form.Label>
//                         <Form.Control type="number" placeholder="금액을 입력하시오"/>
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="monthly payment" sm="5">
//                         <Form.Label>월세</Form.Label>
//                         <Form.Control type="number" placeholder="금액을 입력하시오" />
//                         </Form.Group>

//                         <Button onClick = {onClick} variant="primary">
//                             Submit
//                         </Button>
//             </Form>
//         )
//     }


export default RegisterRoom;