import CheckoutButton from '../../components/CheckoutButton';

export default async function ProductDetail({ params }) {
  const response = await fetch(`http://localhost:3000/api/products`);
  const products = await response.json();
  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return (
      <div style={{
        backgroundColor: '#111827',
        minHeight: '100vh',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: '"Bebas Neue", cursive'
      }}>
        <img 
          src="https://i.imgur.com/ZuL1f0I.png" 
          alt="Batman Logo" 
          style={{ height: '100px', marginBottom: '1rem' }}
        />
        <h1 style={{
          fontSize: '2.5rem',
          color: '#f59e0b',
          marginBottom: '1rem'
        }}>PRODUTO NÃO ENCONTRADO</h1>
        <p style={{ fontSize: '1.25rem' }}>Este item desapareceu nas sombras de Gotham...</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#111827',
      minHeight: '100vh',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://i.imgur.com/JzZQX3A.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.05,
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem',
        position: 'relative',
        zIndex: 1
      }}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          fontSize: '0.9rem'
        }}>
          <a href="/" style={{ color: '#f59e0b', textDecoration: 'none' }}>Home</a>
          <span style={{ color: '#6b7280' }}>/</span>
          <a href="/" style={{ color: '#f59e0b', textDecoration: 'none' }}>Produtos</a>
          <span style={{ color: '#6b7280' }}>/</span>
          <span style={{ color: '#9ca3af' }}>{product.title}</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          }
        }}>

          <div>
            <div style={{
              backgroundColor: '#1f2937',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #374151',
              marginBottom: '1rem'
            }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
            

            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              {[1, 2, 3].map((item) => (
                <div key={item} style={{
                  width: '80px',
                  height: '80px',
                  border: '1px solid #374151',
                  borderRadius: '0.25rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  ':hover': {
                    borderColor: '#f59e0b'
                  }
                }}>
                  <img 
                    src={product.image} 
                    alt={`${product.title} ${item}`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>


          <div style={{
            padding: '0 1rem'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#f59e0b',
              marginBottom: '1rem',
              fontFamily: '"Bebas Neue", cursive',
              letterSpacing: '1px'
            }}>{product.title}</h1>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                color: '#f59e0b'
              }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem' }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ color: '#9ca3af' }}>(12 avaliações)</span>
            </div>
            
            <p style={{
              color: '#d1d5db',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>{product.description}</p>
            
            <div style={{
              backgroundColor: '#1f2937',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              border: '1px solid #374151'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>R$ {product.price.toFixed(2)}</span>
                
                <span style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>ESTOQUE DISPONÍVEL</span>
              </div>
              
              <CheckoutButton 
                title={product.title} 
                price={product.price} 
                quantity={1} 
              />
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: '1px solid #374151',
                  borderRadius: '0.25rem',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  ':hover': {
                    backgroundColor: '#1f2937',
                    borderColor: '#f59e0b'
                  }
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                  Adicionar à lista de desejos
                </span>
              </div>
            </div>
            

            <div style={{
              borderTop: '1px solid #374151',
              paddingTop: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#f59e0b',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ENTREGA PARA GOTHAM
              </h3>
              
              <ul style={{
                color: '#9ca3af',
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Envio em até 2 dias úteis
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Grátis para compras acima de R$ 150,00
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Devolução gratuita em 7 dias
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}