import { NextResponse } from "next/server";

// GET API
export const GET = () => {
  return NextResponse.json({ message: "Hello, world!" });
};

// POST API
export const POST = () => {};

// PATCH API
export const PATCH = () => {};

// DELETE API
export const DELETE = () => {};
