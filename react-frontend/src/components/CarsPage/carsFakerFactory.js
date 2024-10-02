
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
model: faker.datatype.number(""),
make: faker.datatype.number(""),
year: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
