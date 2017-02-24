/**
 *
 * @providesModule restful
 *
 */

import 'react-native';

// o tipo do corpo de uma requisição
export type PayloadType = string | Object;

// o tipo do retorno de um pedido
export type ResultType = { status: string,
                           error: null | string,
                           response: null | Promise<Object>
                         };


export interface Restful {
  get(resource: string): Promise<Response>;
  post(resource: string, data: PayloadType): Promise<Response>;
  put(resource: string, data: PayloadType): Promise<Response>;
  patch(resource: string, data: PayloadType): Promise<Response>;
  delete(resource: string, data: PayloadType): Promise<Response>;
}
