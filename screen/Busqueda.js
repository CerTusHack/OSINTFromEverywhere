import React,{useState,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TextInput,
    FlatList,
  } from 'react-native'
import filter from 'lodash.filter';

export default function Busqueda() {

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

        <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
    container: {
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
  
                   