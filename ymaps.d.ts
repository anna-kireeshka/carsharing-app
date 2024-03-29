declare namespace ymaps {
  export function ready(): Promise;

  export function geocode(valueCity: string, param2: { results: number });

  export class Map {
    geoObjects: any;
    controls: any;

    constructor(element: string | any, state: MapState);
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setBounds(bounds: any, param2: { checkZoomRange: boolean });
    getCenter();
  }

  export class Placemark {
    constructor(
      element: string | any,
      state: {
        hintContent: string;
      },
      options: {
        iconLayout: string;
        iconImageHref: string;
        iconImageSize: number[];
      }
    );
  }
  export class MapState {
    center: number[];
    controls: string[];
    zoom: number;
  }
}
declare namespace ymaps.templateLayoutFactory {
  export function createClass(element: string);
}

// export { Ymaps };

// export = Ymaps;
// export as namespace Ymaps;
