"use strict";
const Client = require("../models/client_model");
module.exports = {
  // ES6 -> no need to create a key for functions in objects
  // , The function name will be used as the key automatically
  get_all_clients(req, res, next) {
    const limit = parseInt(req.query.limit) || "";
    Client.find({})
      .limit(limit)
      .then((clients) => res.status(200).send(clients))
      .catch(next);
  },
  get_client_details(req, res, next) {
    const clientId = req.params.id;
    Client.findById({ _id: clientId })
      .then((client) => res.status(200).send(client))
      .catch(next);
  },
  create_client(req, res, next) {
    const clientProps = req.body;
    // if client is created successfully change status code,
    // else pass error to the next middleware (which is app errors handler).
    Client.create(clientProps)
      .then((client) => res.status(201).send(client))
      .catch(next);
  },
  update_client(req, res, next) {
    const clientProps = req.body;
    const clientId = req.params.id;
    // Update client
    // - If update successful return the client new object.
    // - If error happened pass it to the next middleware.
    Client.findByIdAndUpdate({ _id: clientId }, clientProps)
      .then(() => Client.findById({ _id: clientId }))
      .then((client) => res.status(200).send(client))
      .catch(next);
  },
  delete_client(req, res, next){
      const clientId = req.params.id;
      Client.findByIdAndRemove({_id: clientId})
      .then(()=> res.status(204).send("Client deleted successfully"))
      .catch(next)
    }
};
