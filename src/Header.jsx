import './Header.css';

export default function Header() {
  return (
    <header className='header' >
          <a href="#"><img id='img_logo' src="/src/assets/Jkart.png" alt="Jart Logo"/></a> 
          <div className='navbar'>
            <a href="#">Home</a>
            <a href="#">Category</a>
            <a href="#">Contact Us</a>
            <a href="#">Cart</a>
            <a href="#">Account</a>
          </div>
    </header>
  );
}