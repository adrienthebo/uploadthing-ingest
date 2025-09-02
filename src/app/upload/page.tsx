"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";

interface UploadedFile {
  url: string;
  name: string;
  size: number;
  type: string;
}

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold mb-8">File Upload</h1>
      
      <div className="w-full max-w-4xl space-y-8">
        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Image Upload</h2>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                const newFiles = res.map(file => ({
                  url: file.url,
                  name: file.name,
                  size: file.size,
                  type: "image"
                }));
                setUploadedFiles(prev => [...prev, ...newFiles]);
                alert("Upload Completed");
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">PDF Upload (Drag & Drop)</h2>
          <UploadDropzone
            endpoint="pdfUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                const newFiles = res.map(file => ({
                  url: file.url,
                  name: file.name,
                  size: file.size,
                  type: "pdf"
                }));
                setUploadedFiles(prev => [...prev, ...newFiles]);
                alert("PDF Upload Completed");
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Video Upload</h2>
          <UploadButton
            endpoint="videoUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                const newFiles = res.map(file => ({
                  url: file.url,
                  name: file.name,
                  size: file.size,
                  type: "video"
                }));
                setUploadedFiles(prev => [...prev, ...newFiles]);
                alert("Video Upload Completed");
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </section>

        {uploadedFiles.length > 0 && (
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Uploaded Files</h2>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-600">
                      Type: {file.type} | Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}