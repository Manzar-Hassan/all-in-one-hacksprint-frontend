import * as yup from "yup";

export const reportSchema = yup.object().shape({
  username: yup.string().min(4, "Item-name must be greater than 3 characters"),
  query: yup.string().min(10, "query must be greater than 3 characters"),
  email: yup.string().email("please enter a valid email")
});
