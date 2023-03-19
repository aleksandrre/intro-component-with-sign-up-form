import React from "react";
import { useForm } from "react-hook-form";
import { ErrorP, Form1, Img, Input, Input1, P1, P2 } from "./form.styled";
import errorimage from "../images/icon-error.svg";
import { relative } from "path";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <Form1 onSubmit={handleSubmit(onSubmit)}>
      <div style={{ position: "relative" }}>
        <Input
          errors={errors.firstname}
          type="text"
          placeholder="First Name"
          {...register("firstname", { required: "First Name cannot be emty" })}
        />
        <Img src={errorimage} alt="" errors={errors.firstname} />
      </div>
      <ErrorP errors={errors.firstname}>
        {errors.firstname?.message.toString()}
      </ErrorP>

      <div style={{ position: "relative" }}>
        <Input
          errors={errors.lastname}
          type="text"
          placeholder="Last Name"
          {...register("lastname", { required: "Last Name cannot be emty" })}
        />
        <Img src={errorimage} alt="" errors={errors.lastname} />
      </div>

      <ErrorP errors={errors.lastname}>
        {errors.lastname?.message.toString()}
      </ErrorP>

      <div style={{ position: "relative" }}>
        <Input
          errors={errors.email}
          type="text"
          placeholder="Email Address"
          {...register("email", {
            required: "Email cannot be emty",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Looks like this is not an email",
            },
          })}
        />
        <Img src={errorimage} alt="" errors={errors.email} />
      </div>

      <ErrorP errors={errors.email}>{errors.email?.message.toString()}</ErrorP>

      <div style={{ position: "relative" }}>
        {" "}
        <Input
          errors={errors.password}
          type="text"
          placeholder="Password"
          {...register("password", { required: "Password cannot be emty" })}
        />
        <Img src={errorimage} alt="" errors={errors.password} />
      </div>

      <ErrorP errors={errors.password}>
        {errors.password?.message.toString()}
      </ErrorP>

      <Input1 type="Submit" value="Send Request" />

      <P1>
        By clicking the button, you are agreeing to our
        <P2>Terms and Services</P2>
      </P1>
    </Form1>
  );
};

export default Form;
