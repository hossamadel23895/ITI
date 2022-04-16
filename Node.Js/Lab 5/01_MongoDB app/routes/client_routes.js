"use strict";
const ClientController = require("../controllers/clients_controller");
module.exports = (app) => {
  app.get("/api/clients", ClientController.get_all_clients);
  app.get("/api/clients/:id", ClientController.get_client_details);
  app.post("/api/clients", ClientController.create_client);
  app.put("/api/clients/:id", ClientController.update_client);
  app.delete("/api/clients/:id", ClientController.delete_client);
};
