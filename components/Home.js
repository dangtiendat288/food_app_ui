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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

Feather.loadFont();

export default Home = ({ navigation }) => {
  const renderCategoriesItem = ({ item }) => (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
          marginStart: item.id == 1 ? 20 : 0,
        },
      ]}
    >
      <Image source={item.image} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categorySelectWrapper,
          { backgroundColor: item.selected ? colors.white : colors.secondary },
        ]}
      >
        <Feather
          name="chevron-right"
          size={8}
          style={[
            styles.categorySelectIcon,
            { color: item.selected ? colors.black : colors.white },
          ]}
        />
      </View>
    </View>
  );

  let [fontsLoaded] = useFonts({
    "montserrat-regular": require("../assets/fonts/montserrat-regular.ttf"),
    "montserrat-bold": require("../assets/fonts/montserrat-bold.ttf"),
    "montserrat-medium": require("../assets/fonts/montserrat-medium.ttf"),
    "montserrat-semibold": require("../assets/fonts/montserrat-semibold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <SafeAreaView>
          {/* Headers */}
          <View style={styles.headerWrapper}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.subtitle}>Food</Text>
          <Text style={styles.title}>Delivery</Text>
        </View>
        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
              data={categoriesData}
              renderItem={renderCategoriesItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.categoriesTitle}>Popular</Text>
          <View style={styles.popularListWrapper}>
            {popularData.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Details", { item: item })}
              >
                <View style={styles.popularItemWrapper}>
                  <View style={styles.popularLeftTextWrapper}>
                    <View>
                      <View style={styles.popularFirstTitleWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularFirstTitle}>
                          top of the week
                        </Text>
                      </View>
                      <Text style={styles.dishTitle}>{item.title}</Text>
                      <Text
                        style={styles.weightTitle}
                      >{`Weight ${item.weight}`}</Text>
                    </View>
                    <View style={styles.popularIconWrapper}>
                      <TouchableOpacity style={styles.plusButton}>
                        <Text>+</Text>
                      </TouchableOpacity>
                      <View style={styles.ratingTitle}>
                        <MaterialCommunityIcons
                          name="star"
                          size={8}
                          style={styles.ratingIcon}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: "montserrat-semibold",
                          }}
                        >
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      overflow: "hidden",
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Image source={item.image} style={styles.popularImage} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "montserrat-regular",
    color: colors.textDark,
  },
  title: {
    fontSize: 32,
    fontFamily: "montserrat-bold",
    fontWeight: "bold",
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
    marginStart: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    color: colors.textLight,
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "montserrat-semibold",
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    paddingHorizontal: 20,
    fontFamily: "montserrat-bold",
    fontSize: 16,
  },
  categoriesListWrapper: {
    marginTop: 15,
  },
  categoryItemWrapper: {
    marginEnd: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0.05,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    fontFamily: "montserrat-semibold",
  },
  categorySelectWrapper: {
    width: 26,
    height: 26,
    borderRadius: 26,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },

  popularItemWrapper: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0.05,
      height: 0.05,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    borderRadius: 25,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  popularLeftTextWrapper: {
    marginTop: 20,
  },
  popularFirstTitleWrapper: {
    flexDirection: "row",
    marginStart: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  popularFirstTitle: {
    marginStart: 5,
    fontFamily: "montserrat-semibold",
    fontSize: 14,
  },
  dishTitle: {
    marginStart: 20,
    fontFamily: "montserrat-semibold",
    marginBottom: 5,
    fontSize: 14,
  },
  weightTitle: {
    marginStart: 20,
    fontFamily: "montserrat-medium",
    color: colors.textLight,
    marginBottom: 10,
    fontSize: 12,
  },

  popularIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plusButton: {
    flex: 1,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  ratingTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingIcon: {
    marginEnd: 5,
    color: colors.black,
  },
  popularImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
    marginStart: 40,
  },
  popularWrapper: {
    marginTop: 20,
  },
  popularListWrapper: {
    marginTop: 15,
    marginHorizontal: 20,
  },
});
