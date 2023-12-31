/** Routes for post comment. */

const db = require("../db");
const express = require("express");
const router = express.Router({ mergeParams: true });

/** GET /        get comments for post
 *
 * => { id, text }
 *
 */

router.get("/", async function (req, res, next) {
  try {
    const result = await db.query(
      "SELECT id, comment, username FROM comments WHERE post_id = $1 ORDER BY id",
      [req.params.post_id]
    );
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});

/** POST /      add a comment
 *
 * => { id, text }
 *
 */

router.post("/", async function (req, res, next) {
  try {
    const result = await db.query(
      `INSERT INTO comments (id, comment, post_id, username) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`,
      [req.body.id, req.body.comment, req.body.post_id, req.body.username]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[id]      delete comment
 *
 * => { message: "deleted" }
 *
 */

router.delete("/:id", async function (req, res, next) {
  try {
    await db.query("DELETE FROM comments WHERE id=$1", [req.params.id]);
    return res.json({ message: "deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
