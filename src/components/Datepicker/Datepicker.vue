<style lang="scss" scoped>
.v-text-field {
  max-width: 130px;
}
</style>
<template>
  <v-menu
    :close-on-content-click="false"
    data-cy="calendar-menu"
    max-width="290px"
    min-width="auto"
    offset-y
    ref="calendarMenu"
    transition="scale-transition"
    v-model="calendarMenu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        append-icon="mdi-calendar-blank"
        aria-label="book-in"
        background-color="white"
        class="subheading"
        clear-icon="$vuetify.icons.big"
        data-cy="input-date"
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
      data-cy="date-picker"
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
  watch: {
    value: function (newVal) {
      this.setDate(newVal);
    },
  },
  created() {
    let stringDate = new Date();
    this.currentDate = stringDate.toISOString();
    this.setDate(this.value);
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
     * Set input date on proper format
     */
    setDate(value) {
      this.dataValue = value;
      this.inputDate = this.inputFormatDate(this.dataValue);
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
