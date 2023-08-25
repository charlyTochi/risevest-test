import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {ENV} from '../config/env';
import {STORAGE_KEYS} from '../enums/storage-keys';

export const deleteEntry = (path, callback, dynToken) => {
  asyncGetData(STORAGE_KEYS.TOKEN, (token, error) => {
    if (!error) {
      Axios.delete(`${ENV.dev}/${path}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          if (callback) {
            return callback(res, null);
          }
        })
        // eslint-disable-next-line no-shadow
        .catch(error => {
          if (callback) {
            return callback(null, error);
          }
        });
    } else {
      if (callback) {
        return callback(null, error);
      }
    }
  });
};

export const getEntry = (path, callback, dynToken) => {
  asyncGetData(STORAGE_KEYS.TOKEN, (token, error) => {
    if (!error) {
      Axios.get(`${ENV.dev}/${path}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          if (callback) {
            return callback(res, null);
          }
        })
        // eslint-disable-next-line no-shadow
        .catch(error => {
          if (callback) {
            return callback(null, error);
          }
        });
    } else {
      if (callback) {
        return callback(null, error);
      }
    }
  });
};

export const createEntry = (path, payload, callback) => {
  try {
    asyncGetData(STORAGE_KEYS.TOKEN, (token, error) => {
      if (!error) {
        Axios.post(`${ENV.dev}/${path}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(res => {
            if (callback) {
              return callback(res, null);
            }
          })
          // eslint-disable-next-line no-shadow
          .catch(error => {
            if (callback) {
              return callback(null, error);
            }
          });
      } else {
        if (callback) {
          return callback(null, error);
        }
      }
    });
  } catch (err) {}
};

export const createEntryNoHeader = (path, payload, callback) => {
  try {
    Axios.post(`${ENV.dev}/${path}`, payload, null)
      .then(res => {
        if (callback) {
          return callback(res, null);
        }
      })
      .catch(error => {
        if (callback) {
          return callback(null, error);
        }
      });
  } catch (e) {}
};

export const getEntryNoHeader = (path, callback) => {
  Axios.get(`${ENV.dev}/${path}`, null)
    .then(res => {
      if (callback) {
        return callback(res, null);
      }
    })
    .catch(error => {
      if (callback) {
        return callback(null, error);
      }
    });
};
export const asyncStoreData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const asyncGetData = async (key, callback) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (callback) {
      return callback(value || null, null);
    }
  } catch (e) {
    // error reading value
    if (callback) {
      return callback(null, e);
    }
  }
};
