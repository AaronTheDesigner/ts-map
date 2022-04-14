import faker from 'faker'

export class User {
    name: string;
    // object within class needs to be initialized
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        // generate a first name
        this.name = faker.name.firstName();
        //mirror location declaration above
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }

    }
}
