<reference path="ymaps.d.ts" />
<template>
  <div class="card">
    <p class="card__desc">Выбрать на карте:</p>
    <div id="map" class="card__map"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, defineProps, defineEmits, onUpdated } from "vue";

const props = defineProps({
  valuePvz: {
    type: String,
    default: "",
  },
  valueCity: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["getObjects"]);

let newCoords: number[] = [];

const ymaps = window.ymaps;

const myMap = () =>
  new ymaps.Map("map", {
    center: [54.30327383672103, 48.600127895911314],
    zoom: 10,
    controls: [],
  });

ymaps.ready().then(() => myMap);

const myPlacemark = new ymaps.Placemark(newCoords, {
  hintConten: props.valuePvz,
});

const geoObject = () => {
  let fullValue = `${props.valueCity}, ${props.valuePvz}`;

  if (props.valuePvz && props.valueCity) {
    ymaps
      .geocode(fullValue, {
        results: 1,
      })
      .then((res: any) => {
        let firstGeoObject = res.geoObjects.get(0);
        newCoords = firstGeoObject.geometry.getCoordinates();

        let bounds = firstGeoObject.properties.get("boundedBy");

        myMap.value.setBounds(bounds, {
          checkZoomRange: true,
        });

        myMap.value.geoObjects.add(myPlacemark);
      });
  }
  return fullValue;
};

onUpdated(() => {
  geoObject();
});
</script>

<style scoped lang="scss">
.card {
  @include flex-column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  margin-top: calc(45px - 16px);

  #map {
    width: 100% !important;
    height: 352px;

    filter: grayscale(0.8);
    -webkit-filter: grayscale(0.8);
    -moz-filter: grayscale(0.8);
    -o-filter: grayscale(0.8);
  }

  &__desc {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;

    margin-bottom: 16px;
  }

  ymaps {
    width: 100%;
  }
}
</style>
