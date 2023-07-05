"use strict";

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }

  // add server
  addServer(server) {
    this.servers.push(server);
  }

  // get next server
  getNextServer() {
    {
      if (!this.servers.length) {
        throw new Error("No server available!");
      }

      const server = this.servers[this.index];

      this.index = (this.index + 1) % this.servers.length;
      return server;
    }
  }
}

const loadBalancer = new RoundRobin();
const loadBalancer1 = new RoundRobin();

loadBalancer.addServer("Server 01");
loadBalancer.addServer("Server 02");
loadBalancer.addServer("Server 03");
loadBalancer.addServer("Server 04");
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());


console.log("compare::", loadBalancer === loadBalancer1);
