import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './screens/Login';
import Notice_board from './screens/Notice_board';
import Three_Contracts from './screens/Three_Contracts';
import Axios from 'axios';

const Stack = createNativeStackNavigator();

const local_host = "http://192.168.0.13:3000/" // 로컬 주소 변경해야할 수 도 

// 연동 테스트 함수 
const test = async () =>{
  console.log("testing ...");
  await Axios.get(local_host)
  .then(res => {
    console.log("id: " + "%s" + " pw: " + "%s", res.data[0].id, res.data[0].pw);
  })
  .catch(error => console.log(error));
};

const test1 = async () =>{
  console.log("testing ...");
  await Axios.post(local_host+'login', { id: "master1", pw: "1234" })
  .then(res => {
    console.log(res.data.success);
  })
  .catch(error => console.log(error));
};

const test2 = async () =>{
  console.log("testing ...");
  await Axios.post(local_host+'register', { id: "master1", pw: "1234", name: "admin" })
  .then(res => {
    console.log(res.data.success);
  })
  .catch(error => console.log(error));
};

export default function App() {
  // 렌더링 시 콘솔로 출력시켜서 확인 
  useEffect(() => {
    test1();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Notice_board" component={Notice_board} options={{ headerShown: false }} />
        <Stack.Screen name="Three_Contracts" component={Three_Contracts} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}