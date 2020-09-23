const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'John Dow', '2012', '+7 999 654 36 25', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Sarah Conor', '2015', '+7 999 111 36 25', 'images/mondeo.jpg'),
    car('BMW', 'X6', 'Bill Gates', '2019', '+7 555 123 36 25', 'images/bmw.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Canselled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        },
        capitalize(value) {
            return value.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
        }
    }
})
