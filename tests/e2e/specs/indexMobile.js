describe("Display Los Cocos Bungalows Mobile Application", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(360, 640);
  });

  describe("Test navigation menu", () => {
    it("Test Hamburguer menu is visible and clickable", () => {
      cy.get("[data-cy='navbar']")
        .find("div[class='v-toolbar__content']")
        .find("button")
        .should("have.class", "v-app-bar__nav-icon")
        .should("be.visible")
        .should("not.be.empty")
        .click();
      cy.get("[data-cy=mobile-navigation-menu]").should("be.visible");
    });

    it("Test number of Navbar elements rendered on Navigation Drawer", () => {
      cy.get("[data-cy='navbar']")
        .find("div[class='v-toolbar__content']")
        .find("button")
        .click();
      cy.get("[data-cy=mobile-navigation-menu]")
        .find("[data-cy*='header-nav-list-']")
        .should("have.length", "15")
        .each(($el, $index) => {
          if ($index !== 3) {
            cy.wrap($el)
              .find("[data-cy=nav-menu-icon]")
              .should("be.visible")
              .should("have.class", "v-icon");
            cy.wrap($el)
              .find("[data-cy=nav-menu-text]")
              .should("be.visible")
              .should("not.be.empty");
          } else {
            cy.wrap($el)
              .find("[data-cy=los-cocos-icon-mobile]")
              .should("have.attr", "style")
              .should("include", "min-width: 50px;");
            cy.wrap($el)
              .find("[data-cy=los-cocos-icon-mobile]")
              .should("be.visible")
              .should("not.be.empty")
              .find("div[class='v-image__image v-image__image--contain']")
              .and("have.css", "background-image")
              .and("include", "los-cocos-logo");
          }
        });
    });

    it("Test footer menu section is not displayed", () => {
      cy.get("[data-cy='footer']")
        .find("div[class='v-toolbar__content']")
        .should("not.be.visible");
    });
  });

  describe("Test Booking form section", () => {
    let checkInDate = new Date();
    let checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + 1);

    let d = checkInDate,
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    checkInDate = [day, month, year].join("/");

    (d = checkOutDate),
      (month = "" + (d.getMonth() + 1)),
      (day = "" + d.getDate()),
      (year = d.getFullYear());

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    checkOutDate = [day, month, year].join("/");

    it("Booking form destkop section is NOT visible", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-desktop']")
        .should("not.be.visible")
        .should("not.be.empty");
    });

    it("Booking form mobile section is visible", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-mobile']")
        .should("be.visible")
        .should("not.be.empty");
    });

    it("Booking form section has not background image", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-background']")
        .should("not.be.visible");

      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-mobile']")
        .should("have.class", "mobile-booking-section");
    });

    it("There are 5 form elements", () => {
      cy.get("[data-cy*='occupancy-form-desktop']")
        .find("[data-cy*='booking-form']")
        .find("div[class*='v-toolbar__title']")
        .should("have.length", 5);
    });

    it("CheckIn and CheckOut form values are today and tomorrow", () => {
      cy.get("[data-cy*='occupancy-form-mobile']")
        .find("div[class*='v-input']")
        .find("[data-cy*='input-date']")
        .each(($el, $index) => {
          if ($index === 0) {
            cy.wrap($el).should("have.value", checkInDate);
          } else {
            cy.wrap($el).should("have.value", checkOutDate);
          }
        })
        .should("be.visible");
    });

    it("Adults occupancy selector is displayed properly with first selected value", () => {
      cy.get("[data-cy*='occupancy-form-desktop']").should("not.be.visible");
      cy.get("[data-cy*='occupancy-form-mobile']")
        .find("div[class='v-select__selection v-select__selection--comma']")
        .first()
        .should("be.visible")
        .should("have.text", "Adults: 1");
    });

    it("Children occupancy selector is displayed properly with first selected value", () => {
      cy.get("[data-cy*='occupancy-form-mobile']")
        .find("div[class='v-select__selection v-select__selection--comma']")
        .last()
        .should("be.visible")
        .should("have.text", "Children: 0");
    });
  });

  describe("Test 'Rooms & Rates' section", () => {
    it("'Rooms & Rates' title is displayed properly", () => {
      cy.get("div[class='hotel-section']")
        .find("div[class*='rooms-rates']")
        .should("be.visible")
        .should("not.be.empty")
        .find("div[class*='col-']")
        .should("have.class", "col-12")
        .find("h2")
        .should("have.text", "Rooms & Rates");
    });

    it("Subtitle is displayed properly", () => {
      cy.get("div[class='hotel-section']")
        .find("div[class*='rooms-rates']")
        .find("p")
        .should("have.text", "Plan your perfect stay at our hotel");
    });

    it("Steps wizard image is displayed properly", () => {
      cy.get("div[class='hotel-section']")
        .find("div[class*='rooms-rates']")
        .find("div[class^='v-image__image']")
        .and("have.css", "background-image")
        .and("include", "los-cocos-1");
    });
  });

  describe("Test Hotel Rooms container", () => {
    it("Hotel Rooms container is displayed", () => {
      cy.get("[data-cy='container']")
        .should("be.visible")
        .should("not.be.empty")
        .find("div[class='hotel-section']")
        .should("be.visible")
        .should("not.be.empty");
    });

    it("Hotel Rooms number is 3", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy*='hotel-rooms-list']")
        .find("[data-cy*='room-list-']")
        .should("have.length", "3");
    });

    it("Test Room card elements are shown", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy*='hotel-rooms-list']")
        .find("[data-cy*='room-list-']")
        .each(($el) => {
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .should("be.visible")
            .should("not.be.empty")
            .find("[data-cy*='room-photo']")
            .find("div[class*='v-image__image']")
            .should("be.visible")
            .and("have.css", "background-image")
            .and("include", "room_");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-name-type']")
            .should("be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-description']")
            .should("not.be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-floor-size']")
            .find("p")
            .contains("Size:")
            .should("not.be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='double-room-icon']")
            .find("div[class*='v-image__image v-image__image--contain']")
            .should("not.be.visible")
            .and("have.css", "background-image")
            .and("include", "double-bed");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-beds-number']")
            .contains("Beds:")
            .should("not.be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-occupancy']")
            .contains("People:")
            .should("not.be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-price']")
            .contains("€")
            .should("not.be.visible")
            .should("not.be.empty");
        });
    });
  });
  describe("Test Summary booking section", () => {
    it("Hotel Summary container is displayed properly", () => {
      cy.get("[data-cy='booking-summary']")
        .should("be.visible")
        .should("not.be.empty");
    });

    it("Reservation Summary card title is shown", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-summary-title']")
        .should("be.visible")
        .should("not.be.empty")
        .should("have.text", " Reservation Summary ");
    });

    it("Booking Room name and Type are empty", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-room-name']")
        .should("have.text", "  ");

      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-room-type']")
        .should("have.text", "  ");
    });

    it("Booking CheckIn/CheckOut time is shown", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-summary-checkInTime']")
        .should("be.visible")
        .should("have.text", " From 15.00h ");

      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-summary-checkOutTime']")
        .should("be.visible")
        .should("have.text", " To 12.00h ");
    });

    it("Booking Reservation date is empty", () => {
      cy.get("[data-cy='booking-reservation-date']")
        .find("span[class='subheading-3']")
        .first()
        .should("be.visible")
        .should("have.text", "Reservation Date");
    });

    it("Booking occupancy Title is visible", () => {
      cy.get("[data-cy='booking-reservation-date']")
        .find("span[class='subheading-3']")
        .last()
        .should("be.visible")
        .should("have.text", "People");
    });

    it("Booking Adults occupancy 0  is visible", () => {
      cy.get("[data-cy='booking-reservation-date']")
        .find("[data-cy*='booking-adultsOccupancy']")
        .should("be.visible")
        .should("have.text", " Adults: 0 ");
    });

    it("Booking Children occupancy 0 is visible", () => {
      cy.get("[data-cy='booking-reservation-date']")
        .find("[data-cy*='booking-childrenOccupancy']")
        .should("be.visible")
        .should("have.text", " Children: 0 ");
    });

    it("Booking Subtotal title is visible", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-subtotal']")
        .should("be.visible")
        .should("have.text", "Subtotal");
    });

    it("Booking Subtotal price is €0 and visible", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-price']")
        .should("be.visible")
        .should("have.text", "€0");
    });

    it("Booking Discount title is visible", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-discount']")
        .should("be.visible")
        .should("have.text", "Discount");
    });

    it("Booking Promocode is visible but 0%", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-promoCode']")
        .should("be.visible")
        .should("have.text", "0%");
    });

    it("Booking total price is visible but €0", () => {
      cy.get("[data-cy='booking-summary']")
        .find("[data-cy*='booking-totalPrice']")
        .should("be.visible")
        .should("have.text", "€0");
    });
  });
});
