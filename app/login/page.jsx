"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/login-action";
import {Form, Input, Button} from "@heroui/react";

const initialState = {
  success: false,
  error: "",
};

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, initialState);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            管理员登录
          </h2>
        </div>
        {state.error && (
          <div className="text-red-600 text-sm text-center">{state.error}</div>
        )}
        <Form
          className="w-full flex flex-col gap-4"
          action={formAction}
        >
          <Input
            isRequired
            label="用户名:"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
          />
          <Input
            isRequired
            label="密码"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <div className="flex">
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
