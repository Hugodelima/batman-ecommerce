'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductList from './components/ProductList';

export default function Home() {
  return (
    <main>
      <div style={{position:'relative',height:'80vh',maxHeight:'800px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, #000, transparent)',zIndex:10}}></div>
        <img src="https://www.pngplay.com/wp-content/uploads/10/Batman-Arkham-City-Logo-PNG-Pic-Background.png" alt="Batman em Gotham" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:20,textAlign:'center',padding:'0 1rem'}}>
          <div>
            <h1 style={{fontSize:'3rem',fontWeight:'bold',marginBottom:'1rem',color:'#f59e0b',textShadow:'2px 2px 4px rgba(0,0,0,0.5)',fontFamily:'"Bebas Neue", cursive'}}>
              <span style={{display:'block'}}>BEM-VINDO À</span>
              <span style={{display:'block',fontSize:'4rem',marginTop:'0.5rem'}}>BATCAVERNA</span>
            </h1>
            <p style={{fontSize:'1.25rem',maxWidth:'800px',margin:'0 auto 2rem',color:'#e5e7eb'}}>O melhor lugar para os fãs do Cavaleiro das Trevas</p>
            <button style={{backgroundColor:'#f59e0b',color:'#000',padding:'0.75rem 2rem',borderRadius:'9999px',fontWeight:'bold',fontSize:'1.125rem',transition:'all 0.2s',transform:'scale(1)',boxShadow:'0 4px 6px -1px rgba(245, 158, 11, 0.3)',':hover':{backgroundColor:'#eab308',transform:'scale(1.05)'}}}>EXPLORAR COLECIONÁVEIS</button>
          </div>
        </div>
      </div>

      

      
      <section style={{padding:'4rem 0',backgroundColor:'#000',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1rem'}}>
          <h2 style={{fontSize:'2.25rem',fontWeight:'bold',textAlign:'center',marginBottom:'3rem',color:'#f59e0b',fontFamily:'"Bebas Neue", cursive'}}>
            <span style={{borderBottom:'4px solid #f59e0b',paddingBottom:'0.5rem'}}>PRODUTOS EM DESTAQUE</span>
          </h2>
          <ProductList/>
          <div style={{textAlign:'center',marginTop:'3rem'}}>
            <button style={{border:'2px solid #f59e0b',color:'#f59e0b',padding:'0.75rem 2rem',borderRadius:'9999px',fontWeight:'bold',fontSize:'1.125rem',transition:'all 0.2s',':hover':{backgroundColor:'#f59e0b',color:'#000'}}}>VER TODOS OS PRODUTOS</button>
          </div>
        </div>
      </section>

      <section style={{padding:'4rem 0',backgroundImage:'url(https://c4.wallpaperflare.com/wallpaper/850/146/566/batman-arkham-knight-rocksteady-studios-batman-batmobile-wallpaper-preview.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed',position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundColor:'rgba(0,0,0,0.7)'}}></div>
        <div style={{maxWidth:'768px',margin:'0 auto',padding:'0 1rem',position:'relative',zIndex:10,textAlign:'center'}}>
          <h2 style={{fontSize:'2.5rem',fontWeight:'bold',marginBottom:'1.5rem',color:'#f59e0b',fontFamily:'"Bebas Neue", cursive'}}>TORNE-SE UM MEMBRO DA BAT-FAMÍLIA</h2>
          <p style={{fontSize:'1.25rem',color:'#e5e7eb',marginBottom:'2rem'}}>Assine nosso clube e receba edições exclusivas mensais com desconto e brindes colecionáveis</p>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem',justifyContent:'center'}}>
            <input type="email" placeholder="Seu melhor e-mail" style={{padding:'0.75rem 1.5rem',backgroundColor:'rgba(31, 41, 55, 0.7)',color:'#f3f4f6',borderRadius:'9999px',border:'none',outline:'none',width:'100%'}}/>
            <button style={{backgroundColor:'#f59e0b',color:'#000',padding:'0.75rem 2rem',borderRadius:'9999px',fontWeight:'bold',fontSize:'1.125rem',transition:'background-color 0.2s',':hover':{backgroundColor:'#eab308'}}}>ASSINAR AGORA</button>
          </div>
        </div>
      </section>
    </main>
  );
}