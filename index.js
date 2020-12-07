function Scooter(year, color, model) {
        this.year = year;
        this.color = color;
        this.model = model;
    }

scooter = new Scooter(2020, "purple", "Volkswagen");

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

Driver = new Driver("Pat", 80, "Pro driver")

function PickupLocation(address, city) {
    this.address = address
    this.city = city
}

driver = new PickupLocation("2222 wonderland", "New York")