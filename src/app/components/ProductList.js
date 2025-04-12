'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{
      textAlign: 'center',
      padding: '3rem 0',
      fontFamily: '"Bebas Neue", cursive'
    }}>
      <div style={{
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '5px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '50%',
        borderTopColor: '#f59e0b',
        animation: 'spin 1s linear infinite',
        marginBottom: '1rem'
      }}></div>
      <p style={{
        color: '#f59e0b',
        fontSize: '1.5rem',
        letterSpacing: '1px'
      }}>SINALIZANDO PRODUTOS...</p>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {products.map((product) => (
        <div key={product.id} style={{
          width: '300px',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 5px 15px rgba(245, 158, 11, 0.2)',
          transition: 'all 0.3s ease',
          border: '1px solid #333',
          ':hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 30px rgba(245, 158, 11, 0.3)',
            borderColor: '#f59e0b'
          }
        }}>

          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#f59e0b',
            color: '#000',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            zIndex: 2
          }}>
            NOVA EDIÇÃO
          </div>
          
          <div style={{
            height: '250px',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '2px solid #f59e0b'
          }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
            }}></div>
          </div>
          

          <div style={{
            padding: '1.5rem',
            position: 'relative'
          }}>
            <h3 style={{
              color: '#f59e0b',
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              fontFamily: '"Bebas Neue", cursive',
              letterSpacing: '1px',
              minHeight: '60px'
            }}>{product.title}</h3>
            
            <p style={{
              color: '#aaa',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              minHeight: '60px'
            }}>{product.description}</p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
              <span style={{
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                R$ {product.price.toFixed(2)}
              </span>
              
              <Link 
                href={`/product/${product.id}`}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#f59e0b',
                  color: '#000',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  ':hover': {
                    backgroundColor: 'transparent',
                    color: '#f59e0b',
                    borderColor: '#f59e0b'
                  }
                }}
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
          

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(to right, #f59e0b, #000)'
          }}></div>
        </div>
      ))}
    </div>
  );
}