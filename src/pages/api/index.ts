// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

type Data = {
  message: string
}

export function buildPath() {
  return path.join(process.cwd(), "data", "products.json");
}

export function fetchProducts(filePath: string) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData.toString());
}

export function getProducts(){
  const filePath = buildPath();
  const products = fetchProducts(filePath);
  return products;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ message: 'Backend is working' })
}
