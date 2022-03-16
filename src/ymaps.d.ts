declare namespace ymaps {
  export function ready(): Promise;

  export function geocode(valueCity: string, param2: { results: number });

  export function findOrganization(pvzId: number);
  class Promise {
    then(
      // eslint-disable-next-line @typescript-eslint/ban-types
      onFulfilled?: Function,
      // eslint-disable-next-line @typescript-eslint/ban-types
      onRejected?: Function,
      // eslint-disable-next-line @typescript-eslint/ban-types
      onProgress?: Function,
      ctx?: any
    ): Promise;
  }

  export class Map {
    geoObjects: any;
    controls: any;

    constructor(element: string | any, state: MapState);

    setBounds(bounds: any, param2: { checkZoomRange: boolean });
  }

  export class MapState {
    center: number[];
    controls: string[];
    zoom: number;
  }
}
