<!--<script src="../ymaps.d.ts"></script>-->
<reference path="ymaps.d.ts" />
<template>
  <div class="card">
    <p class="card__desc">Выбрать на карте:</p>
    <div id="map" class="card__map"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CardMap extends Vue {
  created() {
    ymaps.ready().then((coords:any) => {
      let myMap = new ymaps.Map("map", {
        center: [54.36927208, 48.15935496],
        zoom: 9,
        controls: []
      });

       ymaps.geocode(this.valueCity, {
          results: 1,
        })
         .then(function (res: any) {
           let firstGeoObject =  res.geoObjects.get(0),
             coords = firstGeoObject.geometry.getCoordinates(),
             bounds = firstGeoObject.properties.get("boundedBy");

          firstGeoObject.options.set(
            "preset",
            "islands#darkBlueDotIconWithCaption"
          );
          firstGeoObject.properties.set(
            "iconCaption",
            firstGeoObject.getAddressLine()
          );

          myMap.geoObjects.add(firstGeoObject);
          myMap.setBounds(bounds, {
            checkZoomRange: true,
          });

           const myPlacemark = new ymaps.Placemark(coords, {
             iconLayout: "default#image",
             iconImageHref: "../assets/svg/mark.svg",
             iconImageSize: [30, 42],
             iconImageOffset: [-5, -38]
           });
           myMap.geoObjects.add(myPlacemark);
        });

      ymaps
        .findOrganization(this.pvzId)
        .then(function (orgGeoObject: { balloon: { open: () => void } }) {
          myMap.geoObjects.add(orgGeoObject);
        });
    });
  }

  get valueCity() {
    return this.$store.state.location.valueCity;
  }

  get pvzValue() {
    return this.$store.state.location.valuePvz;
  }

  get pvzId() {
    return this.$store.state.location.pvzId;
  }
}
</script>

<style scoped lang="scss">
.card {
  @include flex-column;
  align-items: flex-start;
  margin-top: calc(45px - 16px);
  #map {
    width: 736px;
    height: 352px;

    filter: grayscale(0.65);
    -ms-filter: grayscale(0.65);
    -webkit-filter: grayscale(0.65);
    -moz-filter: grayscale(0.65);
    -o-filter: grayscale(0.65);
  }
  &__desc {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;

    margin-bottom: 16px;
  }
}
</style>
