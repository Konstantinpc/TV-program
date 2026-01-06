class ShowsService {
  constructor() {
    this.shows = [
      { id: 1, name: "Morning Show", duration: 30, participants: ["Host A", "Host B"] },
      { id: 2, name: "Sports Update", duration: 30, participants: ["Host C"] },
      { id: 3, name: "Late Night", duration: 60, participants: ["Host Z"] },
    ];
    this.nextId = 4;
  }

  getAllShowsByDuration(duration) {
    return this.shows.filter((s) => s.duration === duration);
  }

  addShow({ name, duration, participants }) {
    const newShow = { id: this.nextId++, name, duration, participants };
    this.shows.push(newShow);
    return newShow;
  }

  editShow(showId, updates) {
    const idx = this.shows.findIndex((s) => s.id === showId);
    if (idx === -1) return null;

    this.shows[idx] = { ...this.shows[idx], ...updates };
    return this.shows[idx];
  }

  deleteShow(showId) {
    const idx = this.shows.findIndex((s) => s.id === showId);
    if (idx === -1) return false;

    this.shows.splice(idx, 1);
    return true;
  }
}

module.exports = new ShowsService();
