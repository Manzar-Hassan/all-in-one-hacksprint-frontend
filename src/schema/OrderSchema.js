import * as yup from "yup";

export const orderSchema = yup.object().shape({
  orderPerson: yup.string().min(4, "Username must be greater than 3 characters"),
  selectedFood: yup.array().min(1, "Please select food!!"),
  mail: yup.string().email("please enter a valid email")
});