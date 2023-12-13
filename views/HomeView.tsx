import React, { useState }  from 'react';
import { BottomNavigation, BottomNavigationTab, Icon , Button , Divider} from '@ui-kitten/components';
import { StyleSheet , View, Text} from 'react-native';
import { useNavigate } from 'react-router';
import { useEffect, } from 'react';
import { useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//types
import { NavigateFunction } from 'react-router-native';

interface propsMenu {
    children: React.ReactNode;
    tabSelected: number;
}


 export default function HomeView({children, tabSelected}: propsMenu){

  const [selectedIndex, setSelectedIndex] = useState(tabSelected);
  const navigate: NavigateFunction = useNavigate();
  //const cards = useSelector(state => state.cards.cards) DESCOMENTAR

  const goToTab = (id: number) => {
    setSelectedIndex(id)
    switch (id) {
        case 0:
          navigate('/');
          break;
        case 1:
            navigate('/addBlogView');
            break;
        case 2:
            navigate('/tarjetas');
            break;
        default:
          navigate('/');
          break;
      }
  }
    // const pressAddSpent = () => {

    //     console.log("Se oprime boton")
    //     if (cards)
    //         cards.map((card) => {
    //             console.log("elemento de los cards, ",card)
    //         })
    // } DESCOMENTAR

    const iconHome = () => (
        
        // <Icon name='file-text-outline' {...props} />
        <FontAwesome5 name='list' color={selectedIndex==0 ? '#0469ee' : '#9ea6b0'} size={20}/>
    )

    const iconAgregar = () => (
        
        // <Icon name='trending-up-outline' {...props} />
        <FontAwesome5 name='newspaper' color={selectedIndex==1 ? '#0469ee' : '#9ea6b0'} size={20}/>
    )

    const iconTarjetas = () => (
        
        // <Icon name='credit-card-outline' {...props} />
        <FontAwesome5 name='credit-card' color={selectedIndex==2 ? '#0469ee' : '#9ea6b0'} size={20}/>
    )
  return (
    <>
    <View style={{paddingVertical: 10, paddingHorizontal:15}}>

    {children}
    
    
    
        
    </View>
    <View style={styles.footer}>
    <Divider />

    <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={index => goToTab(index)}
            appearance='noIndicator'
            >
            <BottomNavigationTab key={0} title='Blogs' icon={iconHome} />
            <BottomNavigationTab key={1} title='Agregar' icon={iconAgregar} />
            {/* <BottomNavigationTab key={1} title='Ingresos' icon={iconIngreso} />
            <BottomNavigationTab key={2} title='Tarjetas' icon={iconTarjetas} /> */}
        </BottomNavigation>
    </View>
    </>
  );
};




var styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    footer: {
        position: 'absolute', left: 0, right: 0, bottom: 25
    }
});
