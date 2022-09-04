<template>
    <v-snackbar class="snackbar-absolute-z-index" top :color="isAdd ? 'green' : 'red' " v-model="show" :timeout="-1">
      {{ isAdd ? `Product Added To  ${isFav ? 'Favourite List' : 'Cart' } Successfully` : `Product Removed From ${isFav ? 'Favourite List' : 'Cart' }` }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="$emit('hideSnackbar')"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    name: "Alert",
    props:{
        isAdd:{
            type: Boolean
        },
        isFav:{
            type: Boolean
        },
        show:{
            type: Boolean
        }
    },
}
</script>

<style>
.v-snack {
  z-index: 99 !important;
}

@media(max-width: 400px){
  .v-snack__wrapper {
    flex-basis: 280px !important;
    min-width: auto
  }
}

</style>