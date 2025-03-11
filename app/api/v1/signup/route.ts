import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const newUser = await prisma.user.create({
      data: {
        userName: data.userName,
        password: data.password,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: 'Error creating user', error: error }, { status: 500 });
  }
}
