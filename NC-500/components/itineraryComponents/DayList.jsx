import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import inverness_castle from '../../assets/day_backgrounds/inverness_castle.jpg'
import tongue from '../../assets/day_backgrounds/tongue.jpg'
import wick from  '../../assets/day_backgrounds/wick.jpg'
import ullapool from '../../assets/day_backgrounds/ullapool.jpg'
import torridon from '../../assets/day_backgrounds/torridon.jpg'


const DayList = (props) => {
  const navigation = props.navigation;

  const routeName = props.route.params.routeName;
  const route_id = props.route.params.route_id;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'#DDE5B6' }}>
      <Card style={{width: 380, height: 80, backgroundColor:'#C67974', width:500}}>
        <Text style={{ color:'white', fontWeight:'bold',fontSize:30, textAlign: "center", top:20}}>{`Route: ${routeName[0].toUpperCase()+routeName.slice(1)}`}</Text>
        </Card>
      <FullRouteButton
        navigation={navigation}
        route_id={route_id}
      ></FullRouteButton>
      <DayButton
        dayNum={1}
        navigation={navigation}
        route_id={route_id}
        pic={inverness_castle}
      ></DayButton>
      <DayButton
        dayNum={2}
        navigation={navigation}
        route_id={route_id}
        pic={wick}
      ></DayButton>
      <DayButton
        dayNum={3}
        navigation={navigation}
        route_id={route_id}
        pic={tongue}
      ></DayButton>
      <DayButton
        dayNum={4}
        navigation={navigation}
        route_id={route_id}
        pic={ullapool}
      ></DayButton>
      <DayButton
        dayNum={5}
        navigation={navigation}
        route_id={route_id}
        pic={torridon}
      ></DayButton>
    </View>
  );
};

function dayButtonNav(e, dayNum, navigation, route_id) {
  navigation.navigate("Daily Locations", {
    dayNum: dayNum,
    route_id: route_id,
  });
}

function fullRouteButtonNav(e, navigation, route_id) {
  navigation.navigate("WholeRouteList", { route_id: route_id });
}

function FullRouteButton({ navigation, route_id }) {
  return (
    null
    // <View style={{ borderWidth: 3, width: 300, height: 80, marginTop: 30 }}>
    //   <TouchableOpacity
    //     onPress={(e) => fullRouteButtonNav(e, navigation, route_id)}
    //   >
    //     <Text style={{ textAlign: "center" }}>{`Full Route`}</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

function DayButton({ dayNum, navigation, route_id, pic}) {
  return (
    <Card style={{width: 380, height: 80, marginTop: 30, overflow: 'hidden'}}>
      
      <TouchableOpacity
        onPress={(e) => dayButtonNav(e, dayNum, navigation, route_id)}
      >
        <Image source={pic} resizeMode='contain' style={{
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    position:'relative',
    top:-150
}}></Image>
        <Text style={{ color:'white', fontWeight:'bold',fontSize:40, textAlign: "center", position:'absolute', left:145, top:20}}>{`Day ${dayNum}`}</Text>
        
      </TouchableOpacity>
     
    </Card>
  );
}

export default DayList;
