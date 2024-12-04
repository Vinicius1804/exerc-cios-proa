let romances = ["Memorial de Aires (1908)", "Ressureição (1872)", "Casa Velha (1885)", "Memórias Póstumas de Brás Cubas (1881)", "Helena (1876)", "Quincas Borba (1891)", "Esaú e Jacó (1904)", "A mão e a luva (1874)", "Dom Casmurro (1899)", "Iaiá Garcia (1878)"];

let poesias = ["Americanas (1875)", "Ocidentais (1880)", "Falenas (1870)", "Crisálidas (1864)", "Poesias Completas (1901)"];

let contos = ["Várias Histórias (1896)", "Histórias sem Data (1884)", "Papéis Avulsos (1882)", "Contos Fluminenses (1870)", "Histórias da Meia-Noite (1873)", "Relíquias de Casa Velha (1906)", "Páginas Recolhidas (1899)"];

console.log(romances);
console.log(poesias);
console.log(contos);
romances.sort();
poesias.sort();
contos.sort();

let obras = romances.concat(poesias, contos);
console.log(obras);

let livros_primeiros = [romances[0], poesias[0], contos[0]];
console.log(livros_primeiros);