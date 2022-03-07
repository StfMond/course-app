import { useState } from "react";
import { LOGIN } from "../constants/serviceUrl";
import { LoginResponse } from "../types/types.d";
import { User } from "../types/user";

export const register = async (user: User) => {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export const login = async (user: User) => {
  // const response = await fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     body: JSON.stringify(user),
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  // });

  // return await response.json();

  const fetchData = async () => {
    try {
      const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = (await response.json()) as LoginResponse;

      if (data.successful) {
        localStorage.setItem("token", JSON.stringify(data.result));
      }
      return data;

    } catch (err) {
      return null;
    }
  };

  return fetchData();
}