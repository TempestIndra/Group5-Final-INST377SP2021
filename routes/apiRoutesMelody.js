import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.js";

<<<<<<< HEAD
const serviceQuery = 'SELECT * FROM restaurant LEFT JOIN restaurant_services using (restaurant_id)';
const router = express.Router();

router.route('/services').get(async (req, res) => {
    try {
    const service = await db.sequelizeDB.query(serviceQuery, {
        type: sequelize.QueryTypes.SELECT
        });
        res.json(service);
    } catch (err) {
        console.error(err);
        res.json({message: 'Server error'});
    }
=======
const descriptionQuery =
  "SELECT * FROM restaurants left join descriptions using(description_id)";
const router = express.Router();

router.route("/description").get(async (req, res) => {
  try {
    const description = await db.sequelizeDB.query(descriptionQuery, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(description);
  } catch (err) {
    console.error(err);
    res.json({ message: "Server error" });
  }
>>>>>>> main
});

router.get("/:description_id", async (req, res) => {
  // eslint-disable-next-line no-template-curly-in-string
  const descriptionIDQuery = `SELECT * FROM descriptions WHERE description_id = ${req.params.description_id}`;
  try {
    const description = await db.sequelizeDB.query(descriptionIDQuery, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.json(description);
  } catch (err) {
    console.error(err);
    res.json({ message: "Server error" });
  }
});

<<<<<<< HEAD
router.get('/:restaurant_id', async (req, res) => {
    // eslint-disable-next-line no-template-curly-in-string
    const restaurantIDQuery = `SELECT * FROM restaurant_services WHERE restaurant_id = ${req.params.restaurant_id}`;
    try {
      const service = await db.sequelizeDB.query(restaurantIDQuery, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(service);
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
  });  

router.post('/servicepost', async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(`INSERT INTO restaurant_services (restaurant_id, drive_thru, outdoor_seating, delivery,
        dine_in, takeout)
        values(${req.body.restaurant_id}, ${req.body.drive_thru}, ${req.body.outdoor_seating},
        ${req.body.delivery}, ${req.body.dine_in}, ${req.body.takeout})`
      );
      res.send('Something was added.');
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request.'})
    }
});     
 
router.put('/serviceput', async (req, res) => {
    try {
      const put = await db.sequelizeDB.query(`UPDATE restaurant_services SET drive_thru = ${req.body.drive_thru}, 
      outdoor_seating = ${req.body.outdoor_seating}, delivery = ${req.body.delivery}, dine_in = ${req.body.dine_in},
      takeout = ${req.body.takeout} WHERE restaurant_id = ${req.body.restaurant_id}`
      );
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.send('Unsuccessful');
    }
});

router.delete('/servicedelete/:restaurant_id', async (req, res) => {
    const {restaurant_id } = req.params
    console.log(restaurant_id);
    const serviceIDQuery = `DELETE FROM restaurant_services WHERE restaurant_id = ${restaurant_id}`;
    try {
      const service = await db.sequelizeDB.query(restaurantIDQuery, {
        type: sequelize.QueryTypes.DELETE
      });
      res.send('Deleted Successfully');
    } catch (err) {
      console.error(err);
      res.json({message: 'Server error'});
    }
=======
router.post("/descriptionpost", async (req, res) => {
  try {
    const result = await db.sequelizeDB
      .query(`INSERT INTO descriptions (description_id, parking, takeout, delivery)
        values(${req.body.description_id}, ${req.body.parking}, ${req.body.takeout},
        ${req.body.delivery})`);
    res.send("Something was added.");
  } catch (err) {
    console.log(err);
    res.send({ message: "Something went wrong on the SQL request." });
  }
});

router.put("/descriptionput", async (req, res) => {
  try {
    const put = await db.sequelizeDB
      .query(`UPDATE descriptions SET parking = ${req.body.parking}, 
      takeout = ${req.body.takeout}, delivery = ${req.body.delivery} WHERE description_id = ${req.body.description_id}`);
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.send("Unsuccessful");
  }
});

router.delete("/descriptiondelete/:description_id", async (req, res) => {
  const { description_id } = req.params;
  console.log(description_id);
  const descriptionIDQuery = `DELETE FROM descriptions WHERE description_id = ${description_id}`;
  try {
    const description = await db.sequelizeDB.query(descriptionIDQuery, {
      type: sequelize.QueryTypes.DELETE,
    });
    res.send("Deleted Successfully");
  } catch (err) {
    console.error(err);
    res.json({ message: "Server error" });
  }
>>>>>>> main
});

export default router;
