import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import HorizontalLine from "../components/HorizontalLine";
import ViewAll from "../components/ViewAll";

export default function HomeScreen({ navigation }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const borderRadiusPercentage = 50; // Example percentage
  const borderRadius =
    Math.min(dimensions.width, dimensions.height) *
    (borderRadiusPercentage / 100);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/images/doctorImage.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.name}>Welcome Dr,</Text>
              <Text style={styles.subText}>What do you want to do today?</Text>
            </View>
          </View>
          <View style={styles.headerIconContainer}>
            <TouchableOpacity style={[styles.headerIcon, { borderRadius }]}>
              <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.headerIcon, { borderRadius }]}
              onLayout={handleLayout}
              //   onPress={() => navigation.openDrawer()}
            >
              <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.appointmentCard}>
          <View style={styles.cardBody}>
            <View style={styles.date}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: 6,
                }}
              >
                29
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: 4,
                }}
              >
                Tue
              </Text>
              <HorizontalLine />
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: 4,
                }}
              >
                2:00PM
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,

                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: 8,
                }}
              >
                Pending appointment
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                Tanvir Ahmed
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.65)",
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                High Blood Pressure
              </Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.stopwatch}>
              <Entypo name="stopwatch" size={16} color="#fff" />
              <Text
                style={{
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.65)",
                  fontWeight: "600",
                }}
              >
                0:01:20
              </Text>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
              <Text>
                View Patient{" "}
                <AntDesign name="arrowright" size={12} color="#643FDB" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.availabilityContainer}>
          <Text
            style={{
              fontSize: 20,
              color: "#159900",
              fontWeight: "600",
              marginBottom: 8,
            }}
          >
            I am Available
          </Text>
          <View style={styles.toggleContainer}>
            <View style={[styles.toggle, { borderRadius }]}></View>
          </View>
        </View>
        <View style={styles.shedule}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              fontWeight: "600",
              marginBottom: 8,
            }}
          >
            Schedule appointment calender
          </Text>
          <AntDesign name="arrowright" size={18} color="#000000" />
        </View>
        <ViewAll text={"Community Feed"} />

        <ScrollView horizontal={true} style={styles.communityScrool}>
          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={styles.hands}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={styles.hands}
            resizeMode="contain"
          />
        </ScrollView>
        <ViewAll text={"Shop for Medical Devices"} />
        <ScrollView horizontal={true} style={styles.communityScrool}>
          <View style={styles.medicineContainer}>
            <Image
              source={require("../../assets/images/ekg.png")}
              //   style={styles.hands}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
          <View style={styles.medicineContainer}>
            <Image
              source={require("../../assets/images/ekg.png")}
              //   style={styles.hands}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
          <View style={styles.medicineContainer}>
            <Image
              source={require("../../assets/images/ekg.png")}
              //   style={styles.hands}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
        </ScrollView>
        <ViewAll text={"Shop for medicines"} />
        <ScrollView horizontal={true} style={styles.communityScrool}>
          <View style={styles.medicineContainer}>
            <View
              style={{
                position: "absolute",
                zIndex: "100",
                backgroundColor: "#000000",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                top: 12,
                left: 6,
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                46% off
              </Text>
            </View>
            <Image
              source={require("../../assets/images/pills.png")}
              style={styles.drugs}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
          <View style={styles.medicineContainer}>
            <View
              style={{
                position: "absolute",
                zIndex: "100",
                backgroundColor: "#000000",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                top: 12,
                left: 6,
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                46% off
              </Text>
            </View>
            <Image
              source={require("../../assets/images/drug.png")}
              style={styles.drugs}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
          <View style={styles.medicineContainer}>
            <View
              style={{
                position: "absolute",
                zIndex: "100",
                backgroundColor: "#000000",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                top: 12,
                left: 6,
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                46% off
              </Text>
            </View>
            <Image
              source={require("../../assets/images/pills.png")}
              style={styles.drugs}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 12,
                color: "#424242",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Temperature checker
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "600",
                marginTop: 8,
              }}
            >
              N5,000
            </Text>
          </View>
        </ScrollView>
        <View style={styles.popular}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{ fontWeight: "400", fontSize: 40, color: "#ffffff" }}
              >
                Amartem 2201
              </Text>
              <Text
                style={{ fontWeight: "400", fontSize: 12, color: "#ffffff" }}
              >
                for malaria and Fever made for both.
              </Text>
            </View>

            <View>
              <Text
                style={{ fontWeight: "700", fontSize: 20, color: "#ffffff" }}
              >
                N2,000
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 13,
                  color: "#ffffff",
                  textDecorationLine: "line-through",
                }}
              >
                N12,000
              </Text>
            </View>
          </View>

          <Image
            source={require("../../assets/images/capsule.png")}
            style={styles.amartem}
            resizeMode="contain"
          />
        </View>
        <ViewAll text={"News Feeds"} />
        <View style={styles.newsContainer}>
          <Image
            source={require("../../assets/images/skin/Rectangle.png")}
            style={styles.newsImage}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 17,
                color: "#8E8E93",
                marginBottom: 6,
              }}
            >
              r/worldnews
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 20,
                color: "#000000",
                marginBottom: 6,
                width: "70%",
              }}
            >
              Getting The Upper Hand On Asthma Allergy
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 26 }}>
          <HorizontalLine />
        </View>
        <View style={styles.newsContainer}>
          <Image
            source={require("../../assets/images/Cell/Rectangle.png")}
            style={styles.newsImage}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 17,
                color: "#8E8E93",
                marginBottom: 6,
              }}
            >
              r/worldnews
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 20,
                color: "#000000",
                marginBottom: 6,
                width: "70%",
              }}
            >
              Getting The Upper Hand On Asthma Allergy
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    paddingHorizontal: 26,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    gap: 10,
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
    color: "#2B2B2B",
  },
  subText: {
    color: "rgba(43, 43, 43, 0.7)",
    fontSize: 12,
    marginTop: 6,
    fontWeight: "400",
  },
  headerIconContainer: {
    flexDirection: "row",
    gap: 16,
  },
  headerIcon: {
    borderWidth: 1,
    borderColor: "rgba(43, 43, 43, 0.05)",
    padding: 10,
    // borderRadius: "50%",
  },
  appointmentCard: {
    marginTop: 30,
    marginHorizontal: 26,
    borderRadius: 16,
    backgroundColor: "#643FDB",
    padding: 26,
    shadowColor: "#8365E2",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    elevation: 5,
  },
  cardBody: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  date: {
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    paddingVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 17,
    alignItems: "center",
  },
  stopwatch: {
    alignItems: "center",
    flexDirection: "row",

    gap: 4,
  },
  viewBtn: {
    alignItems: "baseline",
    flexDirection: "row",
    gap: 4,
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  availabilityContainer: {
    marginTop: 50,
    marginHorizontal: 26,
    backgroundColor: "rgba(62, 182, 27, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleContainer: {
    backgroundColor: "#27AE60",
    borderRadius: 12,
    width: 40,
    height: 20,
  },
  toggle: {
    height: "100%",
    width: "50%",
    backgroundColor: "#fff",
    // borderRadius: "50%",
  },
  shedule: {
    marginTop: 24,
    marginHorizontal: 26,
    backgroundColor: "rgba(151, 151, 151, 0.11)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: 17,
    borderRadius: 13,
  },
  communityScrool: {
    marginTop: 24,
    paddingLeft: 26,
    // marginHorizontal: "auto",
  },
  hands: {
    marginRight: 24,
  },
  medicineContainer: {
    backgroundColor: "rgba(158, 158, 158, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    position: "relative",
    padding: 12,
    borderRadius: 16,
    marginRight: 12,
  },
  drugs: {
    width: 118,
    height: 118,
  },
  popular: {
    backgroundColor: "#4425F5",
    marginHorizontal: 24,
    borderRadius: 16,
    marginTop: 35,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  amartem: {
    marginHorizontal: "auto",
    marginTop: 40,
  },
  newsContainer: {
    flexDirection: "row",
    marginHorizontal: 26,
    marginTop: 10,
    gap: 20,
  },
});
