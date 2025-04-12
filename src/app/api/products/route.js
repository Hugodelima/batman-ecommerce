
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'src/data/products.json');


async function readProducts() {
  try {
    await fs.access(filePath);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export async function POST(request) {
  try {

    if (request.body === null) {
      return NextResponse.json(
        { error: "Corpo da requisição vazio" },
        { status: 400 }
      );
    }

    let newProduct;
    try {
      newProduct = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: "JSON inválido no corpo da requisição" },
        { status: 400 }
      );
    }


    if (!newProduct.title || typeof newProduct.price === 'undefined') {
      return NextResponse.json(
        { 
          error: "Campos obrigatórios faltando",
          required: ["title", "price"],
          received: Object.keys(newProduct)
        },
        { status: 400 }
      );
    }


    let products = [];
    try {
      await fs.access(filePath);
      const fileContents = await fs.readFile(filePath, 'utf8');
      products = JSON.parse(fileContents);
    } catch (error) {
      console.log("Criando novo arquivo de produtos...");
    }


    const productWithId = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      price: Number(newProduct.price),
      createdAt: new Date().toISOString()
    };


    const updatedProducts = [...products, productWithId];


    await fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2));

    return NextResponse.json(productWithId, { status: 201 });

  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { 
        error: "Erro interno do servidor",
        details: error.message 
      },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(fileContents);
    

    if (!Array.isArray(products)) {
      throw new Error("Dados inválidos - esperado array");
    }
    
    return new Response(JSON.stringify(products), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Erro na API:", error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}