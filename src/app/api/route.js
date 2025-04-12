
import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { title, price, quantity } = await req.json();
    

    if (!title || !price) {
      return NextResponse.json(
        { error: "Título e preço são obrigatórios" },
        { status: 400 }
      );
    }

    const preference = {
      items: [{
        title,
        unit_price: Number(price),
        quantity: Number(quantity) || 1,
      }],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/pending`,
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    
    return NextResponse.json({ 
      id: response.body.id 
    });

  } catch (error) {
    console.error("Erro na API de pagamento:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}