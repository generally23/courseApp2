import { Router } from "express";
import {
  signup,
  signin,
  logout,
  getAccountInfo,
  updateAccountInfo,
  updateAccounts,
  addAccountProfile,
  updateAccountProfile,
  deleteAccountProfile,
  forgotPassword,
  resetPassword,
  changePassword,
  deleteAccount,
  deleteAccounts,
  getAccounts
} from "../controllers/routeControllers/accounts";

const router = Router();

router
  .route("/")
  .get(getAccounts)
  .patch(updateAccounts)
  .delete(deleteAccounts);

router.get("/my-account", getAccountInfo);

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:reset-token", resetPassword);

router.patch("/change-password", changePassword);

router.patch("/update-my-info", updateAccountInfo);

router.delete("delete-my-account", deleteAccount);

router.post("/add-profile", addAccountProfile);

router.patch("/update-profile", updateAccountProfile);

router.delete("/delete-profile", deleteAccountProfile);

export default router;
