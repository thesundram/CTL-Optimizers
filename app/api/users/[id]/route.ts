import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { username, password, role, expiryDate, companyName } = body;

    const client = await clientPromise;
    const db = client.db('slitter-optimizers');

    const updateData: any = {
      username,
      role: role || 'user',
      expiryDate: expiryDate || null,
      companyName: companyName || null,
    };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    await db.collection('users').updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db('slitter-optimizers');

    await db.collection('users').deleteOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
