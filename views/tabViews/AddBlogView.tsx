import { View, StyleSheet, Alert} from "react-native"
import HomeView from "../HomeView"
import { Card, Text, Layout, Input, InputProps, Button, Modal } from '@ui-kitten/components';

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addBlog, blog } from "../../redux/reducers/blog";
import { useNavigate } from "react-router-native";

const useInputState = (valorInicial = ''): InputProps => {
    const [value, setContenido] = React.useState(valorInicial);
    return { value, onChangeText: setContenido };
  };
export default function AddBlogView () {

    const [titulo, setTitulo] = React.useState<string>('');
    const [autor, setAutor] = React.useState<string>('');
    const multilineInputState = useInputState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [visible, setVisible] = React.useState<boolean>(false);

    const guardarBlog: () => void = () => {
        console.log("titulo", titulo)
        console.log("autor", autor)
        console.log("multilineInputState", multilineInputState.value)

        if( titulo != "" && autor != "" && multilineInputState.value != ""){

            const data: blog = {
                titulo: titulo,
                autor: autor,
                contenido: multilineInputState.value == undefined ? "" : multilineInputState.value,
                fechaCreacion: ""
            }
            
            try {
                dispatch(addBlog(data))
                Alert.alert('Listo', '¡El blog ha sido agregado correctamente!', [
                    {text: 'OK', onPress: () => {console.log('OK Pressed'); navigate("/")}},
                ]);
                setAutor("")
                setTitulo("")
                
            }catch (e){
                
            }
        }else{
            Alert.alert('Alerta', 'No puedes guardar valores vacíos', [
                {text: 'Reintentar', onPress: () => console.log('OK Pressed')},
            ]);
        }
        
    }

    return (
        <HomeView tabSelected={1}>
            <View>
                <Layout
                  style={styles.topContainer}
                  level='1'
                >
                        <Card
                            style={styles.card}
                            >
                            <Input
                            placeholder='Ingresa título'
                            //value={value}
                            onChangeText={texto => setTitulo(texto)}
                            />
                            
                            <Text>{""}</Text>

                            <Input
                            placeholder='Ingresa autor'
                            //value={value}
                            onChangeText={texto => setAutor(texto)}
                            />

                            <Text>{""}</Text>

                            <Input
                            multiline={true}
                            textStyle={styles.inputTextStyle}
                            placeholder='Contenido'
                            {...multilineInputState}
                            />

                            <Text>{""}</Text>

                            <Button onPress={guardarBlog}>
                                Agregar Blog
                            </Button>


                        </Card>

                        <Modal visible={visible}>
                            <Card disabled={true}>
                            <Text>¡El blog se ha guardado correctamente!
                            </Text>
                            <Button onPress={() => setVisible(false)}>
                                Cerrar
                            </Button>
                            </Card>
                        </Modal>
                </Layout>
            </View>
        </HomeView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      flex: 1,
      margin: 2,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    footerControl: {
      marginHorizontal: 2,
    },
    inputTextStyle: {
        minHeight: 64,
      },
  });