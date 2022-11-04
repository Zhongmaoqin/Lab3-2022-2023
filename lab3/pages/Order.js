import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Order({ route, navigation }) {
  const params = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "#666",
        }}
      >
        Congratulations on{" "}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "#666",
          marginBottom: 50,
        }}
      >
        your successful purchase!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {params.title}
      </Text>
      <Image
        source={params.img}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text
        style={{
          color: "red",
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        {params.price}$
      </Text>
      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
          backgroundColor: "deepskyblue",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
        }}
        onPress={() => {
          navigation.goBack("index");
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Continue to purchase
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Order;
