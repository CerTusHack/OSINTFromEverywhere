import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
const imageUrl = 'https://softmark.mx/wp-content/uploads/2021/07/logobco1.png';
import filter from 'lodash.filter';

export default function Busqueda(){
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = fullData.filter(({ name, email }) => {
      const { first, last } = name;
  
      return (
        first.toLowerCase().includes(formattedQuery) ||
        last.toLowerCase().includes(formattedQuery) ||
        email.toLowerCase().includes(formattedQuery)
      );
    });
    setData(filteredData);
  };
  
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    return (
      first.toLowerCase().includes(query) ||
      last.toLowerCase().includes(query) ||
      email.toLowerCase().includes(query)
    );
  };

  useEffect(() => {
      fetchData("https://randomuser.me/api/?results=50");
  },[]);

  const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.results);
        setFullData(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image source={{ uri: imageUrl }} style={{marginTop:42,width: 310, height: 64 }} />
        <Text style={styles.text}>Acceso delta</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Search..."
              underlineColorAndroid="transparent"
              onChangeText={(query) => handleSearch(query)}
            />
          </View>
  
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => showAlert('search')}>
            <Image
              style={[styles.icon, styles.iconBtnSearch]}
              source={{ uri: 'https://img.icons8.com/color/70/000000/search.png' }}
            />
          </TouchableOpacity>
        </View>
  
    <FlatList
      style={styles.notificationList}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.notificationBox}>
            <Text style={styles.description}>{item.name.first} {item.name.last}</Text>
            <Text style={styles.description}>{item.dob.age} {item.dob.date}</Text>
            <Text style={styles.description}>{item.email}</Text>
            <Text style={styles.description}>{item.phone}</Text>
            <Text style={styles.description}>{item.cell}</Text>
            <Text style={styles.description}>{item.location.city},{item.location.state},{item.location.country},{item.location.postcode}</Text>
            <Text style={styles.description}>{item.location.coordinates.latitude},{item.location.coordinates.longitude}</Text>
        </View>
      )}
    />
      </View>

      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: '#FFFFFF',
  },
  icon: {
    height: 20,
    width: 20,
  },
  header:{
    backgroundColor: '#2271B3',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:10

  },
    text:{
    fontSize:22,
    color:'#fff',
    marginTop:12,
    paddingBottom:23,
    paddingStart:13,
  }, 
    container2: {
      flex: 1,
      backgroundColor: '#EBEBEB',
    },
    formContent: {
      flexDirection: 'row',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      margin: 10,
    },
    icon: {
      width: 30,
      height: 30,
    },
    iconBtnSearch: {
      alignSelf: 'center',
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
    },
    inputIcon: {
      marginLeft: 15,
      justifyContent: 'center',
    },
    saveButton: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: 70,
      alignSelf: 'flex-end',
      backgroundColor: '#40E0D0',
      borderRadius: 30,
    },
    saveButtonText: {
      color: 'white',
    },
    notificationList: {
      marginTop: 20,
      padding: 10,
    },
    notificationBox: {
      padding: 20,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    image: {
      width: 45,
      height: 45,
    },
    description: {
      fontSize: 18,
      color: '#3498db',
      marginLeft: 10,
    },                   
})

                                            