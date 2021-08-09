<template>
  <v-overlay :value="value" opacity="0.5" absolute>
    <v-progress-circular
      :color="color"
      data-cy="progress-circular"
      indeterminate
      :size="size"
    ></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  name: "ProgressCircular",
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "50",
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  },
};
</script>
