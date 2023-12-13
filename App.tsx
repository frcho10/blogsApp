import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//redux components
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
//navigation components
import { NativeRouter, Routes, Route } from 'react-router-native';
//UIKitten components
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components"

import * as eva from "@eva-design/eva"
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { store, persistor } from './redux/store'
import { Platform } from 'react-native';

import BlogView from './views/tabViews/BlogView';
import AddBlogView from './views/tabViews/AddBlogView';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>


    <SafeAreaView style={{flex:1, paddingTop: Platform.OS==="android"?25:0}}>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NativeRouter>
          <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <Routes>
                <Route path='/' element={<BlogView />} />
                <Route path='/addBlogView' element={<AddBlogView />} />
                {/* <Route path='/ingresos' element={<TabIngresos />} />
                <Route path='/tarjetas' element={<TabTarjetas />} /> */}
              </Routes>
            </ApplicationProvider>
        </NativeRouter>
      </Provider>
    </PersistGate>
    </SafeAreaView>
  );
}
