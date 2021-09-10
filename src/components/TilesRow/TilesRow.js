import React from 'react';

import Tile from './Tile.js';

const data = {
    set1: [
        {
            url: '/',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-V8U8-a432-7L9d_super-historia-300-dzielnych-spartan-664x442-nocrop.jpg',
            title: '300',
            description: 'Ekranizacja komiksu Franka Millera, która opowiada o bitwie pod Termopilami.'
        },
        {
            url: '/',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-V8U8-a432-7L9d_super-historia-300-dzielnych-spartan-664x442-nocrop.jpg',
            title: 'Skazani na Shawshank',
            description: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.'
        }
    ],
    set2: [
        {
            url: '/',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-V8U8-a432-7L9d_super-historia-300-dzielnych-spartan-664x442-nocrop.jpg',
            title: 'Nietykalni',
            description: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.'
        },
        {
            url: '/',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-V8U8-a432-7L9d_super-historia-300-dzielnych-spartan-664x442-nocrop.jpg',
            title: 'Zielona mila',
            description: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.'
        }
    ],
    set3: [
        {
            url: '/',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-V8U8-a432-7L9d_super-historia-300-dzielnych-spartan-664x442-nocrop.jpg',
            title: 'Ojciec chrzestny',
            description: 'Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.'
        }
    ]
}

function TilesRow() {
    return(
        <>
            {Object.keys(data).map((elem, index) => {
                const isWide = data[elem].length < 2 ? true : false;

                return (
                    <section className="row" key={`row-${index}`}>
                        {data[elem].map((elem, index) => {
                            return (
                                <Tile
                                    key={`tile-${index}`}
                                    url={elem.url}
                                    img={elem.img}
                                    title={elem.title}
                                    description={elem.description}
                                    wide={isWide}
                                />
                            )
                        })}
                    </section>
                )

            })}

        </>
    )
}

export default TilesRow;