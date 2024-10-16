//HEADER
const header = document.getElementById('header');
const divLogo = document.createElement('div');
divLogo.innerHTML = `
    <div>
        <img  src="../src/assets/logo.png" alt="Logo da clinca médica">
    </div>    
`;
divLogo.className = 'logo';
header.appendChild(divLogo);

const divMenu = document.createElement('div');
divMenu.innerHTML = `
        <ul>
            <li>
                <a href="#inicio">HOME</a>
            </li>
            <li>
                <a href="#sobre">SOBRE</a>
            </li>
            <li>
                <a href="#horario">HORÁRIO DE ATENDIMENTO</a>
            </li>
        </ul> 
`;
divMenu.className ='menu';
header.appendChild(divMenu);

//FOOTER

const footer = document.getElementById('footer');
const divContatos = document.createElement('div');
divContatos.innerHTML = `
    <h3>Fale Conosco</h3>
    <p>Entre em contato com a Clínica Vida Plena. Estamos aqui para responder suas dúvidas, agendar consultas e oferecer o melhor atendimento. Você também pode nos visitar pessoalmente, ou enviar uma mensagem pelo formulário ao lado.</p>
    <p><strong>Endereço:</strong> Rua da Saúde, 123, Bairro Central, Cidade X.</p>
    <p><strong>Telefone:</strong>(11)1111-1111</p>
    <p><strong>WhatsApp:</strong><a href="#">(11)99999-9999</a></p>
`;
divContatos.className = 'contatos';
footer.appendChild(divContatos);

const divMaps = document.createElement('div');
divMaps.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24599.556014246402!2d-46.61620420690042!3d-23.577568604186194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1729041714874!5m2!1spt-BR!2sbr" width="200" height="200" style="border:1px solid #fff; border-radius=8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
divMaps.className = 'maps';
footer.appendChild(divMaps);

const formulario = document.createElement('form');
formulario.innerHTML = `
    <label>Nome: </label>
    <input placeholder='Digite seu nome'>
    <label>Email: </label>
    <input placeholder='Digite seu email'>
    <label>Digite sua mensagem que entraremos em contato com você:</label>
    <textarea></textarea>
    <button type="submite">Enviar</button>
`;
formulario.className= 'formulario';
footer.appendChild(formulario);