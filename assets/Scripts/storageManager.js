import AsyncStorage from '@react-native-async-storage/async-storage';

// Gets data from storage
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value != null){
            console.log(value);
            return value;
        }
    } catch (err){
        console.log(err);
    }
}

// Sets data in storage
export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log(err);
    }
}

export const storeArray = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@id_List', jsonValue)
    } catch (e) {
    }
  }

  
export const getArray = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@id_List')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(err);
    }
  }
  

 export const removeValue = async (item) => {
    try {
      await AsyncStorage.removeItem(item)
    } catch(e) {
      // remove error
    }
  }

  export const getIdList = async () => {
    const idList = await getArray();
    console.log(idList);
    if (idList == null){
      let array = [];
      storeArray(array);
    }
    return idList;
  }