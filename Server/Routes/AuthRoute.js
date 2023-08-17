import { Router } from "express";
import {
  register,
  login,
  users,
  elections,
  candidates,
  phase,
  votingMail,
  a,
} from "../Controller/AuthController.js";

const router = Router();

router.post("/register", register.validator, register.controller);
router.post("/login", login.validator, login.controller);

router.post("/election/register", elections.register);
router.post("/phase/edit/:id", phase.controller);
router.get("/voting/elections", elections.voting);
router.get("/result/elections", elections.result);
router.get("/elections", elections.controller);
router.get("/election/:id", elections.getElection);
router.post("/election/delete/:id", elections.delete);

router.post("/candidate/register", candidates.register);
router.post("/candidate/login", candidates.login);
router.get("/candidate/:username", candidates.getCandidate);
router.get("/candidates", candidates.getCandidates);
router.delete("/candidate/delete/:id", candidates.delete);

router.get("/users", users.getUsers);
router.get("/user/:id", users.getUser);
router.get("/user/:username/:id", users.getUserByName);
router.delete("/user/delete/:id", users.delete);
router.put("/user/edit/:id", users.edit);

router.post("/op", a.sc);
router.post("/votingEmail", votingMail.send);

export default router;
