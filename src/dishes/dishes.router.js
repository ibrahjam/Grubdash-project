const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed")

// TODO: Implement the /dishes routes needed to make the tests pass


router
    .route("/")
    // to make a get request that uses list()
    .get(controller.list)
    // make post request to create new dish using create().
    .post(controller.create)
    // for request types that arent available to use on dish.
    .all(methodNotAllowed)


router
    .route("/:dishId")
    // to make a get request that uses read()
    .get(controller.read)
    // makes put request that uses update() to udpate a dish.
    .put(controller.update)
    // for request types that arent available to use on dish.
    .all(methodNotAllowed)

module.exports = router;