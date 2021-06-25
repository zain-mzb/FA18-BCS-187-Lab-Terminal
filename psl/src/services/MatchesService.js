import GenericService from "./GenericService";
class MatchesService extends GenericService {
  constructor() {
    super();
  }
  addMatch = (data) => this.post("matches", data);
  deleteMatch = (_id) => this.delete("matches/" + _id);
  updateMatch = (_id, data) => this.put("matches/" + _id, data);
  getMatches = () => this.get("matches");
  getSingleMatch = (id) => this.get("matches/" + id);
}

let matchService = new MatchesService();
export default matchService;
