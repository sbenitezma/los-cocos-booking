<style lang="scss" scoped>
// =============================================================================
// DATEPICKER
// =============================================================================
.v-text-field {
  max-width: 150px;
}
</style>
<template>
  <v-menu
    ref="calendarMenu"
    v-model="calendarMenu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        append-icon="mdi-calendar-blank"
        aria-label="book-in"
        background-color="white"
        clear-icon="$vuetify.icons.big"
        :height="45"
        dense
        outlined
        persistent-hint
        v-bind="attrs"
        v-model="inputDate"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      :min="minDate ? minDate : currentDate"
      elevation="1"
      no-title
      show-current
      v-model="dataValue"
      @input="updateValue"
    ></v-date-picker>
  </v-menu>
</template>
<script>
import { inputFormatDate } from "@/helpers/dateHelpers";

export default {
  name: "Datepicker",
  props: {
    minDate: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    calendarMenu: false,
    currentDate: "",
    dataValue: "",
    inputDate: "",
  }),
  computed: {
    computedDateFormatted() {
      return this.inputFormatDate(this.date);
    },
  },
  created() {
    let stringDate = new Date();
    this.currentDate = stringDate.toISOString();
    this.dataValue = this.value;
    if (Array.isArray(this.dataValue)) {
      this.dataValue = [];
    }
    this.inputDate = this.inputFormatDate(this.dataValue);
  },
  methods: {
    /**
     * Formats the date to display it in custom format (changes from YYYY/MM/DD to DD/MM/YYYY)
     * @param date
     * @returns {*}
     */
    inputFormatDate(date) {
      return inputFormatDate(date);
    },
    /**
     * Update date values
     * @param value
     */
    updateValue(value) {
      this.calendarMenu = false;
      this.dataValue = value;
      this.inputDate = this.inputFormatDate(value);
      this.$emit("updateValue", {
        type: this.type,
        value: this.dataValue,
      });
    },
  },
};
</script>
