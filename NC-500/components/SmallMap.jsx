import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import apiKey from "../apiKey";

function SmallMap({
  dayNum,
  dayLocations = [],
  dayStart,
  dayEnd,
  selectedLocationId,
}) {
  const waypoints = [];

  const [waypointHighlight, setWaypointHighlight] = useState(0);

  dayLocations.forEach((location) => {
    waypoints.push(`${location.lat},${location.long}`);
  });

  useEffect(() => {
    setWaypointHighlight(selectedLocationId);
  }, [selectedLocationId]);

    const dayRegionRef = {
      1: { lat: 58.0022523, long: -3.71908, delta: 1.2 },
      2: { lat: 58.5, long: -3.7, delta: 1 },
      3: { lat: 58.2, long: -5, delta: 1 },
      4: { lat: 57.8, long: -5.3, delta: 0.8 },
      5: { lat: 57.6, long: -4.8, delta: 1.3 },
    };

  const dayStartRef = {
    1: { name: "Inverness", lat: 57.4700272, long: -4.224261 },
    2: { name: "Wick", lat: 58.4405866, long: -3.1075801 },
    3: { name: "Tongue", lat: 58.4724224, long: -4.4251491 },
    4: { name: "Ullapool", lat: 57.899499, long: -5.1764874 },
    5: { name: "Torridon", lat: 57.546509, long: -5.5155031 },
  };

  const dayEndRef = {
    1: { name: "Wick", lat: 58.4405866, long: -3.1075801 },
    2: { name: "Tongue", lat: 58.4724224, long: -4.4251491 },
    3: { name: "Ullapool", lat: 57.899499, long: -5.1764874 },
    4: { name: "Torridon", lat: 57.546509, long: -5.5155031 },
    5: { name: "Inverness", lat: 57.4700272, long: -4.224261 },
  };

  const [mapLoaded, setMapLoaded] = useState(false);

    return (
      <View style={{ flex: 1, backgroundColor:'white', borderColor:'#C67974',borderRadius:10, margin:10 }}>
            {!mapLoaded && (
                <View style={{height:400, marginTop: 180}}>
                    <ActivityIndicator size="large" color="#ADC178" />
                </View>
            )}
        <MapView
        key={waypointHighlight+selectedLocationId}
        pitchEnabled={false} rotateEnabled={false} zoomEnabled={true} scrollEnabled={true}
          style={{
            margin:10,
            width: Dimensions.get("window").width*0.9,
            height: Dimensions.get("window").height*0.45,
          }}
          loadingEnabled={true}
          initialRegion={{
            latitude: dayRegionRef[dayNum].lat,
            longitude: dayRegionRef[dayNum].long,
            latitudeDelta: dayRegionRef[dayNum].delta,
            longitudeDelta: dayRegionRef[dayNum].delta,
          }}
          onMapLoaded={() => setMapLoaded(true)}
        >

            {dayLocations.map((location, index)=>{
                return (
                    <Marker
                        key={index}
                        coordinate={{latitude: location.lat, longitude:location.long}}
                        title={location.name}
                        pinColor={location.location_id===waypointHighlight?'aqua':'red'}
                        onClick={(e)=>mapMarkerFunc(e)} >
                            
                        </Marker>
                )
            })}
            {dayStart!=="noDirection"? (<MapViewDirections
            origin={dayStart?dayStart:`${dayStartRef[dayNum].lat},${dayStartRef[dayNum].long}`}
           
            destination={dayEnd?dayEnd:`${dayEndRef[dayNum].lat},${dayEndRef[dayNum].long}`}
            apikey={apiKey}
            strokeWidth={5}
            waypoints={waypoints}
            strokeColor="purple"
            mode="DRIVING"
            optimizeWaypoints={true}
          />
        ) : null}
      </MapView>
    </View>
  );
}

export default SmallMap;
