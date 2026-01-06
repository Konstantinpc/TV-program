const showsService = require("../services/showsService");

const toInt = (v) => {
  const n = Number(v);
  return Number.isInteger(n) ? n : null;
};

class ShowsController {
  // GET /api/shows?duration=30
  getAllShowsByDuration(req, res) {
    try {
      const duration = toInt(req.query.duration);
      if (duration === null) {
        return res.status(400).json({ error: "Query param 'duration' must be an integer" });
      }

      const result = showsService.getAllShowsByDuration(duration);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // POST /api/shows
  addShow(req, res) {
    try {
      const { name, duration, participants } = req.body;
      const dur = toInt(duration);

      if (!name || dur === null || !participants) {
        return res.status(400).json({ error: "name, duration, participants are required" });
      }
      if (!Array.isArray(participants)) {
        return res.status(400).json({ error: "participants must be an array of strings" });
      }

      const created = showsService.addShow({ name, duration: dur, participants });
      return res.status(201).json(created);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // PUT /api/shows/:id
  editShow(req, res) {
    try {
      const showId = toInt(req.params.id);
      if (showId === null) {
        return res.status(400).json({ error: "Param ':id' must be an integer" });
      }

      const { name, duration, participants } = req.body;
      const updates = {};

      if (name !== undefined) updates.name = name;

      if (duration !== undefined) {
        const dur = toInt(duration);
        if (dur === null) return res.status(400).json({ error: "duration must be an integer" });
        updates.duration = dur;
      }

      if (participants !== undefined) {
        if (!Array.isArray(participants)) {
          return res.status(400).json({ error: "participants must be an array of strings" });
        }
        updates.participants = participants;
      }

      const updated = showsService.editShow(showId, updates);
      if (!updated) return res.status(404).json({ error: "Show not found" });

      return res.status(200).json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // DELETE /api/shows?showID=1  (по условие: query param showID)
  deleteShow(req, res) {
    try {
      const showId = toInt(req.query.showID);
      if (showId === null) {
        return res.status(400).json({ error: "Query param 'showID' must be an integer" });
      }

      const ok = showsService.deleteShow(showId);
      if (!ok) return res.status(404).json({ error: "Show not found" });

      return res.status(204).send();
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
}

module.exports = new ShowsController();
