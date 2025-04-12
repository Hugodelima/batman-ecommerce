// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        backgroundColor: '#111827',
        color: '#f3f4f6',
        fontFamily: '"Roboto", sans-serif',
        margin: 0,
        padding: 0,
        position: 'relative'
      }}>

        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'url(https://cdn.thisiswhyimbroke.com/thumb/batman-bat-signal-neon-sign_400x333.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        

        <header style={{
          backgroundColor: '#000',
          borderBottom: '1px solid #f59e0b',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.1)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0.75rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src="https://imagepng.org/batman-simbolo/batman-simbolo/" 
                alt="Batman Logo" 
                style={{ height: '40px' }}
              />
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #f59e0b, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: '"Bebas Neue", cursive'
              }}>
                BATCAVERNA STORE
              </h1>
            </div>
            
            <nav style={{ display: 'none', gap: '1.5rem' }}>
              {['Colecionáveis', 'HQs', 'Action Figures', 'Vestuário'].map(item => (
                <a key={item} href="#" style={{
                  color: '#f3f4f6',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  ':hover': { color: '#f59e0b' }
                }}>
                  {item}
                </a>
              ))}
            </nav>
            
            <button style={{
              backgroundColor: '#f59e0b',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.2s',
              ':hover': { backgroundColor: '#eab308' }
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.25rem' }} viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Carrinho
            </button>
          </div>
        </header>

        {children}


        <footer style={{
          backgroundColor: '#000',
          borderTop: '1px solid #f59e0b',
          padding: '2rem 0'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {[
                {
                  title: 'NAVEGAÇÃO',
                  items: ['Início', 'Produtos', 'Sobre nós', 'Contato']
                },
                {
                  title: 'CATEGORIAS',
                  items: ['Colecionáveis', 'Quadrinhos', 'Camisetas', 'Decoração']
                },
                {
                  title: 'ATENDIMENTO',
                  items: [
                    { icon: '📍', text: 'Gotham City' },
                    { icon: '📞', text: '(21) 9999-9999' }
                  ]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 style={{
                    color: '#f59e0b',
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    marginBottom: '1rem'
                  }}>{section.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        {typeof item === 'string' ? (
                          <a href="#" style={{
                            color: '#f3f4f6',
                            transition: 'color 0.2s',
                            ':hover': { color: '#f59e0b' }
                          }}>
                            {item}
                          </a>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div>
                <h3 style={{
                  color: '#f59e0b',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  marginBottom: '1rem'
                }}>NEWSLETTER</h3>
                <p style={{ marginBottom: '1rem' }}>Assine para receber novidades da Batcaverna!</p>
                <div style={{ display: 'flex' }}>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#1f2937',
                      color: '#f3f4f6',
                      borderRadius: '0.25rem 0 0 0.25rem',
                      border: 'none',
                      flex: 1,
                      outline: 'none'
                    }}
                  />
                  <button style={{
                    backgroundColor: '#f59e0b',
                    color: '#000',
                    padding: '0.5rem',
                    borderRadius: '0 0.25rem 0.25rem 0',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.25rem', width: '1.25rem' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div style={{
              borderTop: '1px solid #374151',
              paddingTop: '1.5rem',
              textAlign: 'center'
            }}>
              <p>© {new Date().getFullYear()} Batcaverna Store. Todos os direitos reservados.</p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                {['facebook', 'twitter', 'instagram'].map(social => (
                  <a key={social} href="#" style={{
                    color: '#9ca3af',
                    transition: 'color 0.2s',
                    ':hover': { color: '#f59e0b' }
                  }}>
                    {social === 'facebook' && (
                      <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )}
                    {social === 'twitter' && (
                      <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social === 'instagram' && (
                      <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06-4.123 0-.427-.013-.903-.06-1.402-.049-.5-.119-.986-.22-1.402-.1-.415-.23-.79-.397-1.13-.168-.34-.38-.673-.648-.99-.267-.317-.59-.617-.95-.887-.36-.27-.763-.5-1.21-.68-.447-.18-.93-.317-1.44-.407-.51-.09-1.037-.135-1.59-.135H12c-.427 0-.903.013-1.402.06-.5.049-.986.119-1.402.22-.415.1-.79.23-1.13.397-.34.168-.673.38-.99.648-.317.267-.617.59-.887.95-.27.36-.5.763-.68 1.21-.18.447-.317.93-.407 1.44-.09.51-.135 1.037-.135 1.59 0 .427.013.903.06 1.402.049.5.119.986.22 1.402.1.415.23.79.397 1.13.168.34.38.673.648.99.267.317.59.617.95.887.36.27.763.5 1.21.68.447.18.93.317 1.44.407.51.09 1.037.135 1.59.135h.08c2.643 0 2.987-.012 4.043-.06 1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 0119.46 2.525c.636-.247 1.363-.416 2.427-.465C23.013 2.013 23.357 2 26 2h.08c.427 0 .903.013 1.402.06.5.049.986.119 1.402.22.415.1.79.23 1.13.397.34.168.673.38.99.648.317.267.617.59.887.95.27.36.5.763.68 1.21.18.447.317.93.407 1.44.09.51.135 1.037.135 1.59 0 .427-.013.903-.06 1.402-.049.5-.119.986-.22 1.402-.1.415-.23.79-.397 1.13-.168.34-.38.673-.648.99-.267.317-.59.617-.95.887-.36.27-.763.5-1.21.68-.447.18-.93.317-1.44.407-.51.09-1.037.135-1.59.135H12.315z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}