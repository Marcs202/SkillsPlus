import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomDropdown from "../components/customdropdown";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.contenedor}>
      <ScrollView horizontal>
        <View>
          <Image
            source={require("../placeholderimgs/img1.jpg")}
            style={styles.bubbleban}
          />
        </View>
        <View>
          <Image
            source={require("../placeholderimgs/img2.jpg")}
            style={styles.bubbleban}
          />
        </View>
        <View>
          <Image
            source={require("../placeholderimgs/img3.jpg")}
            style={styles.bubbleban}
          />
        </View>
        <View>
          <Image
            source={require("../placeholderimgs/img4.jpg")}
            style={styles.bubbleban}
          />
        </View>
        <View>
          <Image
            source={require("../placeholderimgs/img5.jpg")}
            style={styles.bubbleban}
          />
        </View>
      </ScrollView>
      <ScrollView>
        <View>
          <CustomDropdown style={styles.dropdown}></CustomDropdown>
        </View>
        <Text style={styles.titulo}>Servicios más contratados</Text>
        <View style={styles.listado}>
          <TouchableWithoutFeedback onPress={openModal}>
            <View style={styles.listaItem}>
              <Image
                source={require("../placeholderimgs/img5.jpg")}
                style={styles.bubbleban}
              />
            </View>
          </TouchableWithoutFeedback>
          <Modal
            style={styles.modal}
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                {/* Contenido del encabezado */}
                <Image
                  source={require("../placeholderimgs/img5.jpg")}
                  style={styles.modalImage}
                />
                <Text style={styles.headerText}>Título del Encabezado</Text>
              </View>
              <View style={styles.modalContent}>
                {/* Contenido del modal */}
                <Text style={styles.textModal}>
                  Descripción de la imagen o cualquier otro contenido aquí.
                </Text>
                <Text style={styles.Precio}>Precio: $50</Text>
                {/* Botones */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      alert("se envio solicitud de contratacion");
                    }}
                  >
                    <Text style={styles.button}>Solicitar contratacion</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      /* Manejar acción del primer botón */
                    }}
                  >
                    <Text style={styles.button}>Ver perfil</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableWithoutFeedback
              style={styles.buttonContainer}
              onPress={closeModal}
            >
              <Text>Cerrar</Text>
            </TouchableWithoutFeedback>
          </Modal>
          <TouchableWithoutFeedback onPress={openModal}>
          <View style={styles.listaItem} onPress={openModal}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={openModal}>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          </TouchableWithoutFeedback>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              source={require("../placeholderimgs/img5.jpg")}
              style={styles.bubbleban}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bubbleban: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 50,
  },
  Precio: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 260,
  },

  contenedor: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "33%",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titulo: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 24,
  },

  modalImage: {
    width: 100,
    height: 100,
    display: "flex",
    flexDirection: "row",
    marginRight: 80,
  },
  modalContainer: {
    width: "100%",
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    marginTop: 250,
  },
  modal: {
    backgroundColor: "blue",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    marginBottom: 10,
    marginTop: 15,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "#D3D3D3",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  textModal: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "blue",
    marginLeft: 0,
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },

  buttonC: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
