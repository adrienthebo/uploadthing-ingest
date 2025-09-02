import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('─────────────────────────────────────────');
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
  console.log('Request Headers:');
  
  request.headers.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
  });
  
  console.log('─────────────────────────────────────────');
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};