export const showErrorMessage = (data) => {
  if(!Object.values(data).some(el => el.toched)) {
    return
  }
  if (
    !Object.values(data).every((el) => el.value !== "") &&
    Object.values(data).some((el) => el.toched === true)
  ) {
    return "- All fields are required";
  } else if (!/[7-9]{1}[0-9]{10}/.test(data.phone.value)) {
    return "- Phone number start with 7-9 and remaing 10 digit with 0-9";
  } else if (!data.email.value.includes("@")) {
    return "- Email must includes @";
  }
  return "";
};