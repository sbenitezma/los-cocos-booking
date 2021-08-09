# Los-cocos-booking

> This is an application Based on Vuejs 2.6 Front-end Framework.

## Purpose

The goal of this project is to implement a Los Cocos Hotel website based in the given look and feel that satisfies the scenarios below:
- View the rooms of the Hotel
- Display form to select checkIn, checkOut and occupancy for the room
- Set checkIn date to today by default
- Set checkOut date to tomorrow by default
- Book a room if the occupancy and checkIn fits
- Apply Promo Code by URL and get the according discount on the final price

## Main Packages
* Vue-cli
* Vuetify
* Vuex
* Vuedoc
* Jest
* Cypress
* Sass
* MDI Icons
* Eslint

## Components

### BookingForm

Component to display/select the booking form date and occupancy
````
#### Data

| Name                | Type     | Description | Initial value                                                                                                                                     |
| ------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkInDate`       | `string` |             | `""`                                                                                                                                              |
| `checkOutDate`      | `string` |             | `""`                                                                                                                                              |
| `selectAdults`      | `object` |             | `{}`                                                                                                                                              |
| `selectChildren`    | `object` |             | `{}`                                                                                                                                              |
| `occupancyAdults`   | `array`  |             | `[ { type: "Adults: 1", value: 1 }, { type: "Adults: 2", value: 2 }, { type: "Adults: 3", value: 3 }, { type: "Adults: 4", value: 4 }, ]`         |
| `occupancyChildren` | `array`  |             | `[ { type: "Children: 0", value: 0 }, { type: "Children: 1", value: 1 }, { type: "Children: 2", value: 2 }, { type: "Children: 3", value: 3 }, ]` |

#### Methods

#### getHeaderImage()

Get Booking form Header Image

#### setBooking()

Set Booking information

#### updateValue()

Update date values

#### formatDate()

Initial format date for Datepicker component
````

## BookingSummary

Component to display/select the booking summary information

````
### Computed Properties

| Name                 | Type      | Description                                                                                 |
| -------------------- | --------- | ------------------------------------------------------------------------------------------- |
| `getDisabledBooking` | `boolean` | Get Button disabled according restrictions<br/>**Dependencies:** `hotelRoom`, `bookingInfo` |

### Methods

#### finishBooking()

Finish booking action

#### parseDate()

Parse date into input format dd/mm/YYYY
````

## Datepicker

Component to display the date picker in booking form

````
### Props

| Name                 | Type      | Description | Default     |
| -------------------- | --------- | ----------- | ----------- |
| `minDate` *required* | `String` |              | ``          |
| `type`               | `String`  |             | ``          |
| `value`              | `String`  |             | ``          |

### Computed Properties

| Name                    | Type      | Description                                                                                 |
| ----------------------- | --------- | ----------------------------------- |
| `computedDateFormatted` | `String`  | Get date formatted in proper format |


### Methods

#### inputFormatDate()
Formats the date to display it in custom format (changes from YYYY/MM/DD to DD/MM/YYYY)

#### setDate()
Set input date on proper format

#### updateValue()
Update date values
````

## Footer

Component to display footer information on Desktop/Tablet (sm) devices
````
### Methods

#### getCocosLogo()

Get footer logo
````

## HotelRooms
Component to display hotel rooms
````
### Methods

### getRoomIcon()

Get double bed icon

**Syntax**

```typescript
getRoomIcon(): void
```

### getRoomPhoto()

Get Custom icon by name


### selectRoom()

Select room to book
````

## Navbar
Component to display navbar information on Destkop/Tablet and mobile devices
````
### Data

| Name     | Type      | Description | Initial value |
| -------- | --------- | ----------- | ------------- |
| `drawer` | `boolean` |             | `false`       |

### Methods

#### getLogo()

Get Custom icon by name
````

## ProgressCircular
Component to display a progress circular meanwhile information is loaded
````
### Props

| Name                 | Type      | Description | Default     |
| -------------------- | --------- | ----------- | ----------- |
| `v-model` *required* | `Boolean` |             | `false`     |
| `size`               | `String`  |             | `"50"`      |
| `color`              | `String`  |             | `"primary"` |

````

## Test Coverage

### Unit (Jest)

````
 PASS  src/components/Datepicker/Datepicker.spec.js
 PASS  src/components/ProgressCircular/ProgressCircular.spec.js
 PASS  src/store/headerMenu/headerGetters.spec.js
 PASS  src/store/hotel/hotelMutations.spec.js
 PASS  src/store/socialMedia/socialMediaGetters.spec.js
 PASS  src/components/Booking/BookingForm.spec.js
 PASS  src/store/hotel/hotelActions.spec.js
 PASS  src/store/hotel/hotelGetters.spec.js
 PASS  src/components/Navbar/Navbar.spec.js
 PASS  src/components/Footer/Footer.spec.js
 PASS  src/components/HotelRooms/HotelRooms.spec.js
 PASS  src/store/app/appGetters.spec.js
 PASS  src/components/Booking/BookingSummary.spec.js
 PASS  src/store/footerMenu/footerGetters.spec.js
 PASS  src/store/app/appMutations.spec.js

------------------------|----------|----------|----------|----------|-------------------|
File                    |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------|----------|----------|----------|----------|-------------------|
All files               |    64.38 |    38.18 |    66.04 |    63.46 |                   |
 components/Booking     |       70 |    43.48 |    77.78 |       70 |                   |
  BookingForm.vue       |    70.97 |    56.25 |    83.33 |    70.97 |... 61,265,276,292 |
  BookingSummary.vue    |    66.67 |    14.29 |    66.67 |    66.67 |       207,225,226 |
 components/Datepicker  |    57.14 |      100 |    57.14 |    57.14 |                   |
  Datepicker.vue        |    57.14 |      100 |    57.14 |    57.14 |... 06,107,108,109 |
 components/Footer      |       80 |       50 |      100 |       80 |                   |
  Footer.vue            |       80 |       50 |      100 |       80 |                98 |
 components/HotelRooms  |    33.33 |       25 |    33.33 |    33.33 |                   |
  HotelRooms.vue        |    33.33 |       25 |    33.33 |    33.33 |... 34,142,146,147 |
 components/Navbar      |    42.86 |        0 |       50 |    42.86 |                   |
  Navbar.vue            |    42.86 |        0 |       50 |    42.86 |   114,115,116,118 |
 helpers                |      100 |    83.33 |      100 |      100 |                   |
  dateHelpers.js        |      100 |    83.33 |      100 |      100 |                23 |
 store/app              |    77.78 |        0 |       75 |    77.78 |                   |
  appActions.js         |    33.33 |        0 |        0 |    33.33 |             10,11 |
  appGetters.js         |      100 |      100 |      100 |      100 |                   |
  appMutations.js       |      100 |      100 |      100 |      100 |                   |
  index.js              |      100 |      100 |      100 |      100 |                   |
 store/footerMenu       |      100 |      100 |      100 |      100 |                   |
  footerGetters.js      |      100 |      100 |      100 |      100 |                   |
  index.js              |      100 |      100 |      100 |      100 |                   |
 store/headerMenu       |    66.67 |      100 |       50 |    66.67 |                   |
  headerGetters.js      |    66.67 |      100 |       50 |    66.67 |                17 |
 store/hotel            |    51.06 |       25 |    57.89 |       50 |                   |
  hotelActions.js       |    23.08 |     8.33 |    16.67 |    23.08 |... 45,54,55,64,65 |
  hotelGetters.js       |      100 |      100 |      100 |      100 |                   |
  hotelMutations.js     |    43.48 |       50 |       50 |    43.48 |... 48,49,50,51,67 |
 store/socialMedia      |      100 |      100 |      100 |      100 |                   |
  index.js              |      100 |      100 |      100 |      100 |                   |
  socialMediaGetters.js |      100 |      100 |      100 |      100 |                   |
------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 15 passed, 15 total
Tests:       26 passed, 26 total
Snapshots:   1 passed, 1 total
Time:        21.351s
Ran all test suites.
```` 

### E2E (Cypress)

````
 Display Los Cocos Bungalows Desktop Application
    Test elements rendered on header/footer Navigation
      √ Navbar element is visible (29913ms)
      √ Test number of Navbar elements rendered on header Navbar (1594ms)
      √ Footer menu section is visible (683ms)
      √ Left footer menu elements are 4 and visible (663ms)
      √ Social Media section is visible and not empty (785ms)
    Test Booking form section
      √ Booking form section is visible (711ms)
      √ Booking form section has proper background image (1161ms)
      √ There are 5 form elements (868ms)
      √ CheckIn and CheckOut form values are today and tomorrow (769ms)
      √ Adults occupancy selector is displayed properly with first selected value (649ms)
      √ Children occupancy selector is displayed properly with first selected value (646ms)
    Test 'Rooms & Rates' section
      √ 'Rooms & Rates' title is displayed properly (852ms)
      √ Subtitle is displayed properly (793ms)
      √ Steps wizard image is displayed properly (1494ms)
      √ Summary jar is displayed properly (1558ms)
    Test Hotel Rooms container
      √ Hotel Rooms container is displayed properly (785ms)
      √ Hotel Rooms number is 3 (679ms)
      √ Room card elements are shown (1987ms)
    Test Summary booking section
      √ Hotel Summary container is displayed properly (719ms)
      √ Reservation Summary card title is shown (684ms)
      √ Booking Room name and Type are empty (616ms)
      √ Booking CheckIn/CheckOut time is shown (655ms)
      √ Booking Reservation date is empty (616ms)
      √ Booking occupancy Title is visible (633ms)
      √ Booking Adults occupancy 0  is visible (608ms)
      √ Booking Children occupancy 0 is visible (627ms)
      √ Booking Subtotal title is visible (641ms)
      √ Booking Subtotal price is €0 and visible (596ms)
      √ Booking Discount title is visible (604ms)
      √ Booking Promocode is visible but 0% (622ms)
      √ Booking total price is visible but €0 (723ms)
  31 passing (55s)
   (Results)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        31                                                                               │
  │ Passing:      31                                                                               │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     55 seconds                                                                       │
  │ Spec Ran:     index.js                                                                         │
  └─────────────────────────────────────────────────────────────────────────────────────────────
 
 Display Los Cocos Bungalows Mobile Application
    Test navigation menu
      √ Test Hamburguer menu is visible and clickable (2485ms)
      √ Test number of Navbar elements rendered on Navigation Drawer (2062ms)
      √ Test footer menu section is not displayed (738ms)
    Test Booking form section
      √ Booking form destkop section is NOT visible (700ms)
      √ Booking form mobile section is visible (786ms)
      √ Booking form section has not background image (720ms)
      √ There are 5 form elements (729ms)
      √ CheckIn and CheckOut form values are today and tomorrow (737ms)
      √ Adults occupancy selector is displayed properly with first selected value (817ms)
      √ Children occupancy selector is displayed properly with first selected value (735ms)
    Test 'Rooms & Rates' section
      √ 'Rooms & Rates' title is displayed properly (806ms)
      √ Subtitle is displayed properly (682ms)
      √ Steps wizard image is displayed properly (1308ms)
    Test Hotel Rooms container
      √ Hotel Rooms container is displayed (716ms)
      √ Hotel Rooms number is 3 (794ms)
      √ Test Room card elements are shown (2102ms)
    Test Summary booking section
      √ Hotel Summary container is displayed properly (1046ms)
      √ Reservation Summary card title is shown (2908ms)
      √ Booking Room name and Type are empty (819ms)
      √ Booking CheckIn/CheckOut time is shown (778ms)
      √ Booking Reservation date is empty (725ms)
      √ Booking occupancy Title is visible (713ms)
      √ Booking Adults occupancy 0  is visible (815ms)
      √ Booking Children occupancy 0 is visible (786ms)
      √ Booking Subtotal title is visible (650ms)
      √ Booking Subtotal price is €0 and visible (793ms)
      √ Booking Discount title is visible (781ms)
      √ Booking Promocode is visible but 0% (789ms)
      √ Booking total price is visible but €0 (761ms)
  29 passing (30s)
 (Results)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        29                                                                               │
  │ Passing:      29                                                                               │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     30 seconds                                                                       │
  │ Spec Ran:     indexMobile.js                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  index.js                                 00:55       31       31        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  indexMobile.js                           00:30       29       29        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        01:25       60       60        -        -        -  

All files
65% Statements 104/160
38.18% Branches 21/55
67.92% Functions 36/53
64.1% Lines 100/156
````

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

