'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY
);

export async function loginAction(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // 硬编码的用户名和密码验证
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    return { success: false, error: "请输入用户名和密码" };
  }

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return { success: false, error: "用户名或密码错误" };
  }

  const token = await new SignJWT({ username, authenticated: true })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .setIssuedAt()
    .sign(SECRET_KEY);

  // 设置 cookie
  const cookieStore = await cookies();
  cookieStore.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 86400, // 24 hours
  });

  // 登录成功，重定向到首页
  redirect("/");
}
