import { verifyToken } from "../utils/jwt.utils.js";

const jwtVerific = (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    console.log(bearer);
    if (!bearer) {
      throw new Error("No token received");
    }
    //!Splitting the type and token as the request comes as type and tokwn at same req
    const [bearerType, bearerToken] = bearer.split(" ");

    if (bearerType === "bearer") {
      throw new Error("Invalid token use type bearer");
    }

    if (!bearerToken) {
      throw new Error("Invalid token ");
    }

    // console.log(bearerToken);

    const user = verifyToken(bearerToken);
    if (!user || !user.email) {
      throw new Error("Invalid token");
    }

    const email = user.email;
    const role = user.role;
    const jwt = bearerToken;

    // console.log('horaa',userEmail);

    // req.user = { email, role, jwt };
    // next();

    res.status(200).json({
      message: "Auth successful",
      token: bearerToken,
      user: {
        email: email,
        role: role,
      },
    });

    // successHandler(res,'HEHEH', bearerToken)
  } catch (e) {
    next(e);
  }
};

//!Auth for like only user to upload the post
//!Can use the injected value or can get the req directly by body
const checkAuthUser = (req, res, next) => {
  try {
    //!Can only receive role first to check is user role is valid or not
    const { role } = req.user;

    if (role === "user") {
      //   req.add = { title, text,id};
      next();
    } else {
      throw new Error("Unauthorized role");
    }
  } catch (e) {
    next(e);
  }
};

//!This is so to give the permission according to their roles
//!So lets say admin can use to upload photos of the website so this middleware will be called so that it will
//!Check if the role is admin or not so that he/she can add the images
const checkAuthAdmin = (req, res, next) => {
  try {
    //!Can only receive role first to check is user role is valid or not
    const { role } = req.user;

    if (role === "admin") {
      //   req.add = { title, text,id};
      next();
    } else {
      throw new Error("Unauthorized role");
    }
  } catch (e) {
    next(e);
  }
};

export { checkAuthAdmin, checkAuthUser, jwtVerific };
