import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateJwtToken from "../utils/jwtGenerate.js";
export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password, confirmPassword, gender } =
      req.body;
    if (password !== confirmPassword) {
      res.status(400).json({
        message: "Passwords do not match",
      });
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "username already taken" });
      }
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "Male" ? boyProfilePic : girlProfilePic,
    });
    generateJwtToken(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPassword = bcryptjs.compare(user?.password, password);
    if (!user || isPassword) {
      return res.status(400).json({ error: " invalid credentials " });
    }
    generateJwtToken();
    res.status(200).json("user logged in");
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("user logged out successful");
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};
