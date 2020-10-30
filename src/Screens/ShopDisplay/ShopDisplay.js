/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {getData, BaseURL} from '../../Connectivity/FetchService';

function Item({item, props}) {
  return (
    <View style={styles.item} key={item.shopsid}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          props.navigation.navigate('PromotionalBanner', {
            item: item,
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '77%'}}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#282828'}}>
              {item.shopname}
            </Text>
          </View>
          <Image
            resizeMode={'contain'}
            style={{
              width: 50,
              height: 50,
              right: 20,
            }}
            source={{uri: `${BaseURL}/images/${item.shoplogo}`}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function ShopDisplay(props) {
  const [data, setData] = React.useState([]);
  const [localData, setlocalData] = React.useState([]);
  const [getSpinner, setSpinner] = React.useState(true);
  const [getStatus, setStatus] = React.useState(false);
  const [getSearch, setSearch] = React.useState('');

  useEffect(() => {
    readallrecords();
  }, []);

  const readallrecords = async () => {
    let result = await getData('api/display');
    if (result.status) {
      setSpinner(false);
      if (result.data.length == 0) {
        setStatus(true);
        setSpinner(false);
      } else {
        setStatus(false);
      }
      setlocalData(result.data);
      setData(result.data);
    } else {
      setSpinner(false);
    }
  };

  const showSpinner = () => {
    if (getSpinner) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={'#417fae'} size="large" />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Loading...</Text>
        </View>
      );
    }
  };

  const showMessage = () => {
    if (getStatus) {
      return (
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              No Data Found...
            </Text>
          </View>
        </>
      );
    }
  };

  const handleSearch = (txt) => {
    setSearch(txt);
    setlocalData([]);
    var arr = [];
    data.map((item) => {
      const passedString = item.shopname.toLowerCase();
      if (passedString.includes(txt)) {
        arr.push(item);
      }
    });
    setlocalData(arr);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getStatus ? '#fff' : 'transparent',
      }}>
      {showSpinner()}
      {showMessage()}
      {data.length > 0 ? (
        <TextInput
          placeholder={'Search Shop...'}
          style={{
            width: '90%',
            backgroundColor: '#dfdfdf',
            alignSelf: 'center',
            margin: 10,
            padding: 15,
            borderRadius: 100,
          }}
          value={getSearch}
          onChangeText={handleSearch}
        />
      ) : (
        <></>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={localData}
          renderItem={({item}) => <Item item={item} props={props} />}
          keyExtractor={(item) => item.shopsid}
          key={(item) => item.shopsid}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderColor: '#d1ccc0',
    backgroundColor: '#ffffff',
    padding: '5%',
    marginBottom: 5,
    paddingBottom: '3%',
    elevation: 1,
  },
});
