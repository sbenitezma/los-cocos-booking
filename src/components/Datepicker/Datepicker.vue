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
      :min="currentDate"
      elevation="1"
      no-title
      show-current
      v-model="dataValue"
      @input="updateValue"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "Datepicker",
  created() {
    let stringDate = new Date();
    this.updateValue(this.formatDate());
    this.currentDate = stringDate.toISOString();
  },
  computed: {
    computedDateFormatted() {
      return this.inputFormatDate(this.date);
    },
  },
  data: () => ({
    calendarMenu: false,
    currentDate: "",
    dataValue: "",
    inputDate: "",
  }),
  methods: {
    /**
     * Formats the date to display it in custom format (changes from YYYY/MM/DD to DD/MM/YYYY)
     * @param date
     * @returns {*}
     */
    inputFormatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    /**
     * Initial format date for Datepicker component
     */
    formatDate() {
      let d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    /**
     * Update date values
     * @param value
     */
    updateValue(value) {
      this.calendarMenu = false;
      this.dataValue = value;
      this.inputDate = this.inputFormatDate(value);
    },
  },
};
</script>
