// without simple factory pattern

const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "Truck 10",
        doors: 6,
        price: "100.000 VND",
      };
    case "20":
      return {
        name: "Truck 20",
        doors: 16,
        price: "1.000.000 VND",
      };
    default:
      break;
  }
};

console.log(serviceLogistics("20"));

// with simple factory pattern

class ServiceLogistics {
  constructor(doors = 6, price = "100.000 VND", name = "Truck 10") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics();
      case "20":
        return new ServiceLogistics(16, "100.000 VND", "Truck 20");
      default:
        break;
    }
  };
}

console.log(ServiceLogistics.getTransport("20"));
