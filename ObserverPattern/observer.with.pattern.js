class Observer {
  constructor(name) {
    // sniper, riki
    this.namePick = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick}::::PING::::${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserverList(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const subject = new Subject();

const riki = new Observer("Riki");
const sniper = new Observer("Sniper");

subject.addObserverList(riki);
subject.addObserverList(sniper);

// push location to team

subject.notify({ long: 123, lat: 345 });
