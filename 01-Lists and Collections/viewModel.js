// Classe para representar uma linha na grade de reservas de assento
class SeatReservation {
  constructor(name, initialMeal) {
    let self = this
    self.name = name
    self.meal = ko.observable(initialMeal)
  }
}

// ViewModel geral para esta tela, juntamente com o estado inicial
class ReservationsViewModel {
  constructor() {
    let self = this

    // Dados de catalogo não editáveis - viria de um servidor
    self.availablesMeals = [
      {mealName: "Standard (sandwich)", price: 0},
      {mealName: "Premium (lobster)", price: 34.95},
      {mealName: "Ultimate (whole zebra)", price: 290}
    ]

    // Dados editáveis
    self.seats = ko.observableArray([
      new SeatReservation("João", self.availablesMeals[0]),
      new SeatReservation("Bert", self.availablesMeals[1]),
      new SeatReservation("Steve", self.availablesMeals[2])
    ])
  }
}

ko.applyBindings(new ReservationsViewModel())