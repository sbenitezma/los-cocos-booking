describe("Display Los Cocos Bungalows Desktop Application", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
  });

  describe("Test elements rendered on header/footer Navigation", () => {
    it("Navbar element is visible", () => {
      cy.get("[data-cy='navbar']")
        .should("be.visible")
        .should("not.be.empty")
        .find("div[class='v-toolbar__content']")
        .should("be.visible");
    });

    it("Test number of Navbar elements rendered on header Navbar", () => {
      cy.get("[data-cy=navbar]")
        .find("div[class='v-toolbar__content']")
        .find("[data-cy*='header-nav-list-']")
        .should("have.length", "7")
        .each(($el, $index) => {
          if ($index !== 3) {
            cy.wrap($el)
              .find("a")
              .find(".v-btn__content")
              .should("be.visible")
              .should("not.be.empty");
          } else {
            cy.wrap($el)
              .find("[data-cy=los-cocos-logo]")
              .should("have.attr", "style")
              .should("include", "min-width: 100px;");
            cy.wrap($el)
              .find("[data-cy=los-cocos-logo]")
              .should("be.visible")
              .should("not.be.empty")
              .find("div[class='v-image__image v-image__image--contain']")
              .and("have.css", "background-image")
              .and("include", "los-cocos-logo");
          }
        });
    });

    it("Footer menu section is visible", () => {
      cy.get("[data-cy='footer']")
        .should("be.visible")
        .should("not.be.empty")
        .find("div[class='v-toolbar__content']")
        .should("be.visible");
    });

    it("Left footer menu elements are 4 and visible", () => {
      cy.get("[data-cy='footer']")
        .find("div[class='v-toolbar__content']")
        .find("[data-cy*='footer-nav-list-']")
        .should("have.length", "4")
        .each(($el) => {
          cy.wrap($el)
            .find("a")
            .find(".v-btn__content")
            .should("be.visible")
            .should("not.be.empty");
        });
    });

    it("Social Media section is visible and not empty", () => {
      cy.get("[data-cy='footer']")
        .find("div[class='v-toolbar__content']")
        .find("[data-cy*='social-nav-list-']")
        .should("have.length", "4")
        .each(($el) => {
          cy.wrap($el)
            .find(".v-btn__content")
            .should("be.visible")
            .should("not.be.empty");
        });
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

    it("Booking form section is visible", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-desktop']")
        .should("be.visible")
        .should("not.be.empty");
    });

    it("Booking form section has proper background image", () => {
      cy.get("div[class='hotel-section']")
        .find("[data-cy='occupancy-form-background']")
        .should("be.visible")
        .should("not.be.empty")
        .find("div[class='v-image__image v-image__image--contain']")
        .and("have.css", "background-image")
        .and("include", "los-cocos-room-header-2-x");
    });

    it("There are 5 form elements", () => {
      cy.get("[data-cy*='occupancy-form-desktop']")
        .find("[data-cy*='booking-form']")
        .find("div[class*='v-toolbar__title']")
        .should("have.length", 5);
    });

    it("CheckIn and CheckOut form values are today and tomorrow", () => {
      cy.get("[data-cy*='occupancy-form-desktop']")
        .find("[data-cy*='booking-form']")
        .find("div[class*='v-toolbar__title']")
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
      cy.get("[data-cy*='occupancy-form-desktop']")
        .find("[data-cy*='booking-form']")
        .find("[data-cy*='form-occupancyAdults']")
        .find("div[class='v-select__selection v-select__selection--comma']")
        .should("be.visible")
        .should("have.text", "Adults: 1");
    });

    it("Children occupancy selector is displayed properly with first selected value", () => {
      cy.get("[data-cy*='occupancy-form-desktop']")
        .find("[data-cy*='booking-form']")
        .find("[data-cy*='form-occupancyChildren']")
        .find("div[class='v-select__selection v-select__selection--comma']")
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
        .should("have.class", "col-md-6")
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

    it("Summary jar is displayed properly", () => {
      cy.get("div[class='hotel-section']")
        .find("div[class*='rooms-rates']")
        .find("[data-cy='hotel-jar']")
        .find("div[id='HotelJar']")
        .find("div[class^='v-image__image']")
        .and("have.css", "background-image")
        .and("include", "los-cocos-img-bg");
    });
  });

  describe("Test Hotel Rooms container", () => {
    it("Hotel Rooms container is displayed properly", () => {
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

    it("Room card elements are shown", () => {
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
            .should("be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-floor-size']")
            .find("p")
            .contains("Size:")
            .should("be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='double-room-icon']")
            .find("div[class*='v-image__image v-image__image--contain']")
            .should("be.visible")
            .and("have.css", "background-image")
            .and("include", "double-bed");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-beds-number']")
            .contains("Beds:")
            .should("be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-occupancy']")
            .contains("People:")
            .should("be.visible")
            .should("not.be.empty");
          cy.wrap($el)
            .find("[data-cy*='room-card']")
            .find("[data-cy*='room-price']")
            .contains("€")
            .should("be.visible")
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
