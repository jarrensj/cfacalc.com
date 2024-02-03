import { NextResponse, NextRequest } from 'next/server';
import data from './data.json';

export function GET(request: NextRequest) {
  const result = data;
  
  return NextResponse.json(result);
}