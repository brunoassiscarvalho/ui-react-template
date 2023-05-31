import React from "react";

export default function Input({ register, name, ...rest }:any) {
  return <input {...register(name)} {...rest} />;
}