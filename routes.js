const   express = require("express"),
        router = express.Router();
        itemCtrl = require("./item-controlller");

router.get("/:foo/:bar", itemCtrl.helloWolrd);

module.exports = router;
