import { apiRadioGrafEnvironment } from '../../../../../environments/environment';

export const ApiRadiografEnv = {
  baseUrl: apiRadioGrafEnvironment.hasOwnProperty('baseUrl')
    ? apiRadioGrafEnvironment.baseUrl
    : null,
};
