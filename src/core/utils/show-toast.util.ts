import Toast from 'react-native-toast-message';
import {ResponseType} from '../enums/response-type.enum';

export default (responseType: ResponseType, message?: string) => {
  let errorMessage =
    'An error occured. We are working to fix this please try again after some time';
  Toast.show({
    type: responseType,
    text1:
      responseType === ResponseType.error
        ? 'Error'
        : responseType === ResponseType.success
        ? 'Success'
        : '',
    position: 'bottom',
    text2:
      responseType === ResponseType.error && !message ? errorMessage : message,
  });
};
