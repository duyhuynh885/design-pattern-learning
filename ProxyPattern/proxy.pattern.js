class Leader {
  receiveRequest(offer) {
    console.log(`Leader:::OK ${offer}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }

  receiveRequest(offer) {
    console.log(`Secretary:::Received ${offer}`);
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }

  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

// how to use

const dev = new Developer("duyhuynh885 upto 5k USD");

dev.applyFor(new Secretary());
