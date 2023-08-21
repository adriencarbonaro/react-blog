export default class Poi {
    constructor(
        map_components,
        location_card_components,
        custom_link_components
    ) {
        this.map_components = map_components;
        this.location_card_components = location_card_components;
        this.custom_link_components = custom_link_components;
    }

    map() {
        return this.map_components;
    }

    locationCard() {
        return this.location_card_components;
    }

    customLink() {
        return this.custom_link_components;
    }
}
