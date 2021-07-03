import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors/colors";

export default Details = ({ route }) => {
  const { item } = route.params;

  const renderIngredientItem = ({ item }) => (
    <View
      style={[styles.ingredientImage, { marginStart: item.id == 1 ? 20 : 0 }]}
    >
      <Image source={item.image} />
    </View>
  );
  return (
    <View styles={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.btnBackWrapper}>
            <Feather name="chevron-left" size={12} color={colors.black} />
          </View>
          <View style={styles.btnFavWrapper}>
            <Feather name="star" size={12} color={colors.white} />
          </View>
        </View>

        {/* Pizza's name */}
        <View style={styles.nameWrapper}>
          <Text style={styles.pizzaTitle}>{item.title}</Text>
          <Text style={styles.pizzaPrice}>${item.price}</Text>
        </View>

        {/* Details */}
        <View style={styles.detailWrapper}>
          <View style={styles.leftTextWrapper}>
            <Text style={styles.subtitleText}>Size</Text>
            <Text style={styles.titleText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>

            <Text style={styles.subtitleText}>Crust</Text>
            <Text style={styles.titleText}>{item.crust}</Text>

            <Text style={styles.subtitleText}>Delivery in</Text>
            <Text style={styles.titleText}>{item.deliveryTime} min</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.detailImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.flatlistWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item.ingredients}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled={true}
              horizontal={true}
              renderItem={renderIngredientItem}
            />
          </View>
        </View>

        {/* Button Place order */}
        <TouchableOpacity
          style={styles.btnPlaceOrderWrapper}
          onPress={() => alert("Your order has been placed!")}
        >
          <View style={styles.btnPlaceOrder}>
            <Text style={styles.placeOrderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.btnPlaceOrderWrapper}
          onPress={() => alert("Your order has been placed!")}
        >
          <View style={styles.btnPlaceOrder}>
            <Text style={styles.placeOrderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  btnBackWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderColor: colors.textLight,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btnFavWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  nameWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  pizzaTitle: {
    fontFamily: "montserrat-bold",
    fontSize: 32,
  },
  pizzaPrice: {
    fontFamily: "montserrat-semibold",
    fontSize: 32,
    color: colors.price,
    marginTop: 20,
  },
  detailWrapper: {
    marginTop: 10,
    paddingStart: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  leftTextWrapper: {
    width: 100,
  },
  subtitleText: {
    fontFamily: "montserrat-regular",
    fontSize: 14,
    color: colors.textLight,
    marginTop: 20,
  },
  titleText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colors.textDark,
    marginTop: 5,
  },
  detailImage: {
    width: 300,
    height: 180,
    resizeMode: "contain",
    marginStart: 25,
  },
  imageWrapper: {
    marginTop: 25,
    justifyContent: "center",
    overflow: "hidden",
  },
  ingredientsWrapper: {
    marginTop: 45,
  },
  ingredientsTitle: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: colors.textDark,
    marginStart: 20,
  },
  flatlistWrapper: {
    marginTop: 20,
  },
  ingredientImage: {
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.background,
    marginEnd: 15,
    justifyContent: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0.05,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 2,
  },
  btnPlaceOrderWrapper: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  btnPlaceOrder: {
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
  },
  placeOrderText: {
    fontFamily: "montserrat-bold",
    fontSize: 14,
    color: colors.textDark,
    marginEnd: 12,
  },
});
