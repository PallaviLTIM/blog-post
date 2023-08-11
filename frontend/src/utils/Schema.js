import * as Yup from "yup";
export const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Pasword must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password ahould contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  confirmPassword: Yup.string().when("password", (password, field) => {
    if (password) {
      return field
        .required("The passwords do not match")
        .oneOf([Yup.ref("password")], "The passwords do not match");
    }
  }),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export const postSchema = Yup.object().shape({
  postName: Yup.string().required("This field is required"),
  postDetails: Yup.string().required("This field is required"),
  postMedia: Yup.string().required("This field is required"),
});

export const commentSchema = Yup.object().shape({
  comment: Yup.string().required("This field is required"),
  postId: Yup.string(),
});
