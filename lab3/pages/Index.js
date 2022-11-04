import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Index({ navigation }) {
  const data = [
    {
      id: "1",
      title: "iPhone13",
      price: 600,
      img: require("../assets/iPhone13.png"),
    },
    {
      id: "2",
      title: "iPhone14",
      price: 800,
      img: require("../assets/iPhone14.jpg"),
    },
    {
      id: "3",
      title: "SAMSUNG",
      price: 450,
      img: require("../assets/SAMSUNGGalaxyA53.jpg"),
    },
    {
      id: "4",
      title: "HUAWEI",
      price: 6000,
      img: require("../assets/huaweip50.jpg"),
    },
  ];
  const handleBuy = (v) => {
    navigation.navigate("Order", v);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data.map((v, i) => {
        return (
          <View
            key={innerHeight}
            style={{
              width: "45%",
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
            }}
          >
            <Image
              source={v.img}
              resizeMode="contain"
              style={{
                width: 150,
                height: 150,
              }}
            />
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {v.title}
              </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontStyle: "italic",
                }}
              >
                {v.price}$
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: "deepskyblue",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                handleBuy(v)
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

export default Index;
