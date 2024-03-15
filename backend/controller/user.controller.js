import User from "../models/user.model";

export const getUsersFromSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filterUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(filterUser);
  } catch (error) {
    res.status(500).json({ error: "internal error" });
  }
};
