# CLAUDE.md

## Project Overview
Next.js application for uploadthing-ingest with all source files organized under `/src`. This application integrates with UploadThing for file upload functionality.

## Project Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/app/api/uploadthing` - UploadThing API routes and file router configuration
- `/src/components` - React components
- `/src/lib` - Utility functions and shared logic (includes UploadThing components)
- `/src/styles` - Global styles and CSS modules
- `/src/types` - TypeScript type definitions

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## Code Style Guidelines
- Use TypeScript for all new files
- Follow existing component patterns in the codebase
- Prefer server components by default, use client components only when necessary
- Use CSS modules for component-specific styles
- Keep components small and focused on a single responsibility

## Testing
- Write tests for new functionality when applicable
- Run tests before committing changes

## UploadThing Integration

### Environment Variables
Required environment variables in `.env.local`:
```
UPLOADTHING_TOKEN=<your-uploadthing-token>
```

### File Upload Configuration
The application supports three types of file uploads:
- **Images**: Max 4MB, up to 4 files (endpoint: `imageUploader`)
- **PDFs**: Max 16MB, single file (endpoint: `pdfUploader`)
- **Videos**: Max 128MB, single file (endpoint: `videoUploader`)

### Key Files
- `/src/app/api/uploadthing/core.ts` - File router configuration and upload handlers
- `/src/app/api/uploadthing/route.ts` - API route handler for UploadThing
- `/src/lib/uploadthing.ts` - Pre-configured upload components
- `/src/app/upload/page.tsx` - Example upload page implementation

### Usage
1. Set up your UploadThing account and get your token
2. Add the token to `.env.local`
3. Use the pre-configured components from `/src/lib/uploadthing.ts`:
   - `UploadButton` - Simple button for file uploads
   - `UploadDropzone` - Drag-and-drop zone for file uploads

## Git Workflow
- Create descriptive commit messages
- Keep commits focused on single changes
- Test changes locally before committing