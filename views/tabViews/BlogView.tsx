import { View, StyleSheet, ViewProps, ScrollView} from "react-native"
import HomeView from "../HomeView"
import { Card, Text, Layout } from '@ui-kitten/components';

//Redux
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { RootState } from "../../redux/store"

import { blog } from "../../redux/reducers/blog"

export default function BlogView () {


    const blogs: blog[] = useSelector((state: RootState) => state.blogs.blogs)

    useEffect(() =>{
        console.log("Entra")
    },[])

    const Header = (element: blog): React.ReactElement => (
        <View>
          <Text category='h6'>
            {element.titulo}
          </Text>
          <Text category='s1'>
            Escrito por: {element.autor}
          </Text>
        </View>
      );

    return (
        <HomeView tabSelected={0}>
        <ScrollView>
            {blogs.map((element: blog, index: number) => (
                <>
                <Layout
                  style={styles.topContainer}
                  level='1'
                >
                    <Card
                        style={styles.card}
                        header={Header(element)}
                        >
                        <Text>
                            {element.contenido}
                        </Text>
                    </Card>
                </Layout>
                <Text>{""}</Text>
                </>
            ))}
           
        </ScrollView>
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
  });