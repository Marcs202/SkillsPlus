import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { useGlobal } from "../asset/valuesglobal";

export default function NotificationScreen({ navigation }) {
  const { userIdProfesional } = useGlobal();
  const { userId } = useGlobal();

  // CONSUMO DE VISTA DE PROFESIONALES/ACEPTADOS
  const [data, setData] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/contrataciones/profesionalAceptado?idProfesional=${userIdProfesional}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setData(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userIdProfesional])
  );

  // CONSUMO DE VISTA DE PROFESIONALES/ESPERA
  const [espera, setEspera] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/contrataciones/profesionalEspera?idProfesional=${userIdProfesional}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setEspera(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userIdProfesional])
  );

  // CONSUMO DE VISTA DE PROFESIONALES/RECHAZADOS
  const [rechazados, setRechazados] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/contrataciones/profesionalRechazado?idProfesional=${userIdProfesional}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setRechazados(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userIdProfesional])
  );

  // CONSUMO DE VISTA DE CLIENTE/ACEPTADO
  const [AcceptClient, setClientAccept] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/contrataciones/clienteAceptado?idCliente=${userId}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setClientAccept(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userId])
  );

  // CONSUMO DE VISTA DE CLIENTE/ESPERA
  const [ClientWaiting, setClientWaiting] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      axios
        .get(
          `http://140.84.176.85:3000/contrataciones/clienteEspera?idCliente=${userId}`
        )
        .then((response) => {
          if (response.data && typeof response.data === "object") {
            setClientWaiting(response.data); // Analizar solo si es un objeto válido
          } else {
            console.error("Respuesta de la API no es un JSON válido.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [userId])
  );

  return (
    <>
      <ScrollView>
        {/* PROFESIONALES */}
        <View style={styles.container}>
          {espera.map((item) => (
            <View
              key={item.ContratacionID}
              style={[styles.card, styles.backgroundWaiting]}
            >
              <View style={styles.leftColumn}>
                <Text style={[styles.text, styles.cardTitle]}>Espera</Text>
                <Image
                  source={{ uri: item.Foto_cliente }}
                  style={styles.perfil}
                />
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.text, styles.difficulty]}>
                    Falta de Confirmación
                  </Text>
                  <Text style={styles.textClient}>
                    Cliente: {item.Nombre_Cliente} {item.Apellido_Cliente}
                  </Text>
                </View>
                <Text style={[styles.text, styles.cardTitle]}>
                  {item.Servicio_contratado}
                </Text>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.buttonText}>Aceptar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.buttonText}>Rechazar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {data.map((item) => (
            <View
              key={item.ContratacionID}
              style={[styles.card, styles.backgroundAccept]}
            >
              <View style={styles.leftColumn}>
                <Text style={[styles.text, styles.cardTitle]}>Contratado</Text>
                <Image
                  source={{ uri: item.Foto_Cliente }}
                  style={styles.perfil}
                />
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.text, styles.difficulty]}>
                    En Proceso
                  </Text>
                  <Text style={styles.textClient}>
                    Cliente: {item.Nombre_Cliente} {item.Apellido_Cliente}
                  </Text>
                </View>
                <Text style={[styles.text, styles.cardTitle]}>
                  {item.Servicio_contratado}
                </Text>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {rechazados.map((item) => (
            <View
              key={item.ContratacionID}
              style={[styles.card, styles.backgrounDecline]}
            >
              <View style={styles.leftColumn}>
                <Text style={[styles.text, styles.cardTitle]}>Rechazado</Text>
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.text, styles.difficulty]}>
                    Contratacion Declinada
                  </Text>
                  <Text style={styles.textClient}>
                    Cliente: {item.Nombre_Cliente} {item.Apellido_Cliente}
                  </Text>
                </View>
                <Text style={[styles.text, styles.cardTitle]}>
                  {item.Servicio_contratado}
                </Text>
              </View>
            </View>
          ))}
          {/* CLIENTES */}
          {AcceptClient.map((item) => (
            <View
              key={item.ContratacionID}
              style={[styles.card, styles.backgroundAccept]}
            >
              <View style={styles.leftColumn}>
                <Text style={[styles.text, styles.cardTitle]}>Aceptado</Text>
                <Image
                  source={{ uri: item.Foto_profesional }}
                  style={styles.perfil}
                />
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.text, styles.difficulty]}>
                    Manos a la obra en conjunto de:
                  </Text>
                  <Text style={styles.textClient}>
                    {item.Nombre_profesional} {item.Apellido_Profesional}
                  </Text>
                </View>
                <Text style={[styles.text, styles.cardTitle]}>
                  {item["Servicio contratado"]}
                </Text>
              </View>
            </View>
          ))}

          {ClientWaiting.map((item) => (
            <View
              key={item.ContratacionID}
              style={[styles.card, styles.backgroundWaiting]}
            >
              <View style={styles.leftColumn}>
                <Text style={[styles.text, styles.cardTitle]}>En Espera</Text>
                <Image
                  source={{ uri: item.Foto_Profesional }}
                  style={styles.perfil}
                />
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.text, styles.difficulty]}>
                    En espera de Confirmación:
                  </Text>
                  <Text style={styles.textClient}>
                    {item.Nombre_profesional} {item.Apellido_Profesional}
                  </Text>
                </View>
                <Text style={[styles.text, styles.cardTitle]}>
                  {item.Servicio_contratado}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    borderRadius: 30,
    margin: 15,
    overflow: "hidden",
    flexDirection: "row",
  },
  backgroundWaiting: {
    backgroundColor: "#21c8f6",
  },
  backgrounDecline: {
    backgroundColor: "#F54949",
  },
  backgroundAccept: {
    backgroundColor: "#6edcc4",
  },
  text: {
    color: "#473F4F",
    fontWeight: "bold",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  cardTitle: {
    letterSpacing: 0.5,
    fontSize: 20,
    marginVertical: 5,
    marginTop: 10,
  },
  leftColumn: {
    padding: 5,
    maxWidth: 120,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
  },
  rightColumn: {
    padding: 13,
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 15,
  },
  difficulty: {
    opacity: 0.6,
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#353437",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
  textClient: {
    color: "#473F4F",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  perfil: {
    width: 80,
    height: 80,
    marginLeft: 15,
    borderRadius: 50,
  },
});
