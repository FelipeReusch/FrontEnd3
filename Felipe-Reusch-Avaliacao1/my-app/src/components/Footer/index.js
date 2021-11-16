import './style.scss';


const Footer = ({ empresa }) => {
 const generateDateString = () => {
 const creationYear = '2021';
 const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
 }
 return (
    <footer id="footer">
      
  <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
     <a className="text-muted" href="https://github.com/FelipeReusch"><img  src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" /></a>
     <a className="text-muted" href="https://www.linkedin.com/in/felipe-reusch-12399293"><img  src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" /></a>
     <a className="text-muted" href="mailto:felipe.reusch@gmail.com?subject=Contact"><img src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1637031784~hmac=dde543fcc38d77ba67f167a51a20d3d0" alt="" /></a>
  </div>
      
      <h3>{empresa} Todos os direitos reservados. &copy; Copyright {generateDateString()}</h3>
      
    </footer>
  );
}

export default Footer;